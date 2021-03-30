import React from 'react';
import Globe from '../../Globe/Globe';
import WhatTheyDo from './WhatTheyDo';
import Features from './Features.js';
import PreFooter from './PreFooter';
import Footer from './Footer';
import WhatTheyDoRevised from './WhatTheyDoRevised';
import Options from './Interactive/Options';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { decrypt } from '../../../queries/query';
import { Redirect } from 'react-router-dom';
import CountUp from './Interactive/CountUp';


const LandingPage = (props) => {

  if (localStorage.getItem('token') && (props && props.decrypt && props.decrypt.loading == false && props.decrypt.decrypt && props.decrypt.decrypt.id)) return <Redirect to='/homepage' />

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* starting globe section */}
      <div className="row" style={{ background: "#000011", margin: 0, padding: "20px" }} >
        <h4 className="col s5 white-text center-align">Beton</h4>
        <a href="#whyus" style={{ textDecoration: "none" }} className=" valign-wrappper col s2 offset-s2 right-align white-text" ><h5>Why Us?</h5></a>
        <a href="#options" style={{ textDecoration: "none" }} className=" valign-wrappper col s2 offset-s1 left-align white-text" ><h5>Register?</h5></a>
      </div>

      <Globe />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000011" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,170.7C672,160,768,96,864,64C960,32,1056,32,1152,64C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
        </path>
      </svg>
      <CountUp />

      {/* what they do */}
      <WhatTheyDoRevised />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginBottom: "-10px" }}>
        <path fill="#E63946" fillOpacity="1" d="M0,64L1440,160L1440,320L0,320Z"></path>
      </svg>

      {/* features maybe? */}
      <Features />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#E63946" fillOpacity="1" d="M0,128L1440,224L1440,0L0,0Z"></path>
      </svg>

      <div>
        <Options />
      </div>

      {/* pre footer */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginBottom: "-10px" }}>
              <path fill="#977ba3" fillOpacity="1" d="M0,96L120,122.7C240,149,480,203,720,208C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg> */}
      <svg className="wave-qsoVIt" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path className="wavePath-22lfEN" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="#977ba3"></path>
      </svg>
      <PreFooter />
      <Footer />
    </div>
  )
}

export default compose(
  graphql(decrypt, {
    name: "decrypt",
    options: () => {
      let temp = localStorage.getItem("token") || "";
      return {
        variables: {
          token: temp
        }
      }
    }
  })
)(LandingPage)
