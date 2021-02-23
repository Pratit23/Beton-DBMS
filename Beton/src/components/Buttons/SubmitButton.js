import React from 'react';
import './GenericButton.scss';
import { NavLink } from 'react-router-dom'

const GenericButton = ({ text, id, func }) => {
    return (
        <>
            <div className="last">
                <button className="generic-btn" id={id} onClick={func}>
                    <span>{text}</span>
                    <svg preserveAspectRatio="none" viewBox="0 0 132 45">
                        <g clipPath="url(#clip)" filter="url(#goo-big)">
                            <circle className="top-left" cx="49.5" cy="-0.5" r="26.5" />
                            <circle className="middle-bottom" cx="70.5" cy="40.5" r="26.5" />
                            <circle className="top-right" cx="104" cy="6.5" r="27" />
                            <circle className="right-bottom" cx="123.5" cy="36.5" r="26.5" />
                            <circle className="left-bottom" cx="16.5" cy="28" r="30" />
                        </g>
                        <defs>
                            <clipPath id="clip">
                                <rect width="132" height="45" rx="7" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                {
                    id == "feedbackButton" || id == "login-adv" ? null : (
                        <div className="signUpHead center-align">
                            <p>Already have an account? <NavLink to={
                                id == "signup-adv" ? "/advertiser/login" : "/login"
                             } style={{ cursor: "pointer" }}>  Log in</NavLink></p>
                        </div>
                    )
                }
                {
                    id == "login-adv" ? (
                        <div className="signUpHead center-align">
                            <p>Don't have an account? <NavLink to='/advertiser/signup' style={{ cursor: "pointer" }}>  Sign Up</NavLink></p>
                        </div>
                    ) : null
                }
            </div>
            <svg width="0" height="0">
                <defs>
                    <filter id="goo" x="-50%" width="200%" y="-50%" height="200%" colorInterpolationFilters="sRGB">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                    </filter>
                    <filter id="goo-light" x="-50%" width="200%" y="-50%" height="200%" colorInterpolationFilters="sRGB">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1.25" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                    </filter>
                    <filter id="goo-big" x="-50%" width="200%" y="-50%" height="200%" colorInterpolationFilters="sRGB">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default GenericButton
