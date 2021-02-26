import React from 'react'
import StatsCard from '../Cards/StatsCard'
import DownloadApp from '../../images/horizontal.jpg'
import GenericButton from '../Buttons/GenericButton'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { decrypt } from '../../queries/query';
import HorizontalGraph from '../Graphs/HorizontalGraph';
import MinimalImageCard from '../Cards/MinimalImageCard';
import One from '../../images/one.png'
import Two from '../../images/two.png'
import Third from '../../images/three.png'


const HomepageSide = (props) => {

    return (
        <div className="demo" id="main">
            <div className="row" style={{ height: "100%" }}>
                {/* // *left big ass section */}
                <div className="col s12 m9 white" style={{ height: "100%" }}>
                    <div className="row" style={{ marginTop: "30px" }}>
                        <div className="col s12 m6" style={{ padding: "0 30px" }} >
                            <h6 className="grey-text">Hello, {
                                props && props.decrypt && !props.decrypt.loading && props.decrypt.decrypt ? (
                                    props.decrypt.decrypt.name
                                ) : "Anonymous"
                            }</h6>
                        </div>
                        <div className="col s12 m6 right-align" style={{ padding: "0 30px" }}>
                            <h6 className="grey-text">{new Date().toDateString()}</h6>
                        </div>
                    </div>

                    {/* // ! Poster here - download app */}
                    <div className="row" style={{ marginTop: "20px", height: "200px" }}>
                        <div className="col s10 offset-s1 valign-wrapper" style={{
                            height: "100%",
                            backgroundImage: `url(${DownloadApp})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "18px"
                        }}>
                            <div style={{ width: "100%", marginTop: "30px" }}>
                                <h5 className="white-text center-align">Download Our Mobile App</h5>
                                <hr className="divider center-align" style={{ width: "10%", margin: "5px auto" }} />
                                <p className="white-text center-align" style={{ fontSize: "small" }} >
                                    Report and earn rewards much easily using our <br /> handy mobile app.
                                    So, what are you waiting for?
                                </p>
                                <div style={{ marginTop: "15px" }}>
                                    <GenericButton text="Download" id="download" link="google.com" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* // ? Cards here - stats */}
                    <div className="row" style={{ marginTop: "20px", height: "max-content" }}>
                        <div className="col s12 m5 offset-m1" style={{height: "100%"}} >
                            <div className="card white" style={{ borderRadius: "18px", height: "220px" }}>
                                <div className="card-content infographics">
                                    <h6  className="col s12" >
                                        Your statistics
                                    </h6>
                                    <hr className="divider col s12" style={{ margin: "5px auto" }}  />
                                    <p style={{ color: "#10364e", width: "100%", clear: "both" }}>
                                        <span className="left">Recently reported in</span>
                                        <span className="right" style={{ fontWeight: "bolder" }}>Mumbai</span>
                                    </p>
                                    <p style={{ color: "#10364e", width: "100%", clear: "both" }}>
                                        <span className="left">Total reports</span>
                                        <span className="right" style={{ fontWeight: "bolder" }}>10</span>
                                    </p>
                                    <p style={{ color: "#10364e", width: "100%", clear: "both" }}>
                                        <span className="left">Successful reports</span>
                                        <span className="right" style={{ fontWeight: "bolder" }}>02</span>
                                    </p>
                                    <p style={{ color: "#10364e", width: "100%", clear: "both" }}>
                                        <span className="left">Coupons earned</span>
                                        <span className="right" style={{ fontWeight: "bolder" }}>03</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m5">
                            <HorizontalGraph />
                        </div>
                    </div>
                    
                    {/* quicc links */}
                    <div className="row hide-on-small-only" style={{ marginTop: "20px", height: "max-content" }}>
                        <h5 className="col s12"  style={{ color: "#002438", marginBottom: "10px" }}  >
                            Quick links
                        </h5>
                        <div className="col s4" style={{borderRadius: "18px", height: "100px"}} >
                            <MinimalImageCard img={One} text="Map view" link="/cluster" />
                        </div>
                        <div className="col s4" style={{borderRadius: "18px", height: "100px"}} >
                            <MinimalImageCard img={Two} text="My account" link="/account" />
                        </div>
                        <div className="col s4" style={{borderRadius: "18px", height: "100px"}} >
                            <MinimalImageCard img={Third} text="Report" link="/reportpage" />
                        </div>
                    </div>
                </div>

                {/* // *right big ass section */}
                <div className="col s12 m3" style={{ background: "#f5f7fb", height: "100%" }}>
                    <div className="row" style={{ marginTop: "30px" }}>
                        <div className="col s12" style={{ padding: "0 30px" }} >
                            <h6 style={{ color: "#002438" }} >Statistics of Mumbai</h6>
                        </div>
                        <hr className="divider" />
                        <br />
                        <div className="col s8 offset-s2">
                            <StatsCard text="Total Reports" props={props.props} />
                        </div>
                        <div className="col s8 offset-s2">
                            <StatsCard text="Total Reports" props={props.props} />
                        </div>
                        <div className="col s8 offset-s2">
                            <StatsCard text="Total Reports" props={props.props} />
                        </div>
                    </div>
                </div>
            </div>
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
)(HomepageSide)
