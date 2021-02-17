import React from 'react';
import Intro from '../../../images/intro.gif';
import Voice from '../../../images/astronaut.png';
import AboutUsGlobe from './Interactive/AboutUsGlobe';


const WhatTheyDo = () => {
    return (
        <div className="section">
            <div className="container" style={{ borderRadius: "24px", backgroundColor: "#f3eddf", width: "85%" }}>
                <div className="row" style={{ paddingTop: "20px" }}>
                    <div className="col s12 center-align">
                        <h2>What we do?</h2>
                    </div>
                    <div className="col s12 m6">
                        <AboutUsGlobe />
                    </div>
                    <div className="col s12 m6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>

                <div className="row why" id="whyEnrollar">
                    {/* casual thought 1 */}
                    <div id="roll" className="col s10 offset-s1 l5 offset-l1" style={{ "borderRadius": '24px' }}>
                        <div className="card" style={{ "borderRadius": "24px" }}>
                            <div className="card-image waves-block waves-light"
                                style={{ "borderRadius": "24px 24px 0 0" }}
                            >
                                <img className="activator" src={Voice} alt="cover" style={{ borderRadius: "24px 24px 0 0" }} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">
                                    Even astronauts stumble on craters
                      <i className="material-icons right">more_vert</i></span>
                                <h6 style={{ fontFamily: "'Nanum Pen Script', cursive", fontSize: "large" }}>Why do you think we are any different?</h6>
                            </div>
                            <div className="card-reveal" style={{ "backgroundColor": "#2a9d8f", "color": "white" }}>
                                <span className="card-title white-text text-darken-4">
                                    Your voice makes a difference!
                                    <i className="material-icons right">close</i>
                                </span>
                                <p>
                                    <a href="https://github.com"
                                        style={{ color: "yellow" }}
                                    >Github</a>
                                </p>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Pulvinar sapien et ligula ullamcorper malesuada proin.
                                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. In ornare quam viverra orci sagittis eu.
                                    Augue neque gravida in fermentum et sollicitudin ac orci. Egestas diam in arcu cursus euismod. Sagittis aliquam malesuada bibendum arcu vitae elementum. Quisque non tellus orci ac auctor augue mauris augue neque.
                                    <br/>
                                    Nec feugiat in fermentum posuere urna. Amet consectetur adipiscing elit duis tristique. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Ultrices vitae auctor eu augue ut lectus arcu bibendum.
                                    Elementum sagittis vitae et leo duis ut diam quam nulla. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Amet massa vitae tortor condimentum lacinia quis vel. Nec feugiat in fermentum posuere. Adipiscing elit ut aliquam purus.
                                    Purus gravida quis blandit turpis cursus. Sagittis orci a scelerisque purus. Tristique senectus et netus et malesuada fames ac turpis.
                                    Sit amet facilisis magna etiam tempor orci eu lobortis. Nibh cras pulvinar mattis nunc sed blandit. Nulla facilisi nullam vehicula ipsum a arcu. Dolor purus non enim praesent elementum facilisis leo. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus.
                                    Sit amet cursus sit amet dictum sit amet justo. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Felis imperdiet proin fermentum leo vel orci.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* casual thought 2 */}
                    <div id="roll" className="col s10 offset-s1 l5" style={{ "borderRadius": '24px' }}>
                        <div className="card" style={{ "borderRadius": "24px" }}>
                            <div className="card-image waves-block waves-light"
                                style={{ "borderRadius": "24px 24px 0 0" }}
                            >
                                <img className="activator" src={Voice} alt="cover" style={{ borderRadius: "24px 24px 0 0" }} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">
                                    Even astronauts stumble on craters
                      <i className="material-icons right">more_vert</i></span>
                                <h6 style={{ fontFamily: "'Nanum Pen Script', cursive", fontSize: "large" }}>Why do you think we are any different?</h6>
                            </div>
                            <div className="card-reveal" style={{ "backgroundColor": "#2a9d8f", "color": "white" }}>
                                <span className="card-title white-text text-darken-4">
                                    Your voice makes a difference!
                    <i className="material-icons right">close</i>
                                </span>
                                <p>
                                    <a href="https://github.com"
                                        style={{ color: "yellow" }}
                                    >Github</a>
                                </p>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Pulvinar sapien et ligula ullamcorper malesuada proin.
                                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. In ornare quam viverra orci sagittis eu.
                                    Augue neque gravida in fermentum et sollicitudin ac orci. Egestas diam in arcu cursus euismod. Sagittis aliquam malesuada bibendum arcu vitae elementum. Quisque non tellus orci ac auctor augue mauris augue neque.
                                    <br/>
                                    Nec feugiat in fermentum posuere urna. Amet consectetur adipiscing elit duis tristique. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Ultrices vitae auctor eu augue ut lectus arcu bibendum.
                                    Elementum sagittis vitae et leo duis ut diam quam nulla. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Amet massa vitae tortor condimentum lacinia quis vel. Nec feugiat in fermentum posuere. Adipiscing elit ut aliquam purus.
                                    Purus gravida quis blandit turpis cursus. Sagittis orci a scelerisque purus. Tristique senectus et netus et malesuada fames ac turpis.
                                    Sit amet facilisis magna etiam tempor orci eu lobortis. Nibh cras pulvinar mattis nunc sed blandit. Nulla facilisi nullam vehicula ipsum a arcu. Dolor purus non enim praesent elementum facilisis leo. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus.
                                    Sit amet cursus sit amet dictum sit amet justo. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Felis imperdiet proin fermentum leo vel orci.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WhatTheyDo
