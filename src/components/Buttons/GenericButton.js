import React from 'react'

const GenericButton = () => {
    return (
        <>
            

        <div class="last">

            <button class="btn">
                <span>Submit</span>
                <svg preserveAspectRatio="none" viewBox="0 0 132 45">
                    <g clip-path="url(#clip)" filter="url(#goo-big)">
                        <circle class="top-left" cx="49.5" cy="-0.5" r="26.5" />
                        <circle class="middle-bottom" cx="70.5" cy="40.5" r="26.5" />
                        <circle class="top-right" cx="104" cy="6.5" r="27" />
                        <circle class="right-bottom" cx="123.5" cy="36.5" r="26.5" />
                        <circle class="left-bottom" cx="16.5" cy="28" r="30" />
                    </g>
                    <defs>
                        <clipPath id="clip">
                            <rect width="132" height="45" rx="7" />
                        </clipPath>
                    </defs>
                </svg>
            </button>

            </div>

            <svg width="0" height="0">
                <defs>
                    <filter id="goo" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                    </filter>
                    <filter id="goo-light" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1.25" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                    </filter>
                    <filter id="goo-big" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                    </filter>
                </defs>
            </svg>

        </>
    )
}

export default GenericButton
