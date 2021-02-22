import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';
import Test from '../../images/deets.jpg';
import MainMap from '../Maps/MainMap';
import Sidenav from '../Layouts/Sidenav';
import SubmitButton from '../Buttons/SubmitButton'
import e from 'cors';

var coords = [0, 0]

const FeedbackReport = () => {
    const [url, setUrl] = useState('')

    useEffect(() => {
        window.$(document).ready(function(){
            window.$('.connect').connections();
        })
        return () => {
            console.log("in here")
            localStorage.removeItem("image");
            window.$('.connect').connections('remove');
        }
    })
    if (!localStorage.getItem("image")) return <Redirect to="/homepage" />

    const getCoords = (coord) => {
        console.log("Check this: ", coord)
        coords = coord
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let comment = document.querySelector("#textarea1")
        if(comment == "" || coords[0] == 0 && coords[1] == 0){
            M.toast({ html: "Please provide all the necessary details!" })
            return;
        }
        const fileData = new FormData();
        let mainImage = JSON.parse(localStorage.getItem("image"))
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
            return data.url;
        }).catch(err => {
            console.log(err);
            return err
        })
    }

    return (
        <div>
            <Sidenav />
            <div id="main" className="row" style={{ marginBottom: "0", height: "100%" }} >
                {/* first step */}
                <div className="col s11 offset-s1" style={{marginTop: "40px"}}>
                    <h4 className="">
                        <span className="connect">1.</span> Basic Information
                    </h4>
                    <hr className="divider" style={{marginBottom: "20px"}}/>
                    <div className="col s12 m4 offset-m1">
                        <img src={URL.createObjectURL(JSON.parse(localStorage.getItem("image")))} alt="Reported image" style={{ height: "auto", width: "100%", borderRadius: "18px" }}/>
                        {/* <img src={Test} alt="Reported image" style={{ height: "auto", width: "100%", borderRadius: "18px" }} /> */}
                    </div>
                    <div className="input-field col s12 m7">
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label for="textarea1">Let us know what we did wrong!</label>
                    </div>
                </div>

                {/* second step */}
                <div className="col s10 offset-s2" style={{marginTop: "20px"}}>
                    <h4 className="">
                        <span className="connect">2.</span> Landmark Information
                    </h4>
                    <hr className="divider" style={{marginBottom: "20px"}}/>
                    <div className="col s12">
                        <MainMap getCoords={getCoords} />
                    </div>
                </div>
                <div className="col s10 offset-s2" style={{marginTop: "10px"}}>
                    <SubmitButton text="Submit feedback" id="feedbackButton" func={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default FeedbackReport
