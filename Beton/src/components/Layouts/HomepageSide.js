import React, { useEffect } from 'react'
import StatsCard from '../Cards/StatsCard'
import DownloadApp from '../../images/horizontal.jpg'
import GenericButton from '../Buttons/GenericButton'
import { graphql, useLazyQuery } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { allMyReports, decrypt, findUsingZipCode, users } from '../../queries/query';
import HorizontalGraph from '../Graphs/HorizontalGraph';
import MinimalImageCard from '../Cards/MinimalImageCard';
import One from '../../images/one.png'
import Two from '../../images/two.png'
import Third from '../../images/three.png'
import AdCard from '../Cards/AdCard';
import { geolocated } from "react-geolocated";
import Geocode from "react-geocode";

let zupzip;

const HomepageSide = (props) => {
    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey("AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w");

    // set response language. Defaults to english.
    Geocode.setLanguage("en");

    // lazy query here
    const [zippy, { called, loading, data }] = useLazyQuery(
        findUsingZipCode,
        {
            variables: {
                zip: zupzip
            }
        }
    );

    useEffect(() => {
        if (props.coords && props.coords.latitude && props.coords.longitude) {
            Geocode.fromLatLng(props.coords.latitude, props.coords.longitude).then(
                response => {
                    var address = response.results[0].formatted_address;
                    console.log(address);
                    var myRegexExp = /[0-9]{6}/gm;
                    let zipCode = myRegexExp.exec(address)[0]
                    zupzip = zipCode;
                    console.log(zipCode)
                    zippy();
                },
                error => {
                    console.error("Error fetching the land: ", error);
                })
        }
    }, [props.coords])

    function compare(a, b) {
        if (a.reportedAt < b.reportedAt) {
            return -1;
        }
        if (a.reportedAt > b.reportedAt) {
            return 1;
        }
        return 0;
    }

    console.log(props)
    return (
        <>
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
                            <div className="col s12 m5 offset-m1" style={{ height: "100%" }} >
                                <div className="card white" style={{ borderRadius: "18px", height: "220px" }}>
                                    <div className="card-content infographics">
                                        <h6 className="col s12" >
                                            Your statistics
                                    </h6>
                                        <hr className="divider col s12" style={{ margin: "5px auto" }} />
                                        <p style={{ color: "#10364e", width: "100%", clear: "both" }}>
                                            <span className="left">Recently reported at</span>
                                            <span className="right" style={{ fontWeight: "bolder" }}>
                                                {
                                                    props.allMyReports && !props.allMyReports.loading && props.allMyReports.allMyReports && props.allMyReports.allMyReports.length != 0 ? (
                                                        props.allMyReports.allMyReports.sort(compare)[0]["reportedAt"]
                                                    ) : "Never"
                                                }
                                            </span>
                                        </p>
                                        <p style={{ color: "#10364e", width: "100%", clear: "both" }}>
                                            <span className="left">Total reports</span>
                                            {
                                                props.allMyReports && !props.allMyReports.loading && props.allMyReports.allMyReports ? (
                                                    <span className="right" style={{ fontWeight: "bolder" }}>{props.allMyReports.allMyReports.length}</span>) : (
                                                    <span className="right" style={{ fontWeight: "bolder" }}>0</span>
                                                )
                                            }
                                        </p>
                                        <p style={{ color: "#10364e", width: "100%", clear: "both" }}>
                                            <span className="left">Supporting reports</span>
                                            {
                                                props.allMyReports && !props.allMyReports.loading && props.allMyReports.allMyReports ? (
                                                    <span className="right" style={{ fontWeight: "bolder" }}>{props.allMyReports.allMyReports.filter(a => a.baseParent != null ? a.baseParent.noOfReports > 12 ? true : false : false).length}</span>) : (
                                                    <span className="right" style={{ fontWeight: "bolder" }}>0</span>
                                                )
                                            }
                                        </p>
                                        <p style={{ color: "#10364e", width: "100%", clear: "both" }}>
                                            <span className="left">Coupons earned</span>
                                            {
                                                props.decrypt && !props.decrypt.loading && props.decrypt.decrypt ? (
                                                    <span className="right" style={{ fontWeight: "bolder" }}>{props.decrypt.decrypt.coupons.length}</span>
                                                ) : (
                                                    <span className="right" style={{ fontWeight: "bolder" }}>00</span>
                                                )
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m5">
                                {
                                    props.allMyReports && !props.allMyReports.loading && props.allMyReports.allMyReports && props.decrypt && !props.decrypt.loading && props.decrypt.decrypt && called && !loading && data && data.findUsingZipCode ? (
                                        <HorizontalGraph values={[data.findUsingZipCode.length == 0 ? 0 : data.findUsingZipCode[0].similar.length + 1, props.allMyReports.allMyReports.length, props.allMyReports.allMyReports.filter(a => a.baseParent != null ? a.baseParent.noOfReports > 12 ? true : false : false).length, props.decrypt.decrypt.coupons.length]} />
                                    ) :
                                        <HorizontalGraph values={[0, 0, 0, 0]} />
                                }
                            </div>
                        </div>

                        {/* quicc links */}
                        <div className="row hide-on-small-only" style={{ marginTop: "20px", height: "max-content" }}>
                            <h5 className="col s12" style={{ color: "#002438", marginBottom: "10px" }}  >
                                Quick links
                        </h5>
                            <div className="col s4" style={{ borderRadius: "18px", height: "100px" }} >
                                <MinimalImageCard img={One} text="Map view" link="/cluster" />
                            </div>
                            <div className="col s4" style={{ borderRadius: "18px", height: "100px" }} >
                                <MinimalImageCard img={Two} text="My account" link="/account" />
                            </div>
                            <div className="col s4" style={{ borderRadius: "18px", height: "100px" }} >
                                <MinimalImageCard img={Third} text="Report" link="/reportpage" />
                            </div>
                        </div>
                    </div>

                    {/* // *right big ass section */}
                    <div className="col s12 m3" style={{ background: "#f5f7fb", height: "100%" }}>
                        <div className="row" style={{ marginTop: "30px" }}>
                            <div className="col s12" style={{ padding: "0 30px" }} >
                                <h6 style={{ color: "#002438" }} >Statistics</h6>
                            </div>
                            <hr className="divider" />
                            <br />
                            <div className="col s8 offset-s2">
                                {
                                    called && !loading && data ?
                                        <StatsCard text="Total Reports in your area" value={data && data.findUsingZipCode && data.findUsingZipCode.length != 0 ? data.findUsingZipCode[0].similar.length + 1 : 0} props={props.props} /> :
                                        <StatsCard text="Total Reports in your area" props={props.props} />
                                }
                            </div>
                            <div className="col s8 offset-s2">
                                {
                                    props.allMyReports && !props.allMyReports.loading && props.allMyReports.allMyReports ? (
                                        <StatsCard text="Total Reports by you" value={props.allMyReports.allMyReports.length} props={props.props} />
                                    ) : (
                                        <StatsCard text="Total Reports by you" props={props.props} />
                                    )
                                }
                            </div>
                            <div className="col s8 offset-s2">
                                {
                                    props.users && !props.users.loading && props.users.users ? (
                                        <StatsCard text="User count" value={props.users.users.length} props={props.props} />
                                    ) : (
                                        <StatsCard text="User count" props={props.props} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AdCard />
        </>
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
    }),
    geolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    }),
    graphql(users, { name: "users" }),
    graphql(allMyReports, {
        name: "allMyReports",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    token: temp
                }
            }
        }
    }),
)(HomepageSide)
