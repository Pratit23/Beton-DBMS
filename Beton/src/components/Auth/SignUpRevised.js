import React from 'react'
import SignUpCover2 from './img/SignUp/SignUpCover2.png'
import SignUpCover from './img/SignUp/SignUpCover.png'
import SignUpForm from './Interactive/SignUpForm';
import { decrypt } from '../../queries/query';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { Redirect } from 'react-router-dom';


const SignUpRevised = (props) => {
    
    if(localStorage.getItem('token') && (props && props.decrypt && props.decrypt.loading == false && props.decrypt.decrypt && props.decrypt.decrypt.id) ) return <Redirect to='/homepage' />

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
                    <img className="hide-on-med-and-down" style={{height: "200px", width: "auto", position: "absolute", bottom: 0, left: 0, zIndex: 0}} src={SignUpCover} alt="Abstract Cover"/>
                </div>
                <div className="col s12 m6 hide-on-small-only"
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

export default compose(
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
)(SignUpRevised)
