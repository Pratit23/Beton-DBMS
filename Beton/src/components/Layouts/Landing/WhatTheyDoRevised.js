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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
