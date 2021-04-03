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
                    <p className="text-body">Get a chance to earn rewards after each verified report! Earn badges after multiple reports! Take routes that avoid potholes and reach your destination safely! Join a community of users that take action in making the roads a safer place!</p>
                    <div className="card-footer">
                        <Link className="btn-card" to="/login" style={{ background: "#e2deff", color: "#8168ff", textDecoration: "none" }}>Get Started</Link>
                    </div>
                </div>
                <div className="card-item animated fadeInUp">
                    <div className="color-back-img" style={{ background: "#A4E3CF" }}></div>
                    <img src={UserLogin} className="img-card" style={{ margin: "-45px auto 0" }} />
                    <h2 className="title">Contractor Account</h2>
                    <p className="text-body">
                        Contractors can now easily take up active tenders, see their past jobs, complete pothole tenders only after they are verified! Moreover, all this at just one interface. In addition to that, once a job is done, your name would be visible to the whole world! Got to give the credits, right?
                    </p>
                    <div className="card-footer">
                        <Link className="btn-card" to="/contractor/login" style={{ background: "#A4E3CF", color: "#fff", textDecoration: "none" }}>Get Started</Link>
                    </div>
                </div>
                <div className="card-item animated fadeInUp">
                    <div className="color-back-img" style={{ background: "#fff6e7" }}></div>
                    <img src="https://gatoledo.com/password.png" className="img-card" style={{ margin: "-45px auto 0" }} />
                    <h2 className="title">Advertiser Account</h2>
                    <p className="text-body">Put the coupons as well as the adverts, see the statistics for how many times the advert has been viewed. Can also manage the ads and manage the coupons as per the advertisers wish.  <br/><br/></p>
                    <div className="card-footer">
                        <Link className="btn-card" to="/advertiser/login" style={{ background: "#ffefca", color: "#ffa521", textDecoration: "none" }}>Get Started</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Options
