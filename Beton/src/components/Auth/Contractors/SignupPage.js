import React from 'react'
import SignUpForm from './SignupForm'
import roadtrip from './roadtrip.png';


const SignupPage = (props) => {
    return (
        <>
            <div className="row" style={{
                height: "100%",
                width: "100%",
                //    background: "#181818"
            }}>
                <div className="col s12 m6 l4 signupformwrapper valign-wrapper"
                    style={{ height: "100%", position: "relative" }}
                >
                    <SignUpForm props={{ ...props }} />
                </div>
                <div className="col s12 m6 l8 hide-on-small-only"
                    style={{
                        height: "100%",
                        overflow: "hidden",
                        paddingRight: "0"
                    }}
                >
                    <img className="signUpSide" src={roadtrip} alt="Abstract Cover" />
                </div>
            </div>
        </>
    )
}

export default SignupPage
