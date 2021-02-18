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

let classifier;
let coords = ''

const ReportPage = (props) => {

    const [image, setImage] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [mlImage, setMlImage] = useState(null)
    const [url, setUrl] = useState('')
    const [predictions, setPredictions] = useState(null)
    const [state, dispatch] = useReducer(reducer, stateMachine.initial)
    const [reset, setReset] = useState(false)

    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey("AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w");

    // set response language. Defaults to english.
    Geocode.setLanguage("en");


    const next = () => dispatch('next')

    // const handleCancel = () => {
    //     setImage(null)
    //     setMainImage(null)
    //     mlImage(null)
        
    //     if (reset) {
    //         setReset(false)
    //     } else {
    //         setReset(true)
    //     }
    // }

    const getCoords = (coord) => {
        console.log("Check this: ", coord)
        coords = coord
    }

    const handlePicture = (image) => {
        if (image) {
            console.log("Image: ", image)
            setImage(URL.createObjectURL(image))
            setMainImage(image)
            setMlImage(<img src={image}></img>)
            document.getElementById("publishBtn").disabled = false;
            // document.getElementById("publishBtn").addEventListener('click', function(){
            //     nextPress[state].action()
            // })
        }
    }
    const handleUpload = async () => {
        console.log("Handle Upload triggered")
        const fileData = new FormData();
        console.log("Main Image", mainImage);
        fileData.append("file", mainImage);
        fileData.append("upload_preset", "levitation");
        fileData.append("cloud_name", "levitation");

        // saving to cloud first
        fetch('https://api.cloudinary.com/v1_1/levitation/image/upload', {
            method: "POST",
            body: fileData
        }).then(res => res.json()).then(data => {
            console.log(data.url);
            setUrl(data.url)
            console.log("Photo uploaded")
        }).catch(err => {
            console.log(err);
            return err
        })
        next()
    }

    const confirmation = () => {
        alert("Do you agree that the picture uploaded solely belongs to you?")
        identify()
        document.querySelectorAll('.tabbar li a')[1].dispatchEvent(new CustomEvent('click'))
        next()
    }

    const identify = async () => {
        classifier = ml5.imageClassifier('./model/model.json', modelLoaded);

        function modelLoaded() {
            console.log('Model Loaded!');
        }

        classifier.classify(mlImage, 5, function (err, results) {
            // Return the results
            console.log("Results:-- ", results)
            return results;
        }).then((results) => {
            // Set the predictions in the state
            setPredictions(results)
            console.log("Results: ", results)
        }).catch((err) => {
            console.log("Error: ", err)
        })

        // classifier.classify(document.getElementById('img'), (err, results) => {
        //     console.log("Plis work: ", results);
        //   });
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
                for (var i = 0; i < address.length; i++) {
                    if (address[i] === 'Road' || address[i] === 'road' || address[i] === 'road,' ||
                        address[i] === 'Road,' || address[i] === 'Mahamarg' || address[i] == 'marg', address[i] === 'Mahamarg,' || address[i] == 'marg,', address[i] === 'NH' || address[i] == 'SH'
                        || address[i] === 'Rd' || address[i] == 'rd' || address[i] === 'Rd,' || address[i] == 'rd,'
                        || address[i] === 'Highway' || address[i] === 'highway' || address[i] === 'Highway,' || address[i] === 'highway,') {
                        console.log("Valid Road")
                        break
                    } else {
                        console.log("Road Invalid")
                    }
                }
            },
            error => {
                console.error("Error fetching the land: ", error);
            })
        document.querySelectorAll('.tabbar li a')[2].dispatchEvent(new CustomEvent('click'))
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
        console.log("Report Page UseEffect Working")
        window.$(document).ready(function () {
            window.$('.materialboxed').materialbox();
        });
    }, [image])

    if(!localStorage.getItem('token')) return <Redirect to='/login' />

    return (
        <div>
            <Sidenav />
            <div id="main" className="row" style={{ marginBottom: "0", height: "100%" }} >
                <div className="col s12 m7">
                    <div className="section center-align" style={{ paddingTop: '50px' }}>
                        <ProgressCard one="active" two="" three="" props={props} style1="81.133px" style2="81.133px" />
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        {
                            nextPress[state].text === 'Upload' ?
                                <DropHere handlePicture={handlePicture} />
                                : null
                        }
                        {
                            nextPress[state].text === 'Confirm' ?
                                <img style={{ borderRadius: '24px', margin: '0 auto' }} id="img" className="materialboxed" src={image} />
                                : null
                        }
                        {
                            nextPress[state].text === 'Select' ?
                                <MainMap getCoords={getCoords} /> : null
                        }
                        <div className="section" style={{ paddingTop: '70px' }}>
                            <UploadButton img={mainImage} action={nextPress[state].action} btnText={nextPress[state].text} step="1" />
                            {
                                (mainImage && nextPress[state].text === 'Upload') ?
                                    <a style={{ marginLeft: '44%', marginTop: '20px' }} className="btn center-align red">Cancel</a>
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
