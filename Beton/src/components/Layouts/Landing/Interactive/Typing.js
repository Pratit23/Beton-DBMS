import React, { useEffect } from 'react'
import Typed from 'typed.js';

var options = {
    strings: ['you want to see.^1000', 'you want to happen.^1000', 'that will make it happen.^1000'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
};

const Type = () => {
    useEffect(() => {
        new Typed('.start', options)
    }, [])
    return (
        <div className="type-wrap">
            <span
                style={{ whiteSpace: 'pre' }}
                className="start"
            />
        </div>
    )
}

export default Type;