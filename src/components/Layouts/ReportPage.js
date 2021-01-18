import React, { useEffect, useState, useReducer } from 'react'
import Sidenav from '../Layouts/Sidenav';
import UploadButton from '../Buttons/UploadButton'
import { stateMachine, reducer } from '../Processing/StateMachine'
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as tf from '@tensorflow/tfjs'

const ReportPage = () => {

    tf.setBackend("cpu");

    const [image, setImage] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [url, setUrl] = useState('')
    const [state, dispatch] = useReducer(reducer, stateMachine.initial)
    const [model, setModel] = useState(null)
    const [results, setResults] = useState([])

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
        }).then(async () => {
            const mobileNetModel = await mobilenet.load()
            setModel(mobileNetModel)
            console.log("Model loaded")
        }).catch(err => {
            console.log(err);
            return err
        })
        next()
    }

    const confirmation = () => {
        alert("Do you agree that the picture uploaded solely belongs to you?")
        next()
    }

    const identify = async () => {
        console.log("Image inside identify: ", mainImage)
        const img = document.getElementById('img');
        console.log("Img: ", img)
        const results = await model.classify(img)
        console.log("Results: ", results)
        next()
    }

    const nextPress = {
        initial: { text: 'Upload', action: () => { handleUpload() } },
        ready: { text: 'Confirm', action: confirmation },
        classifying: { text: 'Identifying', action: identify },
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
                        <h5>Verfying picture</h5>
                        <h5>Select Location</h5>
                        <h5>Your Details</h5>
                        <h5>Submit</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReportPage
