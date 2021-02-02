import React from 'react'
import GenericButton from '../../Buttons/GenericButton'
import SleepyYoda from './Interactive/SleepyYoda'

function PreFooter() {
    return (
        <div style={{ backgroundColor: "#977ba3" }}>
            <div className="col s12 center-align">
                <h4 style={{ marginTop:"0" }} className="white-text">
                    Be part of The Force
                </h4>
                <p className="white-text">
                    Hop on the train to become part of something bigger and earn some exciting rewards while you're at it.
                </p>
                <GenericButton text="Get Started" id="CTA2" link="signup" />
            </div>
            <SleepyYoda />
        </div>
    )
}

export default PreFooter
