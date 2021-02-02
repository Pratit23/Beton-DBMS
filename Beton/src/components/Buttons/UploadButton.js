import React, { useEffect } from 'react';
import './UploadButton.scss';

const UploadButton = (props) => {

    const upload = () => {
        console.log("On click is working")
        console.log(props)
        props.action()
    }


    useEffect(() => {
        const { set, to, fromTo } = window.gsap

        const loadingTime = 5000
        const resetTime = 5000

        document.querySelectorAll('.publish-button').forEach(button => {
            let tweenHover = to(button, {
                paused: true,
                keyframes: [{
                    '--icon-arrow-y': '-2px',
                    '--icon-line-offset': '23px',
                    duration: .15
                }, {
                    '--icon-arrow-y': '0px',
                    '--icon-line-offset': '21px',
                    duration: .3
                }]
            }),
                interval;

            button.addEventListener('pointerenter', e => {
                if (button.classList.contains('animated')) {
                    return
                }
                tweenHover.restart()
                interval = setInterval(() => tweenHover.restart(), 1000)
            });

            button.addEventListener('pointerleave', e => clearInterval(interval))

            button.addEventListener('click', e => {
                e.preventDefault()

                if (button.classList.contains('animated')) {
                    return
                }
                button.classList.add('animated')

                let text = button.querySelector('.text'),
                    normal = text.querySelector('.normal'),
                    progress = text.querySelector('.progress'),
                    done = text.querySelector('.done'),
                    normalWidth = normal.offsetWidth

                clearInterval(interval)
                tweenHover.pause()

                let cloud = button.querySelector('.cloud'),
                    cloudInterval,
                    clone = cloud.cloneNode(true)

                window.gsap.to(button, {
                    '--icon-cloud-y': '32px',
                    duration: .15
                })

                cloudInterval = setInterval(() => {
                    createCloud(clone, button.querySelector('.icon'))
                }, 400)

                let tweenArrow = fromTo(button, {
                    '--icon-arrow-y': '0px',
                    '--icon-line-offset': '21px',
                    duration: .15
                }, {
                    repeat: -1,
                    keyframes: [{
                        '--icon-arrow-y': '-6px',
                        '--icon-line-offset': '24px',
                        duration: .6,
                    }, {
                        '--icon-arrow-y': '0px',
                        '--icon-line-offset': '21px',
                        duration: .85,
                        ease: 'power2.out'
                    }]
                })

                to(button, {
                    onStart() {
                        to(text, {
                            width: progress.offsetWidth,
                            duration: .15
                        })
                    },
                    '--text-normal-o': 0,
                    '--text-normal-y': '8px',
                    duration: .25
                })

                to(button, {
                    '--text-progress-o': 1,
                    '--text-progress-y': '0px',
                    duration: .3,
                    delay: .1
                })

                setTimeout(() => {
                    tweenArrow.pause()
                    clearInterval(cloudInterval)
                    to(button, {
                        onStart() {
                            to(text, {
                                width: done.offsetWidth,
                                duration: .15
                            })
                        },
                        '--text-progress-o': 0,
                        '--text-progress-y': '8px',
                        duration: .25
                    })
                    to(button, {
                        duration: .25,
                        keyframes: [{
                            '--icon-line-offset': '13px'
                        }, {
                            '--icon-arrow-offset': '4px'
                        }]
                    })
                    to(button, {
                        '--text-done-o': 1,
                        '--text-done-y': '0px',
                        duration: .3,
                        delay: .1
                    })
                    to(button, {
                        '--icon-tick-offset': '0px',
                        duration: .25,
                        delay: .3
                    })
                    to(button, {
                        '--icon-circle-scale': 1,
                        duration: .7,
                        delay: .2,
                        ease: 'elastic.out(1, .75)'
                    })
                    setTimeout(() => {
                        reset(button, normalWidth, text)
                    }, resetTime)
                }, loadingTime)
            })
        })

        function createCloud(node, parent) {
            let elem = node.cloneNode(true)
            parent.appendChild(elem)
            set(elem, {
                x: window.gsap.utils.random(-8, 8),
                y: -36
            })
            to(elem, {
                y: 36,
                duration: window.gsap.utils.random(.4, 1.5),
                onComplete() {
                    elem.remove()
                }
            })
        }

        function reset(button, normalWidth, text) {
            to(button, {
                onStart() {
                    to(text, {
                        width: normalWidth,
                        duration: .15,
                        clearProps: true
                    })
                },
                '--text-done-o': 0,
                '--text-done-y': '8px',
                duration: .25
            })
            fromTo(button, {
                '--text-normal-y': '-8px'
            }, {
                '--text-normal-o': 1,
                '--text-normal-y': '0px',
                duration: .3,
                delay: .1
            })
            to(button, {
                keyframes: [{
                    '--icon-tick-offset': '11px',
                    '--icon-circle-scale': 0,
                    '--icon-arrow-y': '0px',
                    duration: .2
                }, {
                    '--icon-cloud-y': '0px',
                    '--icon-line-offset': '21px',
                    duration: .2
                }, {
                    '--icon-arrow-offset': '0px',
                    duration: .15
                }],
                clearProps: true,
                onComplete() {
                    button.classList.remove('animated')
                }
            })
        }

    }, [])

    return (
        <button onClick={upload} id="publishBtn" className="publish-button" style={{margin: '0 auto', marginTop: '20px'}}>
            <div className="icon">
                <svg className="cloud" viewBox="0 0 20 24">
                    <path d="M18.3385 10.5888C18.364 10.6828 18.415 10.7769 18.415 10.8709C18.4706 11.1525 18.499 11.4387 18.5 11.7258C18.497 11.9925 18.4714 12.2584 18.4235 12.5208C18.4065 12.6063 18.364 12.6832 18.364 12.7687C18.322 12.9366 18.2709 13.1021 18.211 13.2645L18.109 13.5124C18.0342 13.6772 17.949 13.8371 17.854 13.9911L17.735 14.1792C17.7228 14.2031 17.7086 14.226 17.6925 14.2476L17.65 14.2903C17.2541 14.8211 16.7408 15.252 16.1507 15.5488C15.5605 15.8455 14.9098 16 14.25 16H11.7H8.3H5.75C5.09021 16 4.43948 15.8455 3.84934 15.5488C3.25921 15.252 2.74588 14.8211 2.35 14.2903L2.3075 14.2305C2.29145 14.2089 2.27723 14.186 2.265 14.1621L2.146 13.974C2.051 13.82 1.96582 13.6601 1.891 13.4953L1.789 13.2474C1.72909 13.085 1.67801 12.9195 1.636 12.7516C1.619 12.6661 1.5765 12.5892 1.5765 12.5037C1.52957 12.247 1.50398 11.9867 1.5 11.7258C1.50364 11.453 1.53209 11.1812 1.585 10.9137C1.602 10.8196 1.6615 10.7256 1.6615 10.6316C1.70084 10.4657 1.75198 10.3028 1.8145 10.1443C1.857 10.0417 1.8995 9.95622 1.9675 9.82799C2.0355 9.69977 2.1035 9.56299 2.1715 9.45186C2.2395 9.34073 2.3075 9.2467 2.3925 9.14412C2.4775 9.04153 2.571 8.92186 2.656 8.82782C2.741 8.73379 2.8345 8.65685 2.928 8.57137L3.2425 8.30637L3.5485 8.04991C3.66862 7.97598 3.79357 7.91029 3.9225 7.8533L4.254 7.69942C4.39284 7.64771 4.53479 7.60488 4.679 7.5712C4.79324 7.5374 4.90969 7.51169 5.0275 7.49426L5.1805 7.45152C5.52733 6.4437 6.17792 5.56967 7.04172 4.95105C7.90552 4.33244 8.93957 4 10 4C11.0604 4 12.0945 4.33244 12.9583 4.95105C13.8221 5.56967 14.4727 6.4437 14.8195 7.45152L15.015 7.54555C15.1328 7.56298 15.2493 7.58869 15.3635 7.62249C15.5077 7.65617 15.6497 7.699 15.7885 7.75071L16.12 7.90459C16.2489 7.96158 16.3739 8.02727 16.494 8.1012L16.8 8.30637L17.1145 8.58846C17.208 8.67395 17.293 8.74234 17.3865 8.84492C17.48 8.9475 17.65 9.09283 17.65 9.16121C17.65 9.2296 17.752 9.28944 17.8285 9.40912C17.905 9.5288 17.9815 9.67412 18.0325 9.78525C18.0835 9.89638 18.143 9.99896 18.1855 10.1015C18.248 10.2601 18.2992 10.4229 18.3385 10.5888Z" />
                </svg>
                <svg viewBox="0 0 20 24">
                    <path className="line-pub" d="M10 23V10" />
                    <path className="arrow-pub" d="M10 10L7.5 12.5" />
                    <path className="arrow-pub" d="M10 10L12.5 12.5" />
                    <path className="tick-pub" d="M6.5 10.5L9 13L13.5 7.5" />
                </svg>
            </div>
            <div className="text">
                <span className="normal">{props.btnText}</span>
                <span className="progress">Loading</span>
                <span className="done">Done</span>
            </div>
        </button>

    )
}

export default UploadButton
