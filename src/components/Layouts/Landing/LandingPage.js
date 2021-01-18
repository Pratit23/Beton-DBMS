import React from 'react';
import Globe from '../../Globe/Globe';
import Voice from '../../../images/astronaut.png';

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
            <div className="section">
              <div className="container" style={{ borderRadius: "24px", backgroundColor: "#CBD4C2" }}>
                <div className="row">
                  <div className="col s12 m4">
                  
                  </div>
                  <div className="col s12 m8">
                    <h3>Who are we?</h3>
                    
                  </div>
                </div>
                <div className="row why" id="whyEnrollar">
                  <div id="roll" className="col s10 offset-s1 l8 offset-l2" style={{"borderRadius":'24px'}}>
                    <div className="card" style={{"borderRadius":"24px"}}>
                      <div className="card-image waves-block waves-light"
                        style={{"borderRadius":"24px 24px 0 0"}}
                      >
                        <img className="activator" src={ Voice } alt="cover" style={{ borderRadius: "24px 24px 0 0" }}/>
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            Even astronauts stumble on craters 
                            <i className="material-icons right">more_vert</i></span>
                            <h6 style={{ fontFamily: "'Nanum Pen Script', cursive", fontSize: "large" }}>Why do you think we are any different?</h6>
                      </div>
                      <div className="card-reveal" style={{"backgroundColor":"#2a9d8f","color":"white"}}>
                        <span className="card-title white-text text-darken-4">
                            Your voice makes a difference!
                          <i className="material-icons right">close</i>
                        </span>
                        <p>
                          <a href="https://github.com"
                            style={{color:"yellow"}}
                          >Github</a>
                        </p>
                          <hr />
                        <p>
                          Need some content here...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
