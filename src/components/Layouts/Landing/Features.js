import React from 'react';
import Levitating from '../../../images/features.gif';

const Features = () => {
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
              </div>
            </div> 
        </>
    )
}

export default Features
