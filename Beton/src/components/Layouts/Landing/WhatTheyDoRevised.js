import React from 'react'
import GenericButton from '../../Buttons/GenericButton'
import AboutUsGlobe from './Interactive/AboutUsGlobe'
import WhatWeDoInteractive from './Interactive/WhatWeDoInteractive'

const WhatTheyDoRevised = () => {
    return (
        <div className="section">
            <div className="container spicyWhat">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="chip">
                            About Us
                        </div>
                        <h2>What we do?</h2>
                        <hr className="divider" />
                        <p>
                            We came up with the idea for Beton when we realized there's no official app or website to help commuters report potholes on the roads and have a safe journey, avoiding the pothole-filled roads.
                            <br/>
                            <br/>
                            About 6 people die on Indian roads everyday due to potholes, and we feel that with increased reporting, verifying and adding  the potholes to the database, hopefully the safety of the roads will increase and less pothole-related accidents will occur.
                        </p>
                        <div className="right-align" style={{width: "max-content"}}>
                            <GenericButton text="Be with us" id="CTA" link="signup" />
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <AboutUsGlobe />
                    </div>
                </div>
                <WhatWeDoInteractive />
            </div>
        </div>
    )
}

export default WhatTheyDoRevised
