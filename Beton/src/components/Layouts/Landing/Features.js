import React, { useState } from 'react';
import Levitating from '../../../images/features.gif';
import Lottie from 'react-lottie';
import Verified from '../../../images/Lottie/verified.json';
import global from '../../../images/Lottie/global.json';
import reward from '../../../images/Lottie/reward.json';

const Features = () => {
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: global,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: Verified,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: reward,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <>
            <div className="section" style={{ backgroundColor: "#E63946" }} id="whyus" >
                <div className="container white" style={{ borderRadius: "24px", width: "85%", paddingBottom: "20px" }}>
                    <div className="row" style={{ paddingTop: "20px" }}>
                        <br />
                        <br />
                        <div className="col s10 offset-s1 m5">
                            <img src={Levitating} alt="Features"
                                style={{ width: "100%", height: "auto", borderRadius: "24px" }}
                            />
                        </div>
                        <div className="col s10 offset-s1 m6">
                            <div className="chip">
                                Features
                        </div>
                            <h2>Why Us?</h2>
                            <hr className="divider" />
                            <p>
                                Beton uses only verified pothole reports to make the journey for the user as hassle free as possible! Users also stand to earn rewards after each of their pothole reports is verified! Users also get a feeling of responsibility and community as they join others in reporting potholes and making the roads a better and safer place! Beton is very user friendly, easy to understand and simple to use! Beton is easily accessible as an app on your phone as well as a useful website.
                            </p>
                        </div>
                    </div>

                    <div className="row container" style={{ width: "87%" }} >
                        {/* feature 1 */}
                        <div className="col s10 offset-s1 m4">
                            <div className="card" style={{ borderRadius: "18px" }} >
                                <div className="card-content black-text" style={{ borderRadius: "18px", height: "550px" }} >
                                    <div className="col s12 center-align valign-wrapper" style={{ height: "284px" }}>
                                        <Lottie options={defaultOptions1}
                                            width={"100%"}
                                            height={"auto"}
                                            isStopped={false}
                                            isPaused={false}

                                        />
                                    </div>
                                    <span className="card-title center-align">
                                        Report whenever and wherever!
                                    </span>
                                    <p className="center-align grey-text" >
                                        Report anything ranging from any potholes, to illegal hawkers to land enroachers
                                        using just an image.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* feature 2 */}
                        <div className="col s10 offset-s1 m4">
                            <div className="card" style={{ borderRadius: "18px" }} >
                                <div className="card-content black-text" style={{ borderRadius: "18px", height: "550px" }} >
                                    <div className="col s12 center-align valign-wrapper" style={{ height: "284px" }}>
                                        <Lottie options={defaultOptions2}
                                            width={"100%"}
                                            height={"auto"}
                                            isStopped={false}
                                            isPaused={false}

                                        />
                                    </div>
                                    <span className="card-title center-align">Verified reports</span>
                                    <p className="center-align grey-text" >
                                        To avoid any kind of spam, our system verifies the item you're trying to report
                                        using a highly accurate AI Model so as to allow only genuine reports to the
                                        government and you people!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* feature 3 */}
                        <div className="col s10 offset-s1 m4">
                            <div className="card" style={{ borderRadius: "18px" }} >
                                <div className="card-content black-text" style={{ borderRadius: "18px", height: "550px" }} >
                                    <div className="col s12 center-align valign-wrapper" style={{ height: "284px" }}>
                                        <Lottie options={defaultOptions3}
                                            width={"150%"}
                                            height={"auto"}
                                            isStopped={false}
                                            isPaused={false}

                                        />
                                    </div>
                                    <span className="card-title center-align">Rewards system? Yessir!</span>
                                    <p className="center-align grey-text" >
                                        Yess, you heard it right! Claim exciting rewards in form of coupons
                                        for every successful report you make. Talk about a good offer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
