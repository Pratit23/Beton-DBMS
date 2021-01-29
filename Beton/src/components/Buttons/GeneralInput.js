import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './GeneralInput.scss';

const GeneralInput = ({ placeholder, classy, type, id }) => {

    useEffect(() => {
        const { to, set, timeline } = gsap

        function delay(fn, ms) {
            let timer = 0
            return function (...args) {
                clearTimeout(timer)
                timer = setTimeout(fn.bind(this, ...args), ms || 0)
            }
        }

        document.querySelectorAll('.input-general').forEach(elem => {
            let clear = elem.querySelector('.clear-general'),
                input = elem.querySelector('input'),
                { classList } = elem,
                svgLine = clear.querySelector('.line-general'),
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
                let bool = input.value.length
                to(elem, {
                    '--clear-scale': bool ? 1 : 0,
                    duration: bool ? .5 : .15,
                    ease: bool ? 'elastic.out(1, .7)' : 'none'
                })
                to(elem, {
                    '--clear-opacity': bool ? 1 : 0,
                    duration: .15
                })
            }, 50))

            clear.addEventListener('click', e => {
                e.preventDefault();
                classList.add('clearing')
                set(elem, {
                    '--clear-swipe-left': (input.offsetWidth - 16) * -1 + 'px'
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
                        '--clear-x': (input.offsetWidth) * -1 + 'px',
                        duration: .45,
                        onComplete() {
                            input.value = ''
                            input.focus()
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

    }, []);

    return (
        <>
            <div className={`input-general ${classy}`} style={{ padding: "0" }}>
                <div className="text-general">
                    <input type={type} id={id} className="browser-default" placeholder={ placeholder } />
                </div>
                <button className="clear-general">
                    <svg viewBox="0 0 24 24">
                        <path className="line-general" d="M2 2L22 22" />
                        <path className="long-general" d="M9 15L20 4" />
                        <path className="arrow-general" d="M13 11V7" />
                        <path className="arrow-general" d="M17 11H13" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default GeneralInput
