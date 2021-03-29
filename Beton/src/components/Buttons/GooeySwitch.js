import React, { useEffect } from 'react';
import './GooeySwitch.scss';

const GooeySwitch = ({ onChange, checked }) => {

    useEffect(() => {
        const { to, set, from, fromTo } = window.gsap

        const getVar = (key, elem = document.documentElement) => getComputedStyle(elem).getPropertyValue(key)

        document.querySelectorAll('.radio').forEach(elem => {
            let svg = elem.querySelector('svg'),
                input = elem.querySelector('input')
            input.addEventListener('change', e => {
                fromTo(input, {
                    '--border-width': '3px'
                }, {
                    '--border-color': getVar('--c-active'),
                    '--border-width': '12px',
                    duration: .2
                })
                to(svg, {
                    keyframes: [{
                        '--top-y': '6px',
                        '--top-s-x': 1,
                        '--top-s-y': 1.25,
                        duration: .2,
                        delay: .2
                    }, {
                        '--top-y': '0px',
                        '--top-s-x': 1.75,
                        '--top-s-y': 1,
                        duration: .6
                    }]
                })
                to(svg, {
                    keyframes: [{
                        '--dot-y': '2px',
                        duration: .3,
                        delay: .2
                    }, {
                        '--dot-y': '0px',
                        duration: .3
                    }]
                })
                to(svg, {
                    '--drop-y': '0px',
                    duration: .6,
                    delay: .4,
                    clearProps: true,
                    onComplete() {
                        input.removeAttribute('style')
                    }
                })
            })
        })

        document.querySelectorAll('.checkbox').forEach(elem => {
            let svg = elem.querySelector('svg'),
                input = elem.querySelector('input')
            input.addEventListener('change', e => {
                let checked = input.checked
                if (!checked) {
                    return
                }
                fromTo(input, {
                    '--border-width': '3px'
                }, {
                    '--border-color': getVar('--c-active'),
                    '--border-width': '12px',
                    duration: .2,
                    clearProps: true
                })
                set(svg, {
                    '--dot-x': '14px',
                    '--dot-y': '-14px',
                    '--tick-offset': '20.5px',
                    '--tick-array': '16.5px',
                    '--drop-s': 1
                })
                to(elem, {
                    keyframes: [{
                        '--border-radius-corner': '14px',
                        duration: .2,
                        delay: .2
                    }, {
                        '--border-radius-corner': '5px',
                        duration: .3,
                        clearProps: true
                    }]
                })
                to(svg, {
                    '--dot-x': '0px',
                    '--dot-y': '0px',
                    '--dot-s': 1,
                    duration: .4,
                    delay: .4
                })
                to(svg, {
                    keyframes: [{
                        '--tick-offset': '48px',
                        '--tick-array': '14px',
                        duration: .3,
                        delay: .2
                    }, {
                        '--tick-offset': '46.5px',
                        '--tick-array': '16.5px',
                        duration: .35,
                        clearProps: true
                    }]
                })
            })
        })

        document.querySelectorAll('.switch').forEach(elem => {
            let svg = elem.querySelector('svg'),
                input = elem.querySelector('input')
            input.addEventListener('pointerenter', e => {
                if (elem.animated || input.checked) {
                    return
                }
                to(input, {
                    '--input-background': getVar('--c-default-dark'),
                    duration: .2
                })
            })
            input.addEventListener('pointerleave', e => {
                if (elem.animated || input.checked) {
                    return
                }
                to(input, {
                    '--input-background': getVar('--c-default'),
                    duration: .2
                })
            })
            input.addEventListener('change', e => {
                let checked = input.checked
                let hide = checked ? 'default' : 'dot',
                    show = checked ? 'dot' : 'default'
                fromTo(svg, {
                    '--default-s': checked ? 1 : 0,
                    '--default-x': checked ? '0px' : '8px',
                    '--dot-s': checked ? 0 : 1,
                    '--dot-x': checked ? '-8px' : '0px'
                }, {
                    ['--' + hide + '-s']: 0,
                    ['--' + hide + '-x']: checked ? '8px' : '-8px',
                    duration: .25,
                    delay: .15
                })
                fromTo(input, {
                    '--input-background': getVar(checked ? '--c-default' : '--c-active'),
                }, {
                    '--input-background': getVar(checked ? '--c-active' : '--c-default'),
                    duration: .35,
                    clearProps: true
                })
                to(svg, {
                    keyframes: [{
                        ['--' + show + '-x']: checked ? '2px' : '-2px',
                        ['--' + show + '-s']: 1,
                        duration: .25
                    }, {
                        ['--' + show + '-x']: '0px',
                        duration: .2,
                        clearProps: true
                    }]
                })
            })
        })

    }, [])

    return (
        <>
            <label className="switch">
                <input type="checkbox" checked={checked} id="gooey-switch" onChange={onChange} />
                <svg viewBox="0 0 38 24" filter="url(#goo)">
                    <circle className="default" cx="12" cy="12" r="8" />
                    <circle className="dot" cx="26" cy="12" r="8" />
                    <circle className="drop" cx="25" cy="-1" r="2" />
                </svg>
            </label>
            <svg width="0" height="0">
                <defs>
                    <filter id="goo" x="-50%" width="200%" y="-50%" height="200%" colorInterpolationFilters="sRGB">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                    </filter>
                    <filter id="goo-light" x="-50%" width="200%" y="-50%" height="200%" colorInterpolationFilters="sRGB">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1.25" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                    </filter>
                    <filter id="goo-big" x="-50%" width="200%" y="-50%" height="200%" colorInterpolationFilters="sRGB">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default GooeySwitch
