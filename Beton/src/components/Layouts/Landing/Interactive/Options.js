import React from 'react';
import { Link } from "react-router-dom";
import './Options.css';
import UserLogin from '../../../../images/UserLogin.png';

const Options = (props) => {
    return (
        <>
            <div className="container" id="options">
                <h2 className="center-align">
                    Choose your type
                </h2>
                <hr className="divider center-align" style={{ width: "20%" }} />
                <p className="center-align">
                    Our platform provides interface for all types of users. Be it a citizen, contractor or an advertiser!
                </p>
            </div>
            <div className="wrapper">
                <div className="card-item animated fadeInUp">
                    <div className="color-back-img" style={{ background: "#e7edff" }}></div>
                    <img src="https://gatoledo.com/recursos.png" className="img-card" />
                    <h2 className="title">User Account</h2>
                    <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ipsum tempus, consequat tortor vitae, vehicula ante. Sed scelerisque, dolor et ultricies porttitor, diam ex vulputate mi, id convallis</p>
                    <div className="card-footer">
                        <Link className="btn-card" to="/login" style={{ background: "#e2deff", color: "#8168ff", textDecoration: "none" }}>Get Started</Link>
                    </div>
                </div>
                <div className="card-item animated fadeInUp">
                    <div className="color-back-img" style={{ background: "#A4E3CF" }}></div>
                    <img src={UserLogin} className="img-card" style={{ margin: "-45px auto 0" }} />
                    <h2 className="title">Contractor Account</h2>
                    <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ipsum tempus, consequat tortor vitae, vehicula ante. Sed scelerisque, dolor et ultricies porttitor, diam ex vulputate mi, id convallis</p>
                    <div className="card-footer">
                        <Link className="btn-card" to="/contractor/login" style={{ background: "#A4E3CF", color: "#fff", textDecoration: "none" }}>Get Started</Link>
                    </div>
                </div>
                <div className="card-item animated fadeInUp">
                    <div className="color-back-img" style={{ background: "#fff6e7" }}></div>
                    <img src="https://gatoledo.com/password.png" className="img-card" style={{ margin: "-45px auto 0" }} />
                    <h2 className="title">Advertiser Account</h2>
                    <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id ipsum tempus, consequat tortor vitae, vehicula ante. Sed scelerisque, dolor et ultricies porttitor, diam ex vulputate mi, id convallis</p>
                    <div className="card-footer">
                        <Link className="btn-card" to="/advertiser/login" style={{ background: "#ffefca", color: "#ffa521", textDecoration: "none" }}>Get Started</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Options
