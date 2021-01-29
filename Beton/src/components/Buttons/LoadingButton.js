import React, { useEffect } from 'react';
import './LoadingButton.scss';

const LoadingButton = () => {

    useEffect(()=>{
        const loader = document.querySelector("#track-loader");
        loader.addEventListener("toggle", ()=>{
            window.$('.circle-loader').toggleClass('load-complete');
            window.$('.checkmark').toggle();
        })

        // for switching the animation
        // document.querySelector('.circle-loader').dispatchEvent(new CustomEvent("toggle"))
    }, []);

    return (
        <div className="circle-loader" id="track-loader">
            <div className="checkmark draw"></div>
        </div>

    )
}

export default LoadingButton