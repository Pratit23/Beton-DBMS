import React from 'react'
import { Link } from 'react-router-dom'
import AdvCover from '../../images/advSignupCover.png'
import AdvLoginForm from './Advertiser/AdvLoginForm';

const AdvLoginPage = (props) => {
    return (
        <div className="row" style={{
            height: "100%",
            width: "100%",
        }}>
            <div className="col s12 m8 valign-wrapper" style={{height: "100%"}}>
                <AdvLoginForm props={props} />
            </div>
            <div className="col s12 m4 hide-on-small-only pink"
                style={{
                    height: "100%",
                    overflow: "hidden",
                    color: "#fff"
                }}
            >
                <h6 style={{ marginTop: "50px", marginLeft: "10px" }} >
                    <Link to="/" style={{color: "#fff", textDecoration: "none"}} >Beton</Link>
                </h6>
                <h3 style={{ marginTop: "30px", marginLeft: "10px" }}>
                    Be part <br /> of the change!
                </h3>
                    <img style={{}} src={AdvCover} alt="Abstract Cover"/>
            </div>
            
        </div>
    )
}

export default AdvLoginPage
