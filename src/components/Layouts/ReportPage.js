import React, { useEffect, useState, useReducer } from 'react'
import Sidenav from '../Layouts/Sidenav';
import UploadButton from '../Buttons/UploadButton'
import { stateMachine, reducer } from '../Processing/StateMachine'
//import * as mobilenet from '@tensorflow-models/mobilenet'
import * as tf from '@tensorflow/tfjs-core'
import LoadingButton from '../Buttons/LoadingButton'
import LoadingButtonComplete from '../Buttons/LoadingButtonComplete'
import * as ml5 from "ml5";

let classifier;

const ReportPage = () => {

    const [image, setImage] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [url, setUrl] = useState('')
    const [state, dispatch] = useReducer(reducer, stateMachine.initial)
    const [model, setModel] = useState(null)
    const [results, setResults] = useState([])
    const [upCheck, setUpCheck] = useState(false)
    const [predictions, setPredictions] = useState([])
    const [verifyCheck, setVerifyCheck] = useState(false)

    const next = () => dispatch('next')

    const handlePicture = (e) => {
        e.preventDefault()
        if (e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]))
            setMainImage(e.target.files[0])
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
            setUpCheck(true)
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
        const img = document.getElementById('img');
        classifier = ml5.imageClassifier('./model/model.json', modelLoaded);

        function modelLoaded() {
            console.log('Model Loaded!');
        }

        classifier.classify(img, 5, function (err, results) {
            // Return the results
            console.log("Results: ", results)
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

    const nextPress = {
        initial: { text: 'Upload', action: () => { handleUpload() } },
        ready: { text: 'Confirm', action: confirmation },
        classifying: { text: 'Identifying', action: () => next() },
        complete: { text: 'Report', action: () => { } },
    }


    useEffect(() => {
        console.log("Report Page UseEffect Working")
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
                            <div className="col s12">
                                {
                                    console.log("Image 0: ", image),
                                    image ? <img id="img" className="responsive-img" src={image} /> : null
                                }
                            </div>
                            <div className="col s12">
                                <UploadButton action={nextPress[state].action} btnText={nextPress[state].text} />
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <h3>STEPS</h3>
                        <h5>Upload a picture</h5>
                        {
                            upCheck ? <LoadingButtonComplete /> : <LoadingButton />
                        }
                        <h5>Verfying picture</h5>
                        {
                            verifyCheck ? <LoadingButtonComplete /> : <LoadingButton />
                        }
                        <h5>Select Location</h5>
                        <h5>Your Details</h5>
                        <h5>Submit</h5>
                        {
                            predictions && predictions.length > 0 ?
                                predictions.map((pred, i) => {
                                    let { className, probability } = pred;
                                    probability = Math.floor(probability * 10000) / 100 + "%";
                                    return (
                                        <div key={i + ""}>{i + 1}. Prediction: { className} at { probability} </div>
                                    )
                                }) : null
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReportPage
