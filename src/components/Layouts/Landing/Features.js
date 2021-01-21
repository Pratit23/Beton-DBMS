import React, { useState } from 'react';
import Levitating from '../../../images/features.gif';
import DeleteSpam from './Interactive/DeleteSpam';
import Reward from './Interactive/Reward';

const Features = () => {

    const [shred, setShred] = useState('Go ahead, get rid of the spam report. You know you want to, click it!');
    const [like, setLike] = useState('Reward yourself. Go on, do it! (~˘▾˘)~');

    const handleShred = () =>{
        var items = [
            'There we go. Shred it. Shred it good!',
            "Yess get rid of the spam ones",
            "See! It's that easy and simple!",
            "Nice job, we have a good set now"
        ]
        var item = items[Math.floor(Math.random() * items.length)];
        setShred(item)
    }
    
    const handleLike = () => {
        var items = [
            "There we go!",
            "Perfectoo!",
            "Feels nice, doesn't it?",
            "Oooo. That felt good, want to do it again?"
        ]
        var item = items[Math.floor(Math.random() * items.length)];
        setLike(item)
    }

    return (
        <>
           <div className="section" style={{ backgroundColor: "#E63946" }} >
              <div className="container white" style={{ borderRadius: "24px", width: "85%" }}>
                <div className="row" style={{ paddingTop: "20px" }}>
                    <div className="col s12 center-align">
                        <h3 className="center-align">Why Us?</h3>
                    </div>
                    <div className="col s12 m5">
                        <img src={Levitating} alt="Features"
                            style={{ width: "100%", height: "auto", borderRadius: "24px" }}
                        />
                    </div>
                    <div className="col s12 m7">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* feature 1 */}
                <div className="row container">
                    <div className="col s12 m6 center-align">
                        
                    </div>
                    <div className="col s12 m6">
                        <h5>Report whenever, wherever and leave the rest to us!</h5>
                        <p>
                            Report anything ranging from any potholes, to illegal hawkers to land enroachers 
                            using just an image.
                        </p>
                    </div>
                </div>

                {/* feature 2 */}
                <div className="row container" style={{ display: "flex", alignItems: "stretch" }}>
                    <div className="col s12 m6">
                        <h5>Verified reports!</h5>
                        <p>
                            To avoid any kind of scam, our system verifies the item you're trying to report
                            using a highly accurate AI Model so as to allow only genuine reports to the
                            government and you people!
                        </p>
                        <p style={{ fontFamily: "'Nanum Pen Script', cursive", fontSize: "large"}}>
                            {shred}
                        </p>
                    </div>
                    <div className="col s12 m6 center-align valign-wrapper"
                        style={{  }}
                    >
                        <DeleteSpam onClick={handleShred}/>
                    </div>
                </div>

                {/* feature 3 */}
                <div className="row container" style={{ display: "flex", alignItems: "stretch" }}>
                    <div className="col s12 m6 center-align valign-wrapper">
                        <Reward  onClick={handleLike}/>
                    </div>
                    <div className="col s12 m6">
                        <h5>Rewards system? Yessir!</h5>
                        <p>
                            Yess, you heard it right! Claim exciting rewards in form of coupons
                            for every successful report you make. Talk about a good offer
                        </p>
                        <p style={{ fontFamily: "'Nanum Pen Script', cursive", fontSize: "large"}}>
                            {like}
                        </p>
                    </div>
                </div>
              </div>
            </div> 
        </>
    )
}

export default Features
