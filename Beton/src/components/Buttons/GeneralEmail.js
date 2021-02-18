import React, { useEffect } from 'react';
import './GeneralEmail.scss';

const GeneralEmail = ({ classy }) => {
    useEffect(()=>{
        const regex = new RegExp(
            '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
            '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
            '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        );
        
        document.querySelectorAll('.email-input').forEach(container => {
        
            let input = container.querySelector('input')
        
            input.addEventListener('keyup', e => container.classList.toggle('valid', regex.test(input.value)))
        
        });
    }, []);
    return (
        <>
            <div className={`email-input ${classy}`} style={{ padding: "0" }} >
                <input className="browser-default" id="signup-email" type="email" placeholder="your@email.com" required />
                    <svg viewBox="0 0 18 18">
                        <path d="M11.5,10.5 C6.4987941,17.5909626 1,3.73719105 11.5,6 C10.4594155,14.5485365 17,13.418278 17,9 C17,4.581722 13.418278,1 9,1 C4.581722,1 1,4.581722 1,9 C1,13.418278 4.581722,17 9,17 C13.418278,17 17,13.42 17,9"></path>
                        <polyline points="5 9.25 8 12 13 6"></polyline>
                    </svg>
            </div>
        </>
    )
}

export default GeneralEmail
