import React, { useEffect, useState } from 'react';
import './LoadingButton.scss';

const LoadingButtonComplete = (props) => {


    useEffect(() => {
        const loader = document.querySelector(`.${props.id}`);
        loader.addEventListener("toggle", () => {
            window.$(`.${props.id}`).toggleClass('load-complete');
            window.$(`.check-${props.id}`).toggle();
        })

        // for switching the animation
        // document.querySelector(`.${props.id}`).dispatchEvent(new CustomEvent("toggle"))
    }, []);

    return (
        <div className={`circle-loader ${props.id}`} id="track-loader">
            <div className={`checkmark draw check-${props.id}`}></div>
        </div>

    )
}

export default LoadingButtonComplete
