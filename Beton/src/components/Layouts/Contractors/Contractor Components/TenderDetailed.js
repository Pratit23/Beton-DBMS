import React, { useState, useEffect } from 'react'
import { getSpecificTender, myTenders } from '../../../../queries/query'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import Lottie from 'react-lottie';
import loading from '../../../../images/Lottie/newTenders.json'
import TenderMap from './TenderMap';
import Sidenav from '../ContractorSideNav'

const TenderDetailed = (props) => {
    const [currentTab, setCurrentTab] = useState(0);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        window.$(document).ready(function () {
            window.$('.collapsible').collapsible();
        });
    })

    console.log("Props in detailed: ", props)

    return (
        <>
            <div className="row">
                <Sidenav />
                <div className="col s8" style={{ height: '100vh' }}>
                    <div className="demo" id="main" style={{ overflowY: "auto" }} >
                        <div className="row">
                            <div className="col s12" style={{ paddingTop: '40px' }}>
                                <ul className="tabs" style={{ paddingLeft: '40px', borderRadius: '12px', backgroundColor: '#F5F5F5', width: '700px' }}>
                                    <li onClick={() => setCurrentTab(0)} className="tab col s3"><a className="blue-text">All Reports</a></li>
                                    <li onClick={() => setCurrentTab(1)} className="tab col s3"><a className="blue-text">Images</a></li>
                                    <li onClick={() => setCurrentTab(2)} className="tab col s3"><a className="blue-text">Users</a></li>
                                    <li onClick={() => setCurrentTab(3)} className="tab col s3"><a className="blue-text">Map View</a></li>
                                </ul>
                                {
                                    props.getSpecificTender && props.getSpecificTender.getSpecificTender ?
                                        <>
                                            {
                                                currentTab == 0 ?
                                                    <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '150px', paddingRight: '100px', paddingTop: '25px' }}>
                                                        <ul className="collapsible">
                                                            {
                                                                props.getSpecificTender.getSpecificTender.baseReports.map((report, key) => {
                                                                    return (
                                                                        <li key={key}>
                                                                            {
                                                                                report.address.length > 50 ?
                                                                                    <div className="collapsible-header"><i className="material-icons">reorder</i>{(report.address).substring(0, 50)}...</div>
                                                                                    :
                                                                                    <div className="collapsible-header"><i className="material-icons">reorder</i>{report.address}</div>
                                                                            }
                                                                            <div className="collapsible-body">
                                                                                <p><span style={{ color: 'black', fontWeight: 'bold' }}>Address: </span>{report.address}</p>
                                                                                <p><span style={{ color: 'black', fontWeight: 'bold' }}>Location: </span>{report.location}</p>
                                                                                <p><span style={{ color: 'black', fontWeight: 'bold' }}>No. of Reports: </span>{report.noOfReports}</p>
                                                                                <p style={{ color: 'grey', fontSize: '10px' }}>{report.reportedAt} at {report.reportedOn}</p>
                                                                                <div className="chip right-align">
                                                                                    <img src={report.userID.profile} alt="Contact Person" />
                                                                                    {report.userID.name}
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                    : null
                                            }
                                            {
                                                currentTab == 1 ?
                                                    <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '150px', paddingRight: '160px', paddingTop: '25px' }}>
                                                        <div className="row" >
                                                            {
                                                                props.getSpecificTender.getSpecificTender.baseReports.map((report, key) => {
                                                                    return (
                                                                        <div key={key} className="col s3 m3" style={{ paddingBottom: '20px' }}><img src={report.image} alt="" className="materialboxed responsive-img" /></div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    : null
                                            }
                                            {
                                                currentTab == 2 ?
                                                    <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '200px', paddingRight: '180px', paddingTop: '25px' }}>
                                                        {
                                                            props.getSpecificTender.getSpecificTender.baseReports.map((report, key) => {
                                                                return (
                                                                    <div key={key}>
                                                                        {
                                                                            report.similar.map((similar, index) => {
                                                                                console.log("Similar: ", similar)
                                                                                return (
                                                                                    <div key={index} className="chip">
                                                                                        <img src={similar.userID.profile} alt="Contact Person" />
                                                                                        {similar.userID.name}
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    : null
                                            }
                                            {
                                                currentTab == 3 ?
                                                    <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '80px', paddingTop: '25px' }}>
                                                        <TenderMap baseReports={props.getSpecificTender.getSpecificTender.baseReports}/>
                                                    </div>
                                                    : null
                                            }
                                        </> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s4" style={{ height: '100vh' }}>
                    <Lottie options={defaultOptions}
                        height={700}
                        width={400}
                        isStopped={false}
                        isPaused={false}
                        style={{ marginTop: '15vh' }}
                    />
                </div>
            </div>
        </>
    )
}

export default compose(
    graphql(getSpecificTender, {
        name: "getSpecificTender",
        options: (props) => {
            return {
                variables: {
                    id: props.match.params.id
                }
            }
        }
    }),
)(TenderDetailed)
