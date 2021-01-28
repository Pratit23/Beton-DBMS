import React from 'react';
import './LandingButton.scss';
import { NavLink } from 'react-router-dom'

const LandingButton = () => {
    return (
        <NavLink to='/Homepage'>
            <button className="ios-15" style={{ margin: "10px 5px", float: "right" }}>
                <div className="wrapper">
                    <span style={{ fontFamily: "Arial", letterSpacing: "0.2em" }}>Enter</span>
                    <div className="circle circle-12"></div>
                    <div className="circle circle-11"></div>
                    <div className="circle circle-10"></div>
                    <div className="circle circle-9"></div>
                    <div className="circle circle-8"></div>
                    <div className="circle circle-7"></div>
                    <div className="circle circle-6"></div>
                    <div className="circle circle-5"></div>
                    <div className="circle circle-4"></div>
                    <div className="circle circle-3"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-1"></div>
                </div>
            </button>
        </NavLink>
    )
}

export default LandingButton
