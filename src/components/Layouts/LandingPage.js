import React from 'react';
import Globe from '../Globe/Globe';
import Voice from '../../images/Voice.png';

const LandingPage = () => {

    return (
        <div>
            <Globe />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#000011" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,170.7C672,160,768,96,864,64C960,32,1056,32,1152,64C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>
            <div className="row container" style={{height: "300px", border: "1px solid lightgray", borderRadius: "12px"}}>
                    <div className="col s12 m6 valign-wrapper" style={{height: "100%"}}>
                        <h5>Your safety matters!</h5>
                        <p>Make the street safe and better to others...</p>
                    </div>
                    <div className="col s12 m6" style={{height: "100%"}}>
                        <img style={{ width: "auto", height: "100%"}} src={Voice}/>
                    </div>
            </div>
        </div>
    )
}

export default LandingPage
