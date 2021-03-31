import React from 'react'
import { graphql } from 'react-apollo';
import { flowRight as composey } from 'lodash';
import { getSpecificReport } from '../../../../queries/query';
import Lottie from 'react-lottie';
import loading from '../../../../images/Lottie/loading.json'
import noResults from '../../../../images/Lottie/noResults.json'
import { Link } from 'react-router-dom';
import MapView from './MapView';


const ReportDetails = ({ props, getSpecificReport }) => {
    console.log(getSpecificReport);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: noResults,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const colors = [
        { bg: "#e63946", text: "#fff" },
        { bg: "#f1faee", text: "#000" },
        { bg: "#a8dadc", text: "#000" },
        { bg: "#457b9d", text: "#fff" },
        { bg: "#1d3557", text: "#fff" },
    ]
    return (
        <>
            {
                getSpecificReport && !getSpecificReport.loading && getSpecificReport.getSpecificReport ? (
                    <div className="demo" id="main" style={{ overflowY: "auto" }}>
                        <div className="row advHomeTop" style={{ height: "100%" }} >
                            <div className="col s8">
                                <h4 style={{ margin: "30px 0 0 0" }}>Report Statistics</h4>
                                <hr className="divider" />

                                {/* // ! Reported By */}
                                <h6 style={{ margin: "15px 0 10px 0" }}>
                                    Reported By:
                                </h6>
                                <Link to="/admin/users">
                                    <div className="card-panel hoverable" style={{ borderRadius: "24px", padding: "10px", cursor: "pointer" }} >
                                        <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                            <div className="col s2 center" style={{
                                                height: "80px",
                                                width: "80px",
                                                borderRadius: "100%",
                                                backgroundImage: `url(${getSpecificReport.getSpecificReport.userID.profile})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center center"
                                            }} ></div>
                                            <div className="col s9">
                                                <h5 className="black-text">
                                                    {getSpecificReport.getSpecificReport.userID.name}
                                                </h5>
                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                    {getSpecificReport.getSpecificReport.userID.email} | Has {getSpecificReport.getSpecificReport.userID.karma} points!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* // ! Statistics By */}
                                <h6 style={{ margin: "15px 0 10px 0" }}>
                                    Submitted Details:
                                </h6>
                                {/* <div className="card" style={{ borderRadius: "24px" }} > */}
                                <div style={{ height: "300px", borderRadius: "24px" }} >
                                    <div className="col s5" style={{ borderRadius: "18px", height: "100%", backgroundImage: `url(${getSpecificReport.getSpecificReport.image})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                    </div>
                                    <div className="col s6 valign-wrapper">
                                        <ul>
                                            <li style={{ paddingBottom: "10px" }}>
                                                <strong>Address:</strong> {getSpecificReport.getSpecificReport.address}
                                            </li>
                                            <li style={{ paddingBottom: "10px" }}>
                                                <strong>Reported On:</strong> {getSpecificReport.getSpecificReport.reportedAt}
                                            </li>
                                            <li style={{ paddingBottom: "10px" }}>
                                                <strong>Reported At:</strong> {getSpecificReport.getSpecificReport.reportedOn}
                                            </li>
                                            <li style={{ paddingBottom: "10px" }}>
                                                <strong>Reliability rate:</strong> {getSpecificReport.getSpecificReport.noOfReports}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* </div> */}

                                {/* // ! Map view */}
                                <h6 style={{ margin: "15px 0 10px 0" }}>
                                    Map View:
                                </h6>
                                <div className="col s12">
                                    <MapView latitude={getSpecificReport.getSpecificReport.location.split(" ")[0]} longitude={getSpecificReport.getSpecificReport.location.split(" ")[1]} />
                                </div>
                            </div>

                            <div className="col s4">
                                <h4 style={{ margin: "30px 0 0 0" }}>Similar Reports</h4>
                                <hr className="divider" />
                                {
                                    getSpecificReport.getSpecificReport.similar.length != 0 ? getSpecificReport.getSpecificReport.similar.map((s, ind) => {
                                        return (
                                            <Link>
                                                <div className="card-panel hoverable" style={{ borderRadius: "12px", height: "200px", padding: "10px", cursor: "pointer", backgroundColor: "#f2eefc" }} >
                                                    <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                        <div className="col s10 offset-s1">
                                                            <h4 style={{ color: "#1f2b38", paddingTop: "10px" }} >
                                                                <span
                                                                    style={{
                                                                        backgroundColor: "#7845e0",
                                                                        padding: "3px 12px",
                                                                        borderRadius: "12px",
                                                                        color: "white"
                                                                    }}
                                                                >{ind + 1}</span> Report
                                                            </h4>
                                                            <hr className="divider" />
                                                            <p style={{ color: "#1f2b38" }} className="truncate" >
                                                                {s.address}
                                                            </p>
                                                            <p style={{ paddingTop: "8px", fontSize: "smaller", color: "#1f2b38" }} >
                                                                By {s.userID.name} | Has {s.userID.karma} points!
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    }) : (
                                        <div className="valign-wrapper">
                                            <div>
                                                <Lottie
                                                    options={defaultOptions2}
                                                    height={400}
                                                    width={400}
                                                    isStopped={false}
                                                    isPaused={false}
                                                />
                                                <h5 className="center-align">
                                                    No similar reports!
                                                </h5>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                ) : (
                    <>

                        <Lottie options={defaultOptions}
                            height={400}
                            width={400}
                            isStopped={false}
                            isPaused={false}
                        />
                    </>
                )
            }
        </>
    )
}

export default composey(
    graphql(getSpecificReport, {
        name: "getSpecificReport",
        options: (props) => {
            console.log(props.props.match.params.id)
            return {
                variables: {
                    id: props.props.match.params.id
                }
            }
        }
    })
)(ReportDetails)
