import React, { useEffect } from 'react';
import './URL.scss'

const URL = ({ classy }) => {

    useEffect(() => {
        const { to, set, timeline } = gsap

        function validURL(str) {
            let pattern = new RegExp('^(https?:\\/\\/)?' +
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
                '((\\d{1,3}\\.){3}\\d{1,3}))' +
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                '(\\?[;&a-z\\d%_.~+=-]*)?' +
                '(\\#[-a-z\\d_]*)?$', 'i')
            return !!pattern.test(str)
        }

        function delay(fn, ms) {
            let timer = 0
            return function (...args) {
                clearTimeout(timer)
                timer = setTimeout(fn.bind(this, ...args), ms || 0)
            }
        }

        document.querySelectorAll('.url-input').forEach(elem => {
            let icon = elem.querySelector('.icon'),
                favicon = icon.querySelector('.favicon'),
                clear = elem.querySelector('.clear'),
                input = elem.querySelector('input'),
                { classList } = elem,
                svgLine = clear.querySelector('.line'),
                svgLineProxy = new Proxy({
                    x: null
                }, {
                    set(target, key, value) {
                        target[key] = value
                        if (target.x !== null) {
                            svgLine.setAttribute('d', getPath(target.x, .1925))
                        }
                        return true
                    },
                    get(target, key) {
                        return target[key]
                    }
                })

            svgLineProxy.x = 0

            input.addEventListener('input', delay(e => {
                let bool = input.value.length,
                    valid = validURL(input.value)
                to(elem, {
                    '--clear-scale': bool ? 1 : 0,
                    duration: bool ? .5 : .15,
                    ease: bool ? 'elastic.out(1, .7)' : 'none'
                })
                to(elem, {
                    '--clear-opacity': bool ? 1 : 0,
                    duration: .15
                })
                to(elem, {
                    '--icon-offset': valid ? '24px' : '0px',
                    duration: .15,
                    delay: valid ? 0 : .2
                })
                if (valid) {
                    if (favicon.querySelector('img')) {
                        favicon.querySelector('img').src = 'https://f1.allesedv.com/64/' + input.value
                        return
                    }
                    let img = new Image()
                    img.onload = () => {
                        favicon.appendChild(img)
                        to(elem, {
                            '--favicon-scale': 1,
                            duration: .5,
                            delay: .2,
                            ease: 'elastic.out(1, .7)'
                        })
                    }
                    img.src = 'https://f1.allesedv.com/64/' + input.value
                } else {
                    if (favicon.querySelector('img')) {
                        to(elem, {
                            '--favicon-scale': 0,
                            duration: .15,
                            onComplete() {
                                favicon.querySelector('img').remove()
                            }
                        })
                    }
                }
            }, 250))

            clear.addEventListener('click', e => {
                classList.add('clearing')
                set(elem, {
                    '--clear-swipe-left': (input.offsetWidth - 44) * -1 + 'px'
                })
                to(elem, {
                    keyframes: [{
                        '--clear-rotate': '45deg',
                        duration: .25
                    }, {
                        '--clear-arrow-x': '2px',
                        '--clear-arrow-y': '-2px',
                        duration: .15
                    }, {
                        '--clear-arrow-x': '-3px',
                        '--clear-arrow-y': '3px',
                        '--clear-swipe': '-3px',
                        duration: .15,
                        onStart() {
                            to(svgLineProxy, {
                                x: 3,
                                duration: .1,
                                delay: .05
                            })
                        }
                    }, {
                        '--clear-swipe-x': 1,
                        '--clear-x': (input.offsetWidth - 32) * -1 + 'px',
                        duration: .45,
                        onComplete() {
                            input.value = ''
                            input.focus()
                            if (favicon.querySelector('img')) {
                                to(elem, {
                                    '--favicon-scale': 0,
                                    duration: .15,
                                    onComplete() {
                                        favicon.querySelector('img').remove()
                                    }
                                })
                                to(elem, {
                                    '--icon-offset': '0px',
                                    '--icon-offset-line': '0px',
                                    duration: .15,
                                    delay: .2
                                })
                            }
                            to(elem, {
                                '--clear-arrow-offset': '4px',
                                '--clear-arrow-offset-second': '4px',
                                '--clear-line-array': '8.5px',
                                '--clear-line-offset': '27px',
                                '--clear-long-offset': '24px',
                                '--clear-rotate': '0deg',
                                '--clear-arrow-o': 1,
                                duration: 0,
                                delay: .7,
                                onStart() {
                                    classList.remove('clearing')
                                }
                            })
                            to(elem, {
                                '--clear-opacity': 0,
                                duration: .2,
                                delay: .55
                            })
                            to(elem, {
                                '--clear-arrow-o': 0,
                                '--clear-arrow-x': '0px',
                                '--clear-arrow-y': '0px',
                                '--clear-swipe': '0px',
                                duration: .15
                            })
                            to(svgLineProxy, {
                                x: 0,
                                duration: .45,
                                ease: 'elastic.out(1, .75)'
                            })
                        }
                    }, {
                        '--clear-swipe-x': 0,
                        '--clear-x': '0px',
                        duration: .4,
                        delay: .35
                    }]
                })
                to(elem, {
                    '--clear-arrow-offset': '0px',
                    '--clear-arrow-offset-second': '8px',
                    '--clear-line-array': '28.5px',
                    '--clear-line-offset': '57px',
                    '--clear-long-offset': '17px',
                    duration: .2
                })
            })
        })

        function getPoint(point, i, a, smoothing) {
            let cp = (current, previous, next, reverse) => {
                let p = previous || current,
                    n = next || current,
                    o = {
                        length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                        angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                    },
                    angle = o.angle + (reverse ? Math.PI : 0),
                    length = o.length * smoothing;
                return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
            },
                cps = cp(a[i - 1], a[i - 2], point, false),
                cpe = cp(point, a[i - 1], a[i + 1], true);
            return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
        }

        function getPath(x, smoothing) {
            return [
                [2, 2],
                [12 - x, 12 + x],
                [22, 22]
            ].reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '')
        }

    }, [])

    return (
        <div className={`url-input ${classy}`}>
            <div className="icon">
                <svg viewBox="0 0 18 18">
                    <path d="M10.05 7.95001C11.55 9.45001 11.55 11.775 10.05 13.275L7.95 15.375C6.45 16.875 4.125 16.875 2.625 15.375C1.125 13.875 1.125 11.55 2.625 10.05L4.5 8.25001" />
                    <path d="M7.9502 10.05C6.4502 8.55 6.4502 6.225 7.9502 4.725L10.0502 2.625C11.5502 1.125 13.8752 1.125 15.3752 2.625C16.8752 4.125 16.8752 6.45 15.3752 7.95L13.5002 9.75" />
                </svg>
                <div className="favicon"></div>
            </div>
            <div className="text">
                <input type="text" placeholder="Your URL" id="website-url"/>
            </div>
            <button className="clear">
                <svg viewBox="0 0 24 24">
                    <path className="line" d="M2 2L22 22" />
                    <path className="long" d="M9 15L20 4" />
                    <path className="arrow" d="M13 11V7" />
                    <path className="arrow" d="M17 11H13" />
                </svg>
            </button>
        </div>
    )
}

export default URL
