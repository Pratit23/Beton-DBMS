import React from 'react';
import './GooeySwitch.scss';

const GooeyTick = () => {
    return (
        <>
            <div className="grid">
                <label className="checkbox">
                    <input type="checkbox" id="gooey-switch" checked />
                    <svg viewBox="0 0 24 24" filter="url(#goo-light)">
                        <path className="tick" d="M4.5 10L10.5 16L24.5 1" />
                        <circle className="dot" cx="10.5" cy="15.5" r="1.5" />
                    </svg>
                </label>

            </div>
            <svg width="0" height="0">
                <defs>
                    <filter id="goo-light" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1.25" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default GooeyTick
