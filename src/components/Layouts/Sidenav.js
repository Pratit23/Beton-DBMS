import React, { useEffect } from 'react'
import { SideNav, SideNavItem, Button, Icon } from 'react-materialize'
import { Link, NavLink } from 'react-router-dom'

const Sidenav = () => {

    useEffect(() => {
        const { to, set, registerPlugin } = window.gsap

        registerPlugin(window.MorphSVGPlugin)

        let getVar = key => getComputedStyle(document.documentElement).getPropertyValue(key)

        const sidebar = document.querySelector('aside')

        sidebar.querySelectorAll('button').forEach(button => {
            button.addEventListener('pointerenter', e => {
                to(button, {
                    '--c-background': getVar('--c-hover'),
                    '--c-color': getVar('--c-active'),
                    duration: .15
                })
            })
            button.addEventListener('pointermove', e => {
                to(button, {
                    '--c-background': getVar('--c-hover'),
                    '--c-color': getVar('--c-active'),
                    duration: .15
                })
            })
            button.addEventListener('pointerleave', e => {
                to(button, {
                    '--c-background': getVar('--c-sidebar'),
                    '--c-color': button.classList.contains('active') || sidebar.animating === button ? getVar('--c-active') : getVar('--c-default'),
                    duration: .15
                })
            })
        })

        sidebar.querySelectorAll('.home').forEach(button => wrap(button, () => {
            to(button, {
                keyframes: [{
                    '--icon-fill-size': '12px',
                    '--icon-outline-s': .9,
                    '--icon-outline-o': 0,
                    '--icon-house-s': .85,
                    duration: .2
                }, {
                    '--icon-house-s': 1,
                    duration: .65,
                    ease: 'elastic.out(1, .65)',
                    onStart() {
                        to(button, {
                            keyframes: [{
                                '--icon-feather-right-s': 1,
                                duration: .1,
                                delay: .2,
                                onStart() {
                                    to(button, {
                                        keyframes: [{
                                            '--icon-feather-right-x': '0px',
                                            '--icon-feather-right-r': '-16deg',
                                            duration: .4
                                        }, {
                                            '--icon-feather-right-x': '-9px',
                                            '--icon-feather-right-r': '16deg',
                                            duration: .4
                                        }, {
                                            '--icon-feather-right-x': '3px',
                                            '--icon-feather-right-r': '0deg',
                                            duration: .4
                                        }, {
                                            '--icon-feather-right-o': 0,
                                            duration: .15
                                        }]
                                    })
                                }
                            }, {
                                '--icon-feather-right-y': '10px',
                                duration: 1.2
                            }]
                        })
                        to(button, {
                            keyframes: [{
                                '--icon-feather-left-s': 1,
                                duration: .1,
                                onStart() {
                                    to(button, {
                                        keyframes: [{
                                            '--icon-feather-left-x': '-14px',
                                            '--icon-feather-left-r': '16deg',
                                            duration: .4
                                        }, {
                                            '--icon-feather-left-x': '-10px',
                                            '--icon-feather-left-r': '-12deg',
                                            duration: .4
                                        }, {
                                            '--icon-feather-left-x': '-14px',
                                            '--icon-feather-left-r': '0deg',
                                            duration: .4
                                        }, {
                                            '--icon-feather-left-o': 0,
                                            duration: .15
                                        }]
                                    })
                                }
                            }, {
                                '--icon-feather-left-y': '10px',
                                duration: 1.2
                            }]
                        })
                    },
                    onComplete() {
                        button.classList.add('active')
                        sidebar.animating = false
                    }
                }]
            })
        }))

        sidebar.querySelectorAll('.explore').forEach(button => wrap(button, () => {
            to(button, {
                '--icon-triangle-fill': getVar('--c-active'),
                '--icon-stroke': '2px',
                duration: .15
            })
            to(button, {
                '--icon-r': '360deg',
                duration: 1.2,
                ease: 'elastic(1, .95)',
                clearProps: true,
                onComplete() {
                    button.classList.add('active')
                    sidebar.animating = false
                }
            })
        }))

        sidebar.querySelectorAll('.notifications').forEach(button => wrap(button, () => {
            to(button, {
                duration: 1,
                keyframes: [{
                    '--icon-r': '-12deg',
                    '--icon-ring-x': '-2.5px',
                    '--icon-bell-fill': getVar('--c-active'),
                    '--icon-stroke': '2px'
                }, {
                    '--icon-r': '12deg',
                    '--icon-ring-x': '4.5px'
                }, {
                    '--icon-r': '-12deg',
                    '--icon-ring-x': '-4.5px'
                }, {
                    '--icon-r': '12deg',
                    '--icon-ring-x': '4.5px'
                }, {
                    '--icon-r': '0deg',
                    '--icon-ring-x': '0px',
                    onComplete() {
                        button.classList.add('active')
                        sidebar.animating = false
                    }
                }]
            })
        }))

        sidebar.querySelectorAll('.messages').forEach(button => wrap(button, () => {
            to(button, {
                keyframes: [{
                    '--icon-fill': getVar('--c-active'),
                    '--icon-stroke': getVar('--c-sidebar'),
                    duration: .15
                }, {
                    '--top-r': '180deg',
                    duration: .3
                }, {
                    '--top-r': '0deg',
                    duration: .25,
                    onComplete() {
                        button.classList.add('active')
                        sidebar.animating = false
                    }
                }]
            })
        }))

        sidebar.querySelectorAll('.bookmark').forEach(button => wrap(button, () => {
            to(button, {
                '--icon-default-y': '-20px',
                duration: .3
            })

            to(button, {
                keyframes: [{
                    '--icon-background-y': '-5px',
                    duration: .1,
                    delay: .12
                }, {
                    '--icon-background-y': '0px',
                    duration: .16
                }]
            })

            to(button.querySelector('.corner'), {
                keyframes: [{
                    morphSVG: 'M5.68047 3H11.9995H18.3186C20.7497 3 21.9299 9 19.2215 9H4.77786C2.06991 9 3.24972 3 5.68047 3Z',
                    duration: .15
                }, {
                    morphSVG: 'M4.36835 6C4.36835 6 5.71509 10.7143 12.0001 10.7143C18.2852 10.7143 19.6316 6 19.6316 6C23.6719 6 21.8766 12 19.1829 12H4.81702C2.12365 12 0.327912 6 4.36835 6Z',
                    duration: .125
                }, {
                    morphSVG: {
                        shape: 'M4 20.3665C4.00001 20.8781 4.60713 21.1779 5.04898 20.8845L12 15.95L18.951 20.8845C19.3929 21.1779 20 20.8781 20 20.3664V15L4 14.9999V20.3665Z',
                        shapeIndex: 6
                    },
                    duration: .6,
                    ease: 'elastic.out(1, .75)',
                    clearProps: true,
                    onStart() {
                        set(button, {
                            '--icon-corner-fill': getVar('--c-active'),
                            delay: .05
                        })
                    },
                    onComplete() {
                        button.classList.add('active')
                        sidebar.animating = false
                    }
                }]
            })
        }))

        sidebar.querySelectorAll('.lists').forEach(button => wrap(button, () => {
            to(button, {
                keyframes: [{
                    '--icon-line-top': '10px',
                    '--icon-line-middle': '10px',
                    '--icon-line-bottom': '5px',
                    duration: .15
                }, {
                    '--icon-fill': getVar('--c-active'),
                    '--icon-line': getVar('--c-sidebar'),
                    '--icon-pencil-o': 1,
                    duration: .15
                }, {
                    '--icon-line-top': '0px',
                    '--icon-pencil-x': '10px',
                    duration: .15,
                    onStart() {
                        to(button, {
                            duration: .15,
                            keyframes: [{
                                '--icon-pencil-r': '40deg',
                            }, {
                                '--icon-pencil-r': '50deg',
                            }, {
                                '--icon-pencil-r': '45deg',
                            }]
                        })
                    }
                }, {
                    '--icon-pencil-y': '4px',
                    '--icon-pencil-x': '0px',
                    duration: .1
                }, {
                    '--icon-line-middle': '0px',
                    '--icon-pencil-x': '10px',
                    duration: .15,
                    onStart() {
                        to(button, {
                            duration: .15,
                            keyframes: [{
                                '--icon-pencil-r': '40deg',
                            }, {
                                '--icon-pencil-r': '50deg',
                            }, {
                                '--icon-pencil-r': '45deg',
                            }]
                        })
                    }
                }, {
                    '--icon-pencil-y': '8px',
                    '--icon-pencil-x': '0px',
                    duration: .1
                }, {
                    '--icon-pencil-x': '5px',
                    '--icon-line-bottom': '0px',
                    duration: .15
                }, {
                    '--icon-pencil-o': 0,
                    '--icon-pencil-x': '10px',
                    duration: .1,
                    clearProps: true,
                    onComplete() {
                        button.classList.add('active')
                        sidebar.animating = false
                    }
                }]
            })
        }))

        sidebar.querySelectorAll('.profile').forEach(button => wrap(button, () => {
            to(button, {
                keyframes: [{
                    '--icon-fill': getVar('--c-active'),
                    duration: .15
                }, {
                    '--icon-r': '-20deg',
                    duration: .15
                }, {
                    '--icon-r': '20deg',
                    duration: .15
                }, {
                    '--icon-r': '0deg',
                    duration: .2
                }, {
                    duration: .15,
                    clearProps: true,
                    onComplete() {
                        button.classList.add('active')
                        sidebar.animating = false
                    }
                }]
            })
        }))

        function wrap(button, callback) {
            button.addEventListener('click', e => {
                if (sidebar.animating || button.classList.contains('active')) {
                    return;
                }
                sidebar.animating = button

                sidebar.querySelectorAll('button.active').forEach(active => {
                    active.classList.remove('active')
                    active.removeAttribute('style')
                    if (active.querySelector('.corner')) {
                        set(active.querySelector('.corner'), {
                            morphSVG: 'M5.5 3L12 3.01L18.5 3V3.01H5.5V3Z'
                        })
                    }
                })

                set(button, {
                    '--c-color': getVar('--c-active')
                })

                return callback()

            })
        }

    }, [])

    return (
        <div>
            {/*<SideNav
                id="SideNav-10"
                options={{
                    draggable: true,
                    fixed: true
                }}>
                <SideNavItem subheader>
                    <span classNameNameName="white-text">Main Menu</span>
                </SideNavItem>
                <li><NavLink classNameNameName="white-text" to='/'><Icon classNameNameName="white-text">dashboard</Icon>Dashboard</NavLink></li> 
                <li><NavLink classNameNameName="white-text" to='/PublicMap'><Icon classNameNameName="white-text">map</Icon>Map</NavLink></li> 
            </SideNav>*/}
            <aside>
                {/* <svg className="logo" viewBox="0 0 28 28">
                    <path d="M27.5831 5.75986C26.6089 6.19153 25.5624 6.48319 24.4623 6.61503C25.5846 5.94303 26.4456 4.87669 26.8516 3.60736C25.8016 4.23036 24.6384 4.68303 23.4006 4.92569C22.4089 3.87103 20.9973 3.21069 19.4339 3.21069C16.4333 3.21069 13.9996 5.64436 13.9996 8.64736C13.9996 9.07203 14.0486 9.48503 14.1396 9.88403C9.62111 9.65653 5.61827 7.49236 2.93727 4.20469C2.47061 5.00969 2.20227 5.94303 2.20227 6.93703C2.20227 8.82236 3.16244 10.4872 4.61961 11.4614C3.72827 11.4322 2.89061 11.1884 2.15794 10.7812V10.8512C2.15794 13.4844 4.03044 15.6812 6.51777 16.1805C6.06044 16.3042 5.58094 16.3695 5.08627 16.3695C4.73627 16.3695 4.39444 16.3369 4.06311 16.2739C4.75494 18.4322 6.76161 20.0049 9.14044 20.0469C7.27961 21.5052 4.93577 22.3744 2.39011 22.3744C1.95144 22.3744 1.51861 22.3487 1.09277 22.2985C3.49844 23.842 6.35444 24.7404 9.42277 24.7404C19.4211 24.7404 24.8869 16.4594 24.8869 9.27736C24.8869 9.04403 24.8811 8.80836 24.8706 8.57503C25.9323 7.80736 26.8539 6.85186 27.5808 5.76336L27.5831 5.75986Z" />
                </svg> */}
                <h5 className="white-text" style={{marginBottom: "30px"}}>Beton</h5>
                <nav style={{backgroundColor: "none !important"}}>
                    <button className="home ">
                        <div>
                            <div className="icon">
                                <svg className="house" viewBox="0 0 24 24">
                                    <g className="outline">
                                        <path d="M22.601 7.49432L12.3602 1.97113C12.1341 1.84963 11.8635 1.84963 11.6375 1.97113L1.3987 7.49432C1.02974 7.69378 0.89188 8.15447 1.09157 8.52403C1.22841 8.77716 1.49094 8.92194 1.76057 8.92194C1.8822 8.92194 2.00688 8.89157 2.12142 8.83082L2.94754 8.38532L4.59875 20.0422C4.81567 21.2724 5.92459 22.13 7.29301 22.13H16.7016C18.072 22.13 19.1799 21.2714 19.4009 20.0169L21.0491 8.38329L21.8782 8.83082C22.2472 9.02623 22.7094 8.89157 22.9091 8.52302C23.1078 8.15548 22.9699 7.69479 22.601 7.49432V7.49432ZM17.8997 19.779C17.7913 20.3926 17.1871 20.6113 16.7036 20.6113H7.29503C6.80849 20.6113 6.20537 20.3926 6.10097 19.8033L4.37575 7.61582L11.9983 3.50304L19.6229 7.61379L17.8997 19.779V19.779Z" />
                                        <path d="M8.21973 12.3C8.21973 14.384 9.91473 16.08 11.9997 16.08C14.0847 16.08 15.7797 14.384 15.7797 12.3C15.7797 10.216 14.0847 8.52002 11.9997 8.52002C9.91473 8.52002 8.21973 10.216 8.21973 12.3ZM14.2797 12.3C14.2797 13.558 13.2577 14.58 11.9997 14.58C10.7417 14.58 9.71973 13.558 9.71973 12.3C9.71973 11.042 10.7417 10.02 11.9997 10.02C13.2577 10.02 14.2797 11.042 14.2797 12.3Z" />
                                    </g>
                                    <path className="fill" d="M22.4824 7.448L12.4695 1.995C12.1753 1.835 11.8215 1.835 11.5282 1.995L1.52027 7.448C1.0387 7.712 0.859349 8.318 1.11896 8.804C1.29732 9.139 1.63918 9.329 1.99094 9.329C2.14948 9.329 2.31199 9.291 2.46161 9.209L3.18892 8.813L4.76442 20.063C4.97846 21.277 6.06248 22.125 7.40018 22.125H16.5976C17.9353 22.125 19.0193 21.277 19.2353 20.037L20.8088 8.812L21.5391 9.21C22.0197 9.473 22.6212 9.292 22.8808 8.806C23.1414 8.32 22.96 7.713 22.4805 7.451L22.4824 7.448ZM11.9989 15.533C10.2202 15.533 8.7785 14.078 8.7785 12.283C8.7785 10.488 10.2202 9.033 11.9989 9.033C13.7775 9.033 15.2192 10.488 15.2192 12.283C15.2192 14.078 13.7775 15.533 11.9989 15.533Z" />
                                </svg>
                                <svg className="feather left" viewBox="0 0 14 7">
                                    <path d="M9.16667 1L13.5 3.94648C11.6429 6.89297 4.83333 6.89297 0.5 2.47324C3.59524 1 6.69048 2.47324 6.69048 2.47324L5.45238 1L9.16667 2.47324V1Z" />
                                    <path d="M12 4.1C9 4.65 4.5 3.5 4.5 3.5" />
                                </svg>
                                <svg className="feather right" viewBox="0 0 14 7">
                                    <path d="M4.83333 1L0.499999 3.94648C2.35714 6.89297 9.16667 6.89297 13.5 2.47324C10.4048 1 7.30952 2.47324 7.30952 2.47324L8.54762 1L4.83333 2.47324V1Z" />
                                    <path d="M2 4.1C5 4.65 9.5 3.5 9.5 3.5" />
                                </svg>
                            </div>
                Home
            </div>
                    </button>
                    <button className="explore ">
                        <div>
                            <div className="icon">
                                <svg viewBox="0 0 24 24">
                                    <path className="outline" d="M20.1215 3.68027C20.2477 3.62291 20.3775 3.75271 20.3202 3.87889L15.4927 14.4992C15.2926 14.9394 14.9398 15.2923 14.4996 15.4924L3.87927 20.3198C3.7531 20.3771 3.6233 20.2473 3.68065 20.1212L8.50808 9.50082C8.70818 9.0606 9.06099 8.70779 9.5012 8.50769L20.1215 3.68027Z" />
                                    <path className="triangle" d="M14.6722 14.6718L9.32861 9.32822C9.08175 9.08137 9.15745 8.66395 9.47526 8.51949L20.1215 3.68027C20.2477 3.62291 20.3775 3.75271 20.3202 3.87889L15.4809 14.5252C15.3365 14.843 14.9191 14.9187 14.6722 14.6718Z" />
                                </svg>
                            </div>
                Explore
            </div>
                    </button>
                    <button className="notifications active ">
                        <div>
                            <div className="icon">
                                <svg viewBox="0 0 24 24">
                                    <path className="ring" d="M15.75 17.5H8.24914C8.24914 17.5 8.00047 21.5 12 21.5C15.9995 21.5 15.75 17.5 15.75 17.5Z" />
                                    <path className="bell" d="M21 17.5H3C5.07944 15.9703 5.25 11.5 5.5 8.5C5.50037 6.17481 8.67481 3 12 3C15.3252 3 18.5001 6.17481 18.5 8.5C18.75 11.5 18.9206 15.9703 21 17.5Z" />
                                </svg>
                            </div>
                Notifications
            </div>
                    </button>
                    <button className="messages ">
                        <div>
                            <div className="icon">
                                <div className="top">
                                    <svg className="default" viewBox="0 0 24 13">
                                        <path d="M11.1321 11.4858L11.133 11.4864C11.6584 11.8379 12.3416 11.8379 12.867 11.4864L22.417 5.09804L22.75 4.87529V4.47466V4.2579C22.75 2.60182 21.4067 1.25 19.75 1.25H4.25C2.59331 1.25 1.25 2.60182 1.25 4.2579V4.45559V4.85556L1.58214 5.0784L11.1321 11.4858Z" />
                                    </svg>
                                    <svg className="inner" viewBox="0 0 24 13">
                                        <path d="M11.133 1.51361L11.1321 1.51417L1.58214 7.92157L1.25 8.14441V8.54438V11V11.75L2.00002 11.75H2.00007H2.00021H2.00076H2.00296H2.01167L2.04584 11.75L2.17721 11.75L2.66002 11.75L4.25 11.75H19.75L21.34 11.75L21.8228 11.75L21.9542 11.75L21.9883 11.75H21.997H21.9992H21.9998H21.9999H22L22.75 11.75V11V8.52531V8.12468L22.417 7.90193L12.867 1.51362C12.867 1.51361 12.867 1.5136 12.867 1.51359C12.3416 1.16213 11.6583 1.16214 11.133 1.51361Z" />
                                        <rect x="2" y="11" width="20" height="1.5" />
                                    </svg>
                                </div>
                                <svg viewBox="0 0 24 24">
                                    <rect className="background" x="1.25" y="2.25" width="21.5" height="19.95" rx="3" />
                                    <path className="front" d="M2.41843 6.8296L1.25 6.04411V7.45203V19.1891C1.25 20.8464 2.59174 22.202 4.25 22.202H19.75C21.4083 22.202 22.75 20.8464 22.75 19.1891V7.47013V6.06476L21.5825 6.84707L12.8425 12.7035L12.7821 12.744C12.5397 12.8907 12.2708 12.9628 12 12.9628C11.7065 12.9628 11.4157 12.8781 11.1584 12.7052L2.41843 6.8296Z" />
                                </svg>
                            </div>
                Messages
            </div>
                    </button>
                    <button className="bookmark ">
                        <div>
                            <div className="icon">
                                <svg viewBox="0 0 24 24">
                                    <defs>
                                        <clipPath id="default-clip">
                                            <path d="M3.25 4.75C3.25 3.36929 4.36929 2.25 5.75 2.25H18.25C19.6307 2.25 20.75 3.36929 20.75 4.75V22.25H3.25V4.75Z" />
                                        </clipPath>
                                    </defs>
                                    <g clipPath="url(#default-clip)">
                                        <path className="background" d="M3.25 4.75C3.25 3.36929 4.36929 2.25 5.75 2.25H18.25C19.6307 2.25 20.75 3.36929 20.75 4.75V15.25H3.25V4.75Z" />
                                        <path className="default" d="M4 4.7736C4 3.79407 4.79594 3 5.77778 3H18.2222C19.2041 3 20 3.79407 20 4.7736V20.3337C20 20.8741 19.3884 21.1889 18.947 20.8758L12 15.9473L5.05302 20.8758C4.61163 21.1889 4 20.8741 4 20.3337V4.7736Z" />
                                    </g>
                                    <path className="corner" d="M5.5 3L12 3.01L18.5 3V3.01H5.5V3Z" />
                                </svg>
                            </div>
                Bookmarks
            </div>
                    </button>
                    <button className="lists ">
                        <div>
                            <div className="icon">
                                <svg className="pencil" viewBox="0 0 8 22">
                                    <path d="M1.34869 4.87898L6.65199 4.87898M6.65193 16.8942L4.00028 20.6065L1.34863 16.8942L1.34863 2.66652C1.34869 2.26878 1.50672 1.88734 1.78797 1.60609C2.06922 1.32484 2.45066 1.16681 2.84841 1.16675L5.15216 1.16675C5.54991 1.16681 5.93134 1.32484 6.21259 1.60609C6.49384 1.88734 6.65187 2.26878 6.65193 2.66652V16.8942Z" />
                                </svg>
                                <svg className="list" viewBox="0 0 24 24">
                                    <rect x="2.5" y="2.5" width="19" height="19" rx="2.25" />
                                    <path className="top" d="M7 8H17" />
                                    <path className="middle" d="M7 12H17" />
                                    <path className="bottom" d="M7 16H12" />
                                </svg>
                            </div>
                Lists
            </div>
                    </button>
                    <button className="profile ">
                        <div>
                            <div className="icon">
                                <svg viewBox="0 0 24 24">
                                    <path className="head" d="M16 7C16 9.76142 15.7614 11 12 11C8.23858 11 8 9.76142 8 7C8 4.23858 9.23858 2.25 12 2.25C14.7614 2.25 16 4.23858 16 7Z" />
                                    <path d="M11.9999 14C15.9613 14 18.962 16.5405 19.4799 19.5352C19.6485 20.5106 18.7676 21.25 17.7778 21.25H6.22181C5.23198 21.25 4.35113 20.5106 4.51978 19.5352C5.03763 16.5405 8.03845 14 11.9999 14Z" />
                                </svg>
                            </div>
                Profile
            </div>
                    </button>
                </nav>
            </aside>
        </div>
    )
}

export default Sidenav
