import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';
import MainMap from '../Maps/MainMap';
import Sidenav from '../Layouts/Sidenav';
import SubmitButton from '../Buttons/SubmitButton'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { addFeedbackReport, decrypt } from '../../queries/query';
import Geocode from "react-geocode";

var coords = [0, 0]

const FeedbackReport = (props) => {

    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey("AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w");

    // set response language. Defaults to english.
    Geocode.setLanguage("en");


    useEffect(() => {
        return () => {
            window.$('.connect').connections('remove');
            console.log("in here")
            localStorage.removeItem("image");
        }
    })
    if (!localStorage.getItem("image") || localStorage.getItem("image") == null) return <Redirect to="/homepage" />

    const getCoords = (coord) => {
        console.log("Check this: ", coord)
        coords = coord
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let comment = document.querySelector("#textarea1").value
        if (comment == "" || coords[0] == 0 && coords[1] == 0) {
            M.toast({ html: "Please provide all the necessary details!" })
            return;
        }
        Geocode.fromLatLng(coords[0], coords[1]).then(
            async (response) => {
                var address = response.results[0].formatted_address;
                // setAddressi(address)


                // saving to cloud first
                let img = localStorage.getItem("image");
                console.log(img);
                let res = await props.addFeedbackReport({
                    variables: {
                        image: (img).toString(),
                        address: address,
                        location: `${coords[0]} ${coords[1]}`,
                        reportedAt: new Date().toDateString(),
                        reportedOn: new Date().toLocaleString().split(", ")[1],
                        userID: props.decrypt.decrypt.id,
                        noOfReports: props.decrypt.decrypt.karma
                    }
                })
                console.log("res in feedback", res);
                if (res && res.data && res.data.addFeedbackReport) {
                    M.toast({ html: "Feedback report successfully submitted!" });
                    props.history.push("/homepage");
                }
                else {
                    M.toast({ html: "Uh-oh! Something went wrong!" })
                }

            },
            error => {
                console.error("Error fetching the land: ", error);
            })
    }

    return (
        <div>
            <Sidenav />
            <div id="main" className="row" style={{ marginBottom: "0", height: "100%", overflowY: "scroll" }} >
                {/* first step */}
                <div className="col s11 offset-s1" style={{ marginTop: "40px" }}>
                    <h4 className="">
                        <span className="connect">1.</span> Basic Information
                    </h4>
                    <hr className="divider" style={{ marginBottom: "20px" }} />
                    <div className="col s12 m4 offset-m1">
                        <img src={localStorage.getItem("image")} alt="Reported image" style={{ height: "auto", width: "100%", borderRadius: "18px" }} />
                        {/* <img src={Test} alt="Reported image" style={{ height: "auto", width: "100%", borderRadius: "18px" }} /> */}
                    </div>
                    <div className="input-field col s12 m7">
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                        <label htmlFor="textarea1">Let us know what we did wrong!</label>
                    </div>
                </div>

                {/* second step */}
                <div className="col s10 offset-s2" style={{ marginTop: "20px" }}>
                    <h4 className="">
                        <span className="connect">2.</span> Landmark Information
                    </h4>
                    <hr className="divider" style={{ marginBottom: "20px" }} />
                    <div className="col s12">
                        <MainMap getCoords={getCoords} />
                    </div>
                </div>
                <div className="col s10 offset-s2" style={{ marginTop: "10px" }}>
                    <SubmitButton text="Submit feedback" id="feedbackButton" func={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(addFeedbackReport, { name: "addFeedbackReport" }),
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
)(FeedbackReport)
