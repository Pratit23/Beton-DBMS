import React, { useEffect } from 'react';
import './GeneralDOB.scss'

const GeneralDOB = ({ classy }) => {

    useEffect(() => {
        const $ = (s, o = document) => o.querySelector(s);
        const $$ = (s, o = document) => o.querySelectorAll(s);

        const zodiacs = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius'];

        function getZodiac(day, month) {
            let zodiac = [''].concat(zodiacs).concat([zodiacs[0]]),
                last = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
            return (parseInt(day) > last[parseInt(month)]) ? zodiac[parseInt(month) * 1 + 1] : zodiac[parseInt(month)];
        }

        function createZodiac(cls, index) {
            let div = document.createElement('div');
            div.style.setProperty('--offset', index * -24 + 'px');
            div.classList.add(cls);
            return div;
        }

        function createSVG(id) {
            let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
            use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + id);
            svg.appendChild(use);
            svg.classList.add(id);
            return svg;
        }

        function prevInput(el) {
            let input = el.previousElementSibling ? el.previousElementSibling.previousElementSibling : null;
            return (input && input.tagName == 'INPUT') ? input : el;
        }

        function nextInput(el) {
            let input = el.nextElementSibling ? el.nextElementSibling.nextElementSibling : null;
            return (input && input.tagName == 'INPUT') ? input : el;
        }

        function pad(n) {
            return (n < 10) ? ('0' + n) : n;
        }

        function triggerInput(el) {
            let event = document.createEvent('Event');
            event.initEvent('input', true, true);

            el.dispatchEvent(event);
        }

        $$('.birthday').forEach(field => {

            let month = $('.month', field),
                day = $('.day', field),
                year = $('.year', field),
                icon = $('.icon', field),
                normal = $('.normal', icon),
                zodiac = $('.zodiac', icon),
                message = document.createElement('div');

            message.classList.add('error-message');

            field.appendChild(message);

            ['cake-light', 'cake'].forEach(name => normal.appendChild(createSVG(name)));

            zodiacs.forEach((name, index) => zodiac.appendChild(createZodiac(name, index)));

            month.addEventListener('keypress', e => {
                if (e.key > 1 && !month.value.length && e.keyCode != 37 && e.keyCode != 39 && document.activeElement == month) {
                    month.value = '0' + e.key;
                    triggerInput(month);
                    setTimeout(() => nextInput(month).focus(), 50);
                }
            });

            day.addEventListener('keypress', e => {
                if (e.key > 3 && !day.value.length && e.keyCode != 37 && e.keyCode != 39 && document.activeElement == day) {
                    day.value = '0' + e.key;
                    triggerInput(day);
                    setTimeout(() => nextInput(day).focus(), 50);
                }
            });

            [month, day, year].forEach(input => {

                input.addEventListener('keypress', e => {
                    if (e.keyCode < 47 || e.keyCode > 57) {
                        e.preventDefault();
                    }
                });

                input.addEventListener('keydown', e => {
                    if ((e.keyCode == 8 && !input.value) || (e.keyCode == 37 && input.selectionStart == 0)) {
                        prevInput(input).focus();
                    }
                    if (((e.keyCode != 9 && e.keyCode != 37 && e.keyCode != 8 && (input.selectionStart == input.getAttribute('maxlength'))) || (e.keyCode == 39 && input.selectionStart == input.value.length))) {
                        nextInput(input).focus();
                    }
                });

                input.addEventListener('input', e => {

                    let date = (month.value.length >= 1 && day.value.length >= 1 && year.value.length == 4) ? new Date(year.value + '-' + month.value + '-' + day.value) : true;

                    if ($('.show', zodiac)) {
                        $('.show', zodiac).classList.remove('show');
                    }

                    if (day.value.length >= 1 && day.value > 0 && day.value < 32 && month.value.length >= 1 && month.value > 0 && month.value < 13) {
                        $('.' + getZodiac(day.value, month.value), zodiac).classList.add('show');
                        normal.classList.add('hide');
                    } else {
                        normal.classList.remove('hide');
                    }

                    field.classList.toggle('error', (day.value.length == 2 && (day.value < 1 || day.value > 31)) || (month.value.length == 2 && (month.value < 1 || month.value > 12)) || (date !== true && date > new Date) || (date !== true && date < (new Date).setFullYear((new Date).getFullYear() - 120)));

                    if (date !== true && date > new Date) {
                        message.textContent = 'Not born yet?';
                        setTimeout(() => message.classList.add('show'), 50);
                    } else if (date !== true && date < (new Date).setFullYear((new Date).getFullYear() - 120)) {
                        message.textContent = '> 120 years is really old!';
                        setTimeout(() => message.classList.add('show'), 50);
                    } else {
                        message.classList.remove('show');
                    }

                });

            });

        });

    }, []);

    return (
        <div className={`${classy}`} style={{ padding: "0" }} >
            <div className="birthday">
                <div className="icon">
                    <div className="normal">
                        <svg viewBox="0 0 36 36" className="cake-smoke" fill="none" stroke="currentColor">
                            <path d="M18 11C18 11 18.832 7.48792 20.25 7C20.8172 6.80483 21.1828 7.19517 21.75 7C23.168 6.51208 24 3 24 3" />
                            <path d="M17 8C17 8 16.0731 6.29007 15.2857 6C14.849 5.8391 14.5663 6.24699 14.1429 6C13.1961 5.44772 13 2 13 2" />
                            <path d="M18.0916 5C18.0916 5 17.8855 4.20779 18.0916 3.71429C18.3987 2.97862 20 2 20 2" />
                        </svg>
                    </div>
                    <div className="zodiac"></div>
                </div>
                <input id="mm-dob" type="text" className="month browser-default" placeholder="MM" maxLength="2" pattern="\d*" required />
                <span>/</span>
                <input id="dd-dob" type="text" className="day browser-default" placeholder="DD" maxLength="2" pattern="\d*" required />
                <span>/</span>
                <input id="yy-dob" type="text" className="year browser-default" placeholder="YYYY" maxLength="4" pattern="\d*" required />
            </div>

            <div className="log"></div>

            <svg xmlns="http://www.w3.org/2000/svg" style={{display:"none"}}>
                <symbol viewBox="0 0 36 36" id="cake-light" fill="currentColor">
                    <path d="M21 10.5C21 12.1569 19.6569 13.5 18 13.5C16.3431 13.5 15 12.1569 15 10.5C15 8.84315 18 3.5 18 3.5C18 3.5 21 8.84315 21 10.5Z" />
                </symbol>
                <symbol viewBox="0 0 36 36" id="cake" fill="currentColor">
                    <path d="M19.5 14V14C19.2793 12.2344 16.7207 12.2344 16.5 14V14C11.25 14.3 6 15.95 6 19.25V23.75C6 27.35 12.15 29 18 29C23.85 29 30 27.35 30 23.75V19.25C30 15.95 24.75 14.3 19.5 14ZM16.5 17V18.5C16.5 19.4 17.1 20 18 20C18.9 20 19.5 19.4 19.5 18.5V17C24.15 17.3 26.7 18.65 27 19.25C26.7 19.85 23.7 21.5 18 21.5C12.3 21.5 9.15 19.85 9 19.25C9.15 18.65 11.7 17.3 16.5 17Z" />
                </symbol>
            </svg>
        </div>
    )
}

export default GeneralDOB
