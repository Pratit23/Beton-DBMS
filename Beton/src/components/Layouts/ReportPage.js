import React, { useEffect, useState, useReducer } from 'react'
import Sidenav from '../Layouts/Sidenav';
import UploadButton from '../Buttons/UploadButton'
import { stateMachine, reducer } from '../Processing/StateMachine'
import * as ml5 from "ml5";
import MainMap from '../Maps/MainMap'
import Geocode from "react-geocode";
import DropHere from '../Buttons/DropHere';
import ProgressCard from '../Cards/ProgressCard';
import initial from '../../images/initial.jpg'
import location from '../../images/location.jpg'
import deets from '../../images/deets.jpg'
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';
import { specialOnes } from './Highways'
// import SpamImage from '../Modals/SpamImage';
import { Link } from 'react-router-dom';


let classifier;
let coords = ''

const ReportPage = (props) => {

    const [image, setImage] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [url, setUrl] = useState('')
    const [predictions, setPredictions] = useState(null)
    const [state, dispatch] = useReducer(reducer, stateMachine.initial)
    const [reset, setReset] = useState(false)

    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey("AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w");

    // set response language. Defaults to english.
    Geocode.setLanguage("en");


    const next = () => dispatch('next')

    const getCoords = (coord) => {
        console.log("Check this: ", coord)
        coords = coord
    }

    const handlePicture = (image) => {
        if (image) {
            console.log("Image: ", image)
            setImage(URL.createObjectURL(image))
            setMainImage(image)
            document.getElementById("publishBtn").disabled = false;
            // document.getElementById("publishBtn").addEventListener('moveIt', function(){
            //     nextPress[state].action()
            // })
        }
    }
    const handleUpload = async () => {
        console.log("Image selected successfully")
        // const fileData = new FormData();
        // console.log("Main Image", mainImage);
        // fileData.append("file", mainImage);
        // fileData.append("upload_preset", "levitation");
        // fileData.append("cloud_name", "levitation");

        // // saving to cloud first
        // fetch('https://api.cloudinary.com/v1_1/levitation/image/upload', {
        //     method: "POST",
        //     body: fileData
        // }).then(res => res.json()).then(data => {
        //     console.log(data.url);
        //     setUrl(data.url)
        //     console.log("Photo uploaded")
        // }).catch(err => {
        //     console.log(err);
        //     return err
        // })
        next()
    }

    const confirmation = () => {
        alert("Do you agree that the picture uploaded solely belongs to you?")
        identify()
        document.querySelectorAll('.tabbar li a')[1].dispatchEvent(new CustomEvent('moveIt'))
        next()
    }

    const identify = async () => {
        classifier = ml5.imageClassifier('./model/model.json', modelLoaded);

        function modelLoaded() {
            M.toast({ html: "Analysing image..." })
        }
        let testDiv = document.querySelector("#ml5Image");
        classifier.classify(testDiv, 5, function (err, results) {
            // Return the results
            console.log("Results:-- ", results)
            return results;
        }).then((results) => {
            // Set the predictions in the state
            setPredictions(results)
            // console.log("Results: ", results)

            // pothole prediction here
            if (results[0].label == "Potholes" && results[0].confidence > 0.85) {
                // its a pothole
                M.toast({ html: "Woohoo! Pothole detected. Let's quickly complete this to get your report on the map!" })
            } else {
                // no pothole detected
                M.toast({ html: "Oops! Something doesn't seem right." })
                setTimeout(function () {
                    document.querySelectorAll('.tabbar li a')[0].dispatchEvent(new CustomEvent('moveIt'));
                }, 1000);
                document.querySelector("#spamImage").src = image;
                window.$('.modal').modal('open');
                setTimeout(function(){
                    dispatch("initial");
                    setImage(null);
                    setMainImage(null);
                    setPredictions(null);
                }, 2000)
            }
        }).catch((err) => {
            console.log("Error: ", err)
        })
        next()
    }

    const selectLocation = () => {
        console.log("Selected location: ", coords)
        Geocode.fromLatLng(coords[0], coords[1]).then(
            response => {
                var address = response.results[0].formatted_address;
                console.log("Address: ", address)
                address = address.split(" " || ",")
                console.log("Address array: ", address)

                let isFounded = address.filter(ai => specialOnes.includes(String(ai).toLowerCase()));
                if (isFounded) {
                    console.log("Valid Road")
                } else {
                    console.log("Invalid Road")
                }
            },
            error => {
                console.error("Error fetching the land: ", error);
            })
        document.querySelectorAll('.tabbar li a')[2].dispatchEvent(new CustomEvent('moveIt'))
        next()
    }

    const nextPress = {
        initial: { text: 'Upload', action: () => handleUpload() },
        ready: { text: 'Confirm', action: () => confirmation() },
        classifying: { text: 'Identifying', action: () => next() },
        details: { text: 'Details', action: () => { console.log("Details entered"); next() } },
        location: { text: 'Select', action: () => { selectLocation() } },
        complete: { text: 'Report', action: () => { } },
    }

    useEffect(() => {
        window.$(document).ready(function () {
            window.$('.modal').modal();
        });
    }, [])

    useEffect(() => {
        console.log("Report Page UseEffect Working")
        window.$(document).ready(function () {
            window.$('.materialboxed').materialbox();
        });

    }, [image])

    if (!localStorage.getItem('token')) return <Redirect to='/login' />
    console.log("NextPress", nextPress, nextPress[state], state)
    return (
        <div>
            {/* modal thingy if things goes sideways */}
            <div id="modal2" className="modal">
                <div className="modal-content" style={{ height: "100%" }}>
                    <div className="BannerWrapper" style={{ height: "100%" }}>
                    </div>
                    <span id="popMoto">We can't take that!</span>
                    <div className="row">
                        <div className="col s12 m6">
                            <img src="" alt="Spam image" id="spamImage" style={{ width: "100%", height: "auto", borderRadius: "18px" }}></img>
                        </div>
                        <div className="col s12 m6">
                            <p>
                                Sorry, we can't accept this image. This may be due to a spam image being uploaded
                                wherein we couldn't find a pothole. <br/> However, if you think we made a mistake do let us know <Link to="/feedbackReport"> over here</Link>
                                and our team will get back to you and credit you for the same,
                                if accurate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Sidenav />
            <div id="main" className="row" style={{ marginBottom: "0", height: "100%" }} >
                <div className="col s12 m7">
                    <div className="section center-align" style={{ paddingTop: '50px' }}>
                        <ProgressCard one="active" two="" three="" dispatch={dispatch} props={props} current={nextPress[state].text} machine={nextPress} style1="81.133px" style2="81.133px" />
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <img src="" id="ml5Image" style={{ display: "none" }} />
                        {
                            nextPress[state].text === 'Upload' ?
                                <DropHere handlePicture={handlePicture} />
                                : null
                        }
                        {
                            nextPress[state].text === 'Confirm' ?
                                <img style={{
                                    borderRadius: '24px',
                                    margin: '0 auto',
                                    height: "50vh",
                                    width: "auto !important"
                                }} id="img" className="materialboxed" src={image} />
                                : null
                        }
                        {
                            nextPress[state].text === 'Select' ?
                                <MainMap getCoords={getCoords} /> : null
                        }
                        <div className="section" style={{ paddingTop: '70px' }}>
                            <UploadButton img={mainImage} action={nextPress[state].action} btnText={nextPress[state].text} step="1" />
                            {
                                (mainImage) ?
                                    <div style={{
                                        textAlign: "center",
                                        marginTop: '20px',
                                    }} >
                                        <a onClick={() => {
                                            if (window.confirm("Are you sure that you want to cancel this operation?")) {
                                                props.history.push("/homepage")
                                            }
                                        }} style={{
                                            // marginLeft: '44%',
                                            textDecoration: "none",
                                            borderRadius: "12px",
                                            width: "105px",
                                            margin: "0 auto"
                                        }} className="btn center-align red white-text">Cancel</a>
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className="col m5 hide-on-small-only" style={{ overflow: "hidden", height: "100%" }} >
                    {
                        nextPress[state].text === "Select" ? (
                            <img src={location}
                                alt="Select location"
                                style={{
                                    height: "100%"
                                }}
                            />
                        ) : nextPress[state].text === "Report" ? (
                            <img src={deets}
                                alt="Enter details"
                                style={{
                                    height: "100%"
                                }}
                            />
                        ) : (
                                    <img src={initial}
                                        alt="Select an image"
                                        style={{
                                            height: "100%"
                                        }}
                                    />
                                )
                    }

                </div>
            </div>
        </div>

    )
}

export default ReportPage
