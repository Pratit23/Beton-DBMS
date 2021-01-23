import React, { useEffect, useState, useReducer } from 'react'
import Sidenav from '../Layouts/Sidenav';
import UploadButton from '../Buttons/UploadButton'
import { stateMachine, reducer } from '../Processing/StateMachine'
import LoadingButtonComplete from '../Buttons/LoadingButtonComplete'
import * as ml5 from "ml5";
import MainMap from '../Maps/MainMap'
import Geocode from "react-geocode";

let classifier;
let coords = '';

const ReportPage = () => {

    const [image, setImage] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [mlImage, setMlImage] = useState(null)
    const [url, setUrl] = useState('')
    const [predictions, setPredictions] = useState(null)
    const [state, dispatch] = useReducer(reducer, stateMachine.initial)

    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey("AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w");

    // set response language. Defaults to english.
    Geocode.setLanguage("en");


    const next = () => dispatch('next')

    const getCoords = (coord) => {
        console.log("Check this: ", coord)
        coords = coord
    }

    const handlePicture = (e) => {
        e.preventDefault()
        if (e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]))
            setMainImage(e.target.files[0])
            setMlImage(document.getElementById('img'))
        }
    }
    const handleUpload = async () => {


        console.log("Handle Upload triggered")
        const fileData = new FormData();
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
            if (document.querySelector('.upload')) {
                document.querySelector('.upload').dispatchEvent(new CustomEvent("toggle"));
            }
        }).then(async () => {
            // const mobileNetModel = await mobilenet.load()
            // setModel(mobileNetModel)
            // console.log("Model loaded")
        }).catch(err => {
            console.log(err);
            return err
        })
        next()
    }

    const confirmation = () => {
        alert("Do you agree that the picture uploaded solely belongs to you?")
        identify()
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
            if (document.querySelector('.verify')) {
                console.log("in verify biach")
                document.querySelector('.verify').dispatchEvent(new CustomEvent("toggle"));
            } else {
                console.log("bruh")
            }
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
                    || address[i] === 'Highway' || address[i] == 'highway' || address[i] === 'Highway,' || address[i] == 'highway,') {
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
        if (document.querySelector('.location')) {
            document.querySelector('.location').dispatchEvent(new CustomEvent("toggle"));
        }
        next()
    }

    const nextPress = {
        initial: { text: 'Upload', action: () => { handleUpload() } },
        ready: { text: 'Confirm', action: confirmation },
        classifying: { text: 'Identifying', action: () => next() },
        location: { text: 'Select', action: () => { selectLocation() } },
        complete: { text: 'Report', action: () => { } },
    }


    useEffect(() => {
        console.log("Report Page UseEffect Working")
        window.$(document).ready(function () {
            window.$('.materialboxed').materialbox();
        });
    }, [image])


    return (
        <div className="row">
            <div className="col s3" style={{ height: "100vh", backgroundColor: "black" }}>
                <Sidenav />
            </div>
            <div className="col s9" style={{ padding: "0", overflowX: "hidden" }}>
                <div className="row" style={{ margin: "0" }}>
                    <div className="col s8 reportForm">
                        <div className="row">
                            <div className="col s12">
                                <h2 className="black-text">REPORT POTHOLES</h2>
                            </div>
                            <div className="col s12">
                                {
                                    nextPress[state].text === 'Upload' ?
                                        <>
                                            <div className="col s6 right-align">
                                                {/* <div className="btn-floating btn-large red"><input type="file"/><i style={{padding: '70px'}} className="material-icons">upload</i></div> */}
                                                <div className="file-field input-field">
                                                    <div className="btn">
                                                        <span>File</span>
                                                        <input type="file" id="photo" onChange={handlePicture} />
                                                    </div>
                                                    <div className="file-path-wrapper">
                                                        <input className="file-path validate" type="text" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='imgContainer'>
                                                <img id="img" className="materialboxed" src={image} />
                                            </div>
                                        </>
                                        : null
                                }
                                {
                                    nextPress[state].text === 'Select' ?
                                        <MainMap getCoords={getCoords} /> : null
                                }
                            </div>
                            <div className="col s12">
                                <UploadButton action={nextPress[state].action} btnText={nextPress[state].text} />
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <h3>STEPS</h3>
                        <div className="hood">
                            <LoadingButtonComplete id="upload" />
                            <h5>Upload a picture</h5>
                        </div>

                        {/* {
                            upCheck ? <LoadingButtonComplete /> : <Spinner />
                        } */}
                        <div className="hood">
                            <LoadingButtonComplete id="verify" />
                            <h5>Verfying picture</h5>
                        </div>
                        {/* {
                            verifyCheck ? <LoadingButtonComplete /> : <Spinner />
                        } */}
                        <div className="hood">
                            <LoadingButtonComplete id="location" />
                            <h5>Select Location</h5>
                        </div>
                        {/* {
                            locationCheck ? <LoadingButtonComplete /> : <Spinner />
                        } */}
                        <h5>Your Details</h5>
                        <h5>Submit</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReportPage
