import React from 'react'
import { Link } from 'react-router-dom'
import AdvSignupForm from './Advertiser/AdvSignupForm';
import AdvCover from '../../images/advSignupCover.png'

const AdvSignupPage = (props) => {
    return (
        <div className="row" style={{
            height: "100%",
            width: "100%",
        }}>
            <div className="col s12 m4 hide-on-small-only"
                style={{
                    height: "100%",
                    overflow: "hidden",
                    background: "#f2d184",
                    color: "#866118"
                }}
            >
                <h6 style={{ marginTop: "50px", marginLeft: "10px" }} >
                    <Link to="/" style={{color: "#866118", textDecoration: "none"}} >Beton</Link>
                </h6>
                <h3 style={{ marginTop: "30px", marginLeft: "10px" }}>
                    Be the change you <br /> want to happen!
                </h3>
                    <img style={{}} src={AdvCover} alt="Abstract Cover"/>
            </div>
            <div className="col s12 m8 valign-wrapper" style={{height: "100%"}}>
                <AdvSignupForm props={props} />
            </div>
        </div>
    )
}

export default AdvSignupPage
