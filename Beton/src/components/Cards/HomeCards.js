import React, { useEffect } from 'react'
import './HomeCard.css'
import DashChart1 from '../Charts/DashChart1'

export default function HomeCards(props) {

    useEffect(() => {
        let card = document.getElementsByClassName("cardpy");

        setTimeout(function () {
            for (var i = 0; i < card.length; i++) {
                card[i].classList.remove("preShow")
            }
        }, 2000);

    }, [])

    return (
        <>
            <div className="wrap">
                <div className="cardpy preShow">
                    <div className="card__top">
                        <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="linearGradient-1">
                                    <stop stopColor="#0153CD" offset="0%"></stop>
                                    <stop stopColor="#2684FF" offset="100%"></stop>
                                </linearGradient>
                                <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="linearGradient-2">
                                    <stop stopColor="#ffffff" offset="0%" stopOpacity="0.526524257" ></stop>
                                    <stop stopColor="#ffffff" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g id="深知" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="消息中心-copy-4" transform="translate(-263.000000, -366.000000)" fillRule="nonzero">
                                    <g id="Group-Copy" transform="translate(227.000000, 331.000000)">
                                        <g id="Group-4" transform="translate(35.000000, 34.000000)">
                                            <g id="Group-2">
                                                <g id="Sensebot.20d1391d">
                                                    <g id="Group-3">
                                                        <rect id="Rectangle-Copy-7" fillOpacity="0" fill="#FFFFFF" x="0" y="0" width="32" height="32"></rect>
                                                        <g id="Group-19-Copy-2" transform="translate(1.333333, 1.333333)">
                                                            <path d="M10.2222222,22.6666667 L19.1111111,22.6666667 C21.8111699,22.6666667 24,24.8554968 24,27.5555556 L24,29.0833333 L5.33333333,29.3333333 L5.33333333,27.5555556 C5.33333333,24.8554968 7.52216344,22.6666667 10.2222222,22.6666667 Z" id="Rectangle-13" fill="url(#linearGradient-1)" transform="translate(14.666667, 26.000000) scale(-1, 1) rotate(-180.000000) translate(-14.666667, -26.000000) "></path>
                                                            <path d="M9.93179915,3.66666667 C10.4745181,1.55805563 12.3886407,0 14.6666667,0 C16.9446927,0 18.8588152,1.55805563 19.4015341,3.66666667 L24.4444444,3.66666667 C27.1445032,3.66666667 29.3333333,5.85549677 29.3333333,8.55555556 L29.3333333,19.5555556 C29.3333333,20.2305703 28.7861259,20.7777777 28.1111111,20.7777777 L1.22222222,20.7777777 C0.547207528,20.7777777 1.8590223e-15,20.2305703 1.77635684e-15,19.5555556 L-4.4408921e-16,8.55555556 C-7.74751043e-16,5.85549677 2.18883011,3.66666667 4.88888889,3.66666667 L9.93179915,3.66666667 Z M8.55555556,15.8888889 C10.5805996,15.8888889 12.2222222,14.2472663 12.2222222,12.2222222 C12.2222222,10.1971781 10.5805996,8.55555556 8.55555556,8.55555556 C6.53051147,8.55555556 4.88888889,10.1971781 4.88888889,12.2222222 C4.88888889,14.2472663 6.53051147,15.8888889 8.55555556,15.8888889 Z M20.7777777,15.8888889 C22.8028219,15.8888889 24.4444444,14.2472663 24.4444444,12.2222222 C24.4444444,10.1971781 22.8028219,8.55555556 20.7777777,8.55555556 C18.7527337,8.55555556 17.1111111,10.1971781 17.1111111,12.2222222 C17.1111111,14.2472663 18.7527337,15.8888889 20.7777777,15.8888889 Z" id="Combined-Shape" fill="#2684FF"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <h2>CAPTCHA</h2>
                    </div>
                    <div className="card__bottom">
                        <h2>CAPTCHA</h2>
                        <p>
                            Human Machine Verification 3.0 Universal Solution
      </p>
                        <p>
                            Using AI to dynamically determine the current attack situation of the website, combined with the multi-dimensional data combination of each request, AI can use different defense capability combinations for each request
      </p>
                    </div>
                    <span>
                    </span>
                </div>
                <div className="cardpy preShow" id="new">

                    <div className="card__top">
                        <div className="row homeCardRow">
                            <div className="col s6">
                                <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <defs>
                                        <linearGradient x1="0%" y1="52.3928852%" x2="100%" y2="73.7732573%" id="linearGradient-1">
                                            <stop stopColor="#0053CD" offset="0%"></stop>
                                            <stop stopColor="#2684FF" offset="100%"></stop>
                                        </linearGradient>
                                        <linearGradient x1="0%" y1="38.5366996%" x2="100%" y2="38.5367006%" id="linearGradient-2">
                                            <stop stopColor="#0053CD" offset="0%"></stop>
                                            <stop stopColor="#2684FF" offset="100%"></stop>
                                        </linearGradient>
                                        <linearGradient x1="0%" y1="0%" x2="100%" y2="66.550293%" id="linearGradient-3">
                                            <stop stopColor="#0053CD" offset="0%"></stop>
                                            <stop stopColor="#2684FF" offset="100%"></stop>
                                        </linearGradient>

                                        <linearGradient x1="18.5939813%" y1="75.0881552%" x2="88.0134978%" y2="38.5367006%" id="linearGradient-122">
                                            <stop stopColor="#FFFFFF" stopOpacity="0.30897618" offset="0%"></stop>
                                            <stop stopColor="#FFFFFF" offset="100%"></stop>
                                        </linearGradient>

                                    </defs>
                                    <g id="深知" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Deepknow.82d7f8a3" fillRule="nonzero">
                                            <g id="Group-14">
                                                <rect id="Rectangle-Copy-13" fillOpacity="0" fill="#FFFFFF" x="0" y="0" width="32" height="32"></rect>
                                                <g id="深知-copy">
                                                    <g id="Group-7">
                                                        <polygon id="Combined-Shape" fill="#2684FF" points="28.2666667 16.1 32 21 16 32 0 21 3.73333333 16.1 16 24.5333333"></polygon>
                                                        <polygon id="Combined-Shape" fill="url(#linearGradient-1)" points="16 32 16 24.5333333 28.2666667 16.1 32 21"></polygon>
                                                        <polygon id="Combined-Shape" fill="#2684FF" points="22.9333333 9.23333333 26.6666667 14.1333333 16 21.4666667 5.33333333 14.1333333 9.06666667 9.23333333 16 14"></polygon>
                                                        <polygon id="Combined-Shape" fill="url(#linearGradient-1)" points="16 21.4666667 16 14 22.9333333 9.23333333 26.6666667 14.1333333"></polygon>
                                                        <polygon id="Combined-Shape" fill="#2684FF" points="21.3333333 7 16 10.6666667 10.6666667 7 16 0"></polygon>
                                                        <polygon id="Combined-Shape" fill="url(#linearGradient-3)" points="16 0 21.3333333 7 16 10.6666667"></polygon>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="col s6 right-align">

                            </div>
                        </div>
                        <h2>Yearly Reportings</h2>
                    </div>
                    <div className="card__bottom">
                        {
                            props.city && (props.city).length !== 0 ? <h2>{props.city} - 69 Reportings</h2> : <h2>Loading...</h2>
                        }
                        <p>Live Reportings for your location</p>
                        <DashChart1 />
                    </div>
                    <span id='sz'></span>
                </div>

            </div>

        </>
    )
}
