import React, { useState, useEffect } from 'react'
import { getSpecificTender, myTenders, addBids, decryptContractor } from '../../../../queries/query'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import Lottie from 'react-lottie';
import loading from '../../../../images/Lottie/newTenders.json'
import TenderMap from './TenderMap';
import Sidenav from '../ContractorSideNav'
import GeneralInput from '../../../Buttons/GeneralInput'
import M from 'materialize-css'

var formatter = null

const TenderDetailed = (props) => {

    const [currentTab, setCurrentTab] = useState(0);
    const [quoteSubmitted, setQuoteSubmitted] = useState(false)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const handleSubmit = async () => {
        var amount = document.getElementById('tender-quote').value
        var bidedAt = new Date().toDateString()
        var bidedOn = new Date().toLocaleString().split(", ")[1]
        var contractorId = props.decryptContractor.decryptContractor.id
        var tenderId = props.match.params.id

        let res = await props.addBids({
            variables: {
                amount,
                bidedAt,
                bidedOn,
                contractorId,
                tenderId
            }
        })

        if (res.data.addBids) {
            M.toast({ html: "Quotation submitted successfully" });
            setQuoteSubmitted(true)
        }
        else {
            M.toast({ html: "Something went wrong, please try again!" })
        }
    }

    useEffect(() => {
        window.$(document).ready(function () {
            window.$('.collapsible').collapsible();
        });

        formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'INR',

            // These options are needed to round to whole numbers if that's what you want.
            minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
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
                                                    <div className="row" style={{ height: '60vh', width: '100%', paddingLeft: '150px', paddingRight: '100px', paddingTop: '25px', overflowY: 'auto' }}>
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
                                                    <div className="row" style={{ height: '60vh', width: '100%', paddingLeft: '150px', paddingRight: '160px', paddingTop: '25px', overflowY: 'auto' }}>
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
                                                    <div className="row" style={{ height: '60vh', width: '100%', paddingLeft: '200px', paddingRight: '180px', paddingTop: '25px', overflowY: 'auto' }}>
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
                                                    <div className="row" style={{ height: '60vh', width: '100%', paddingLeft: '80px', paddingTop: '25px', overflowY: 'auto' }}>
                                                        <TenderMap baseReports={props.getSpecificTender.getSpecificTender.baseReports} />
                                                    </div>
                                                    : null
                                            }
                                        </> : null
                                }
                                {
                                    props.getSpecificTender && props.getSpecificTender.getSpecificTender && props.getSpecificTender.getSpecificTender.isAssigned != true ?
                                        <div className="row" style={{ marginLeft: '10%', marginRight: '10%' }}>
                                            <div className="col s12" style={{ paddingTop: '5vh' }}>
                                                <div className="card blue-grey darken-1" style={{ borderRadius: '24px', height: 'max-content' }}>
                                                    <div className="card-content white-text" style={{ paddingBottom: '10px 15px' }}>
                                                        <div className="row" style={{ marginBottom: '0' }}>
                                                            <div className="col s5" style={{ borderRight: '2px solid grey', height: '115px' }}>
                                                                <span className="card-title" >Quote price</span>
                                                                <div style={{ width: '80%' }}>
                                                                    <GeneralInput style={{ width: '30%' }} placeholder="Amount in ₹" classy="" type="text" id="tender-quote" />
                                                                </div>
                                                            </div>
                                                            <div className="col s7" style={{ paddingLeft: '30px' }}>
                                                                <p style={{ paddingBottom: '20px' }}>Please check the details carefully before submitting a quotation</p>
                                                                <div className="row">
                                                                    <div className="col s6 center-align">
                                                                        {
                                                                            props.getSpecificTender && props.getSpecificTender.getSpecificTender ?
                                                                                <p className="grey-text" style={{ paddingBottom: '5px' }}>Est. cost: {formatter.format(props.getSpecificTender.getSpecificTender.amount)}</p>
                                                                                :
                                                                                <p style={{ paddingBottom: '5px' }}>Loading amount..</p>
                                                                        }
                                                                    </div>
                                                                    <div className="col s6">
                                                                        <div onClick={() => handleSubmit()} className="btn blue" style={{ borderRadius: '24px' }}>Quote</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : null
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
    graphql(addBids, { name: "addBids" }),
    graphql(decryptContractor, {
        name: "decryptContractor",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    token: temp
                }
            }
        }
    }),
)(TenderDetailed)

