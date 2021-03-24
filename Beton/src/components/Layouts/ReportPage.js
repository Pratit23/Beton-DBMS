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
import { Link } from 'react-router-dom';
import { useLazyQuery } from 'react-apollo';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { addBaseReport, addReport, decrypt, existingBaseCoordinate } from '../../queries/query'
import Summary from './Landing/Summary';
import AdCard from '../Cards/AdCard';


let classifier;
let coords = [0, 0]
var tempUrl = "";
var tempImage;

const ReportPage = (props) => {

    const [image, setImage] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [url, setUrl] = useState('')
    const [predictions, setPredictions] = useState(null)
    const [state, dispatch] = useReducer(reducer, stateMachine.initial)
    const [reset, setReset] = useState(false)
    const [addressi, setAddressi] = useState("")

    // lazy query here
    const [existingBase, { called, loading, data }] = useLazyQuery(
        existingBaseCoordinate,
        {
            variables: {
                latitude: `${coords[0]}`,
                longitude: `${coords[1]}`
            }
        }
    );

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
        }
    }
    const handleUpload = async () => {
        console.log("Image selected successfully")
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
                const fileData = new FormData();
                console.log("Main Image", mainImage);
                fileData.append("file", mainImage);
                fileData.append("upload_preset", "levitation");
                fileData.append("cloud_name", "levitation");

                fetch('https://api.cloudinary.com/v1_1/levitation/image/upload', {
                    method: "POST",
                    body: fileData
                }).then(res => res.json()).then(data => {
                    localStorage.setItem("image", data.url);
                    document.querySelector("#spamImage").src = image;
                    window.$('.modal').modal('open');
                    setTimeout(function () {
                        dispatch("initial");
                        setImage(null);
                        setMainImage(null);
                        setPredictions(null);
                    }, 2000)
                }).catch(err => {
                    console.log(err);
                    return err
                })

            }
        }).catch((err) => {
            console.log("Error: ", err)
        })
        next()
    }

    const selectLocation = async () => {
        console.log("Selected location: ", coords)
        if (coords[0] == 0 && coords[1] == 0) {
            M.toast({ html: "Please select a location on the map!" })
        } else {
            Geocode.fromLatLng(coords[0], coords[1]).then(
                async (response) => {
                    var address = response.results[0].formatted_address;
                    setAddressi(address)
                    address = address.split(" " || ",")
                    let isFound = address.filter(ai => specialOnes.includes(String(ai).toLowerCase()));
                    if (isFound) {
                        console.log("Valid Road")
                    } else {
                        console.log("Invalid Road")
                    }
                },
                error => {
                    console.error("Error fetching the land: ", error);
                })
            await existingBase();
            document.querySelectorAll('.tabbar li a')[2].dispatchEvent(new CustomEvent('moveIt'))
            next()
        }
    }

    const uploadPhoto = () => {
        const fileData = new FormData();
        console.log("Main Image", mainImage);
        fileData.append("file", mainImage);
        fileData.append("upload_preset", "levitation");
        fileData.append("cloud_name", "levitation");

        // saving to cloud first
        return fetch('https://api.cloudinary.com/v1_1/levitation/image/upload', {
            method: "POST",
            body: fileData
        }).then(res => res.json()).then(data => {
            console.log(data.url);
            // setUrl(data.url)
            console.log("Photo uploaded")
            return data.url;
        }).catch(err => {
            console.log(err);
            return err
        })
    }

    const HandleReport = async () => {
        console.log("Coords", coords)
        if (called && loading) return M.toast({ html: "Initializing..." });
        if (data && data.existingBaseCoordinate) {
            console.log("Data here", data)
            let url = await uploadPhoto();
            console.log("Image url", url)
            if (url != "") {
                if (data.existingBaseCoordinate.location == null) {
                    // call base point query mutation here
                    console.log("prarp", props)
                    let res = await props.addBaseReport({
                        variables: {
                            image: url,
                            address: addressi,
                            location: `${coords[0]} ${coords[1]}`,
                            reportedAt: new Date().toDateString(),
                            reportedOn: new Date().toLocaleString().split(", ")[1],
                            userID: props.decrypt.decrypt.id,
                            noOfReports: props.decrypt.decrypt.karma
                        }
                    })
                    console.log("res in base", res);
                    if (res && res.data && res.data.addBaseReport) {
                        M.toast({ html: "Report successfully submitted!" });
                        props.history.push("/homepage");
                    }
                    else {
                        M.toast({ html: "Uh-oh! Something went wrong!" })
                    }
                } else {
                    // call dependenty point query mutation here
                    let res = await props.addReport({
                        variables: {
                            image: url,
                            address: addressi,
                            location: `${coords[0]} ${coords[1]}`,
                            reportedAt: new Date().toDateString(),
                            reportedOn: new Date().toLocaleString().split(", ")[1],
                            userID: props.decrypt.decrypt.id,
                            baseParent: data.existingBaseCoordinate.id,
                            karma: props.decrypt.decrypt.karma
                        }
                    })
                    console.log("res in dep", res);
                    if (res && res.data && res.data.addReport) {
                        M.toast({ html: "Report successfully submitted!" });
                        props.history.push("/homepage");
                    }
                    else {
                        M.toast({ html: "Uh-oh! Something went wrong!" })
                    }
                }
            }
        }

    }

    const nextPress = {
        initial: { text: 'Upload', action: () => handleUpload() },
        ready: { text: 'Confirm', action: () => confirmation() },
        classifying: { text: 'Identifying', action: () => next() },
        details: { text: 'Details', action: () => { console.log("Details entered"); next() } },
        location: { text: 'Select', action: () => { selectLocation() } },
        complete: { text: 'Report', action: () => { HandleReport() } },
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
    if ((!localStorage.getItem('token')) || (props && props.decrypt && props.decrypt.loading == false && (!props.decrypt.decrypt || !props.decrypt.decrypt.id))) return <Redirect to='/login' />
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
                                wherein we couldn't find a pothole. <br /> However, if you think we made a mistake do let us know <Link

                                    to="/feedback/report"> over here </Link>
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
                        {
                            nextPress[state].text === 'Report' ?
                                <Summary src={image} address={addressi} filename={mainImage.name} size={mainImage.size} uploaded={mainImage.lastModifiedDate} /> : null
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
            <AdCard />
        </div>

    )
}

export default compose(
    graphql(addBaseReport, { name: "addBaseReport" }),
    graphql(addReport, { name: "addReport" }),
    graphql(decrypt, {
        name: "decrypt",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    token: temp
                }
            }
        }
    })
)(ReportPage)
