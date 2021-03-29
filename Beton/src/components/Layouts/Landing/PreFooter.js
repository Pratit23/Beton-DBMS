import React from 'react'
import GenericButton from '../../Buttons/GenericButton'
import SleepyYoda from './Interactive/SleepyYoda'

function PreFooter() {
    return (
        <div style={{ backgroundColor: "#977ba3" }}>
            <div className="col s12 center-align">
                <h2 style={{ marginTop: "0" }} className="white-text">
                    Be part of The Force
                </h2>
                <hr className="divider center-align" style={{ width: "20%" }} />
                <p className="white-text">
                    Hop on the train to become part of something bigger and earn some exciting rewards while you're at it.
                </p>
                <br />
                <br />
                <GenericButton text="Get Started" id="CTA2" link="signup" />
            </div>
            <SleepyYoda />
        </div>
    )
}

export default PreFooter
