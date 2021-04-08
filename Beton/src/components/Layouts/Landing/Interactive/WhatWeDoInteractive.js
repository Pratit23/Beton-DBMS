import React from 'react';
import { useEffect } from 'react';
import './WhatWeDoInteractive.scss';
import Prev from '../../../../images/astronautPot.png';
import Astro from '../../../../images/astronautPot.gif';
import PrevBG from '../../../../images/PrevBG.png';

const WhatWeDoInteractive = () => {

    useEffect(() => {
        var rightCard1 = document.getElementsByClassName('right_card')[0]
        var rightCard2 = document.getElementsByClassName('right_card')[1]
        var rightCard3 = document.getElementsByClassName('right_card')[2]
        var leftCard = document.getElementById('cards_left')
        var rightCard = document.getElementById('cards_right')
        var gif = document.getElementById('card-hero-gif')
        var pic = document.getElementById('right_hero')

        rightCard.addEventListener('mouseenter', function (e) {
            leftCard.style.borderColor = 'transparent'
        })
        rightCard.addEventListener('mouseleave', function (e) {
            leftCard.style.borderColor = '#E1E7FF'
        })

        rightCard1.addEventListener('mouseenter', function (e) {
            pic.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/hero-shenzhi.png'
            rightCard1.classList.add('rightCard1-enter')
            rightCard2.classList.add('rightCard1-enter-now')
            pic.classList.add('pic-show')
        })
        rightCard1.addEventListener('mouseleave', function (e) {
            pic.classList.remove('pic-show')
            rightCard1.classList.remove('rightCard1-enter')
            rightCard2.classList.remove('rightCard1-enter-now')
        })

        rightCard2.addEventListener('mouseenter', function (e) {
            pic.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/hero-1.png'
            rightCard1.classList.add('rightCard1-leave', 'rightCard2-enter-now')
            rightCard2.classList.add('rightCard2-enter')
            rightCard3.classList.add('rightCard2-enter-now')
            pic.classList.add('pic-show')
        })
        rightCard2.addEventListener('mouseleave', function (e) {
            rightCard1.classList.remove('rightCard1-leave', 'rightCard2-enter-now')
            rightCard2.classList.remove('rightCard2-enter')
            rightCard3.classList.remove('rightCard2-enter-now')
            pic.classList.remove('pic-show')
        })

        rightCard3.addEventListener('mouseenter', function (e) {
            pic.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/945546/hero-renzheng.png'
            rightCard1.classList.add('rightCard1-leave', 'rightCard3-enter-now')
            rightCard2.classList.add('rightCard2-leave', 'rightCard3-enter-now')
            rightCard3.classList.add('rightCard3-enter')
            pic.classList.add('pic-show')
        })
        rightCard3.addEventListener('mouseleave', function (e) {
            rightCard1.classList.remove('rightCard1-leave', 'rightCard3-enter-now')
            rightCard2.classList.remove('rightCard2-leave', 'rightCard3-enter-now')
            rightCard3.classList.remove('rightCard3-enter')
            pic.classList.remove('pic-show')
        })

        var cards = [leftCard, rightCard]
        cards.forEach(function (item) {
            item.addEventListener('click', function () {
                item.classList.add('anim-click')
                setTimeout(() => {
                    item.classList.remove('anim-click')
                }, 300)
            })
        })

        leftCard.addEventListener('mouseenter', function () {
            gif.src = Astro
        })
        leftCard.addEventListener('mouseleave', function () {
            gif.src = Prev
        })

    }, [])

    return (
        <>
            <div className="cards">
                <div className="cards_left card" id="cards_left" style={{ margin: "0", borderRadius: "24px 0 0 24px" }} >
                    <div className="logo">
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
                    </div>
                    <p style={{ fontFamily: "'Nanum Pen Script', cursive", fontSize: "large" }}>Why do you think we are any different?</p>
                    <img src={Prev} alt="" className="card-hero-gif" id="card-hero-gif" />
                    <img src={PrevBG} alt="" className="card-hero-bg" />
                </div>
                <div className="cards_right" id="cards_right">
                    <div className="right_card card rightCard1" style={{ margin: "0", borderRadius: "0 24px 0 0" }} >
                        <div className="logo">
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
                        {/* <p style={{ fontFamily: "'Nanum Pen Script', cursive", fontSize: "large" }}>Text here</p> */}
                    </div>
                    <div className="right_card card rightCard2" style={{ margin: "0" }} >
                        <div className="logo">
                            <svg width="168" height="32" viewBox="0 0 168 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.73989 14.1002C2.94764 11.308 2.2969 7.43161 5.16242 4.56609C8.02795 1.70057 11.9043 2.35131 14.6966 5.14356C14.8827 5.32971 14.8827 5.63151 14.6966 5.81766L6.414 14.1002C6.22785 14.2864 5.92604 14.2864 5.73989 14.1002Z" fill="#2684FF" />
                                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="27" height="28">
                                        <path d="M15.723 26.4009C13.9877 26.0324 12.3356 25.1743 10.9877 23.8264L8.46034 21.299L7.76198 21.9974C6.91101 22.8483 5.53132 22.8483 4.68035 21.9974C3.82937 21.1464 3.82937 19.7667 4.68035 18.9157L19.5121 4.08399C20.363 3.23302 21.7427 3.23302 22.5937 4.08399C23.4447 4.93496 23.4447 6.31466 22.5937 7.16563L21.8954 7.86398L24.4228 10.3914C25.7706 11.7392 26.6288 13.3914 26.9973 15.1266L28.7358 15.1556C29.9109 15.1751 30.8588 16.123 30.8783 17.2981L30.8789 17.334C30.898 18.479 29.9852 19.4227 28.8402 19.4417C28.8172 19.4421 28.7942 19.4421 28.7712 19.4417L26.9236 19.411C26.5212 21.0289 25.6876 22.5616 24.4228 23.8264C23.158 25.0912 21.6253 25.9248 20.0074 26.3272L20.0381 28.1748C20.0385 28.1978 20.0385 28.2208 20.0381 28.2438C20.0191 29.3888 19.0754 30.3016 17.9304 30.2826L17.8944 30.282C16.7193 30.2624 15.7715 29.3145 15.7519 28.1395L15.723 26.4009Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <path d="M15.723 26.4009C13.9877 26.0324 12.3356 25.1743 10.9877 23.8264L8.46034 21.299L7.76198 21.9974C6.91101 22.8483 5.53132 22.8483 4.68035 21.9974C3.82937 21.1464 3.82937 19.7667 4.68035 18.9157L19.5121 4.08399C20.363 3.23302 21.7427 3.23302 22.5937 4.08399C23.4447 4.93496 23.4447 6.31466 22.5937 7.16563L21.8954 7.86398L24.4228 10.3914C25.7706 11.7392 26.6288 13.3914 26.9973 15.1266L28.7358 15.1556C29.9109 15.1751 30.8588 16.123 30.8783 17.2981L30.8789 17.334C30.898 18.479 29.9852 19.4227 28.8402 19.4417C28.8172 19.4421 28.7942 19.4421 28.7712 19.4417L26.9236 19.411C26.5212 21.0289 25.6876 22.5616 24.4228 23.8264C23.158 25.0912 21.6253 25.9248 20.0074 26.3272L20.0381 28.1748C20.0385 28.1978 20.0385 28.2208 20.0381 28.2438C20.0191 29.3888 19.0754 30.3016 17.9304 30.2826L17.8944 30.282C16.7193 30.2624 15.7715 29.3145 15.7519 28.1395L15.723 26.4009Z" fill="#2684FF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0056 10.409L25.4203 24.8237L15.7057 33.0225L2.23061 19.5474L11.0056 10.409Z" fill="url(#paint0_linear)" />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="18.2129" y1="17.6163" x2="12.4469" y2="23.3824" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#0053CD" />
                                        <stop offset="1" stopColor="#2684FF" />
                                    </linearGradient>
                                    <clipPath id="clip0">
                                        <rect width="168" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        {/* <p style={{ fontFamily: "'Nanum Pen Script', cursive", fontSize: "large" }}>Text here</p> */}
                    </div>
                    <div className="right_card card rightCard3" style={{ margin: "0", borderRadius: "0 0 24px 0" }} >
                        <div className="logo">
                            <svg width="194" height="32" viewBox="0 0 194 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.3416 -0.0221634L13.5674 7.22128C10.151 8.76437 7.90687 12.1869 7.90687 16.0231C7.90687 19.8372 10.125 23.2435 13.5116 24.7996L10.2396 32.022C4.06938 29.1868 0.0241699 22.9748 0.0241699 16.0231C0.0241699 9.03094 4.1167 2.78947 10.3416 -0.0221634ZM24.7857 31.9906L21.4829 24.7825C24.8498 23.2178 27.0506 19.8225 27.0506 16.0231C27.0506 12.2111 24.8349 8.80645 21.4511 7.2491L24.7275 0.028738C30.8925 2.86608 34.9333 9.07533 34.9333 16.0231C34.9333 22.9477 30.9195 29.1401 24.7857 31.9906Z" fill="#2684FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M27.0652 16H34.9479C34.9479 16.0077 34.9479 16.0155 34.9479 16.0232C34.9479 22.9478 30.9341 29.1402 24.8004 31.9907L21.4976 24.7825C24.8644 23.2179 27.0652 19.8226 27.0652 16.0232C27.0652 16.0155 27.0652 16.0077 27.0652 16Z" fill="url(#paint0_linear)" />
                                    <path d="M17.4786 21.8185C20.6963 21.8185 23.3048 19.2136 23.3048 16.0003C23.3048 12.787 20.6963 10.1821 17.4786 10.1821C14.2608 10.1821 11.6523 12.787 11.6523 16.0003C11.6523 19.2136 14.2608 21.8185 17.4786 21.8185Z" fill="#2684FF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.3317 -0.000110626L13.5619 7.19234C10.1408 8.72456 7.89357 12.123 7.89357 15.9322C4.7937 15.991 4.7633 15.962 0 15.9322C0 8.98926 4.09818 2.79173 10.3317 -0.000110626Z" fill="url(#paint1_linear)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="24.5923" y1="28.5787" x2="32.1876" y2="17.1235" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#0053CD" />
                                        <stop offset="1" stopColor="#2684FF" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear" x1="10.6104" y1="3.73142" x2="3.84056" y2="15.0709" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#0053CD" />
                                        <stop offset="1" stopColor="#2684FF" />
                                    </linearGradient>
                                    <clipPath id="clip0">
                                        <rect width="193.6" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        {/* <p style={{ fontFamily: "'Nanum Pen Script', cursive", fontSize: "large" }}>Text here</p> */}
                    </div>
                    <div className="right_hero-wrap">
                        <img src="./img/hero-1.png" alt="" id="right_hero" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default WhatWeDoInteractive
