import React from 'react'
import SignUpCover2 from './img/SignUp/SignUpCover2.png'
import SignUpCover from './img/SignUp/SignUpCover.png'
import SignUpForm from './Interactive/SignUpForm';

const SignUpRevised = (props) => {
    return (
        <>
           <div className="row" style={{
               height: "100%",
               width: "100%",
               background: "#181818"
           }}>
                <div className="col s12 m6 signupformwrapper valign-wrapper" 
                    style={{ height: "100%", position: "relative" }}
                >
                    <SignUpForm props={{...props}}/>
                    <img style={{height: "200px", width: "auto", position: "absolute", bottom: 0, left: 0}} src={SignUpCover} alt="Abstract Cover"/>
                </div>
                <div className="col s12 m6"
                    style={{
                        height: "100%",
                        overflow: "hidden"
                    }}
                >
                    <img style={{height: "100%", width: "auto"}} src={SignUpCover2} alt="Abstract Cover"/>
                </div>
            </div> 
        </>
    )
}

export default SignUpRevised
