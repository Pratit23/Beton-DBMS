import React from 'react';
import Globe from '../../Globe/Globe';
import WhatTheyDo from './WhatTheyDo';

const LandingPage = () => {

    return (
        <div>
          {/* starting globe section */}
            <Globe />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#000011" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,170.7C672,160,768,96,864,64C960,32,1056,32,1152,64C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>

            {/* what we do */}
            <WhatTheyDo />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginBottom: "-10px" }}>
              <path fill="#E63946" fill-opacity="1" d="M0,64L1440,160L1440,320L0,320Z"></path>
            </svg>
            <div className="section" style={{ backgroundColor: "#E63946" }} >
              <div className="container white" style={{ borderRadius: "24px" }}>
                <div className="row">

                </div>
              </div>
            </div>
        </div>
    )
}

export default LandingPage
