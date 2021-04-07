import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as composey } from 'lodash';
import { getSpecificTender } from '../../../../queries/query';
import SpecificTenderMap from './SpecificTenderMap';
import Lottie from 'react-lottie';
import loading from '../../../../images/Lottie/loading.json'
import allocate from '../../../../images/Lottie/allocate.json'
import noResults from '../../../../images/Lottie/noResults.json'
import BidGraph from './BidGraph';


const TenderDetail = ({ props, getSpecificTender }) => {
    console.log(props, getSpecificTender);
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
        animationData: allocate,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: noResults,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    function compare_amount(a, b) {
        // a should come before b in the sorted order
        if (a.amount < b.amount) {
            return -1;
            // a should come after b in the sorted order
        } else if (a.amount > b.amount) {
            return 1;
            // a and b are the same
        } else {
            return 0;
        }
    }
    return (
        <>
            {
                !getSpecificTender.loading && getSpecificTender.getSpecificTender ? (
                    <div className="demo" id="main" style={{ overflowY: "auto" }}>
                        <div className="row advHomeTop" style={{ height: "100%" }} >
                            <div className="col s8">
                                <h4 style={{ margin: "30px 0 0 0" }}>Tender Statistics</h4>
                                <hr className="divider" />
                                <div className="col s6">
                                    <SpecificTenderMap coords={getSpecificTender.getSpecificTender.encoded} source={getSpecificTender.getSpecificTender.source} />
                                </div>
                                <div className="col s6">
                                    <p style={{ paddingTop: "20px" }} >
                                        <strong>Name Of Work:</strong> {getSpecificTender.getSpecificTender.nameOfWork}
                                    </p>
                                    <p style={{ paddingTop: "20px" }} >
                                        <strong>Quoted Inital Amount:</strong> Rs. {getSpecificTender.getSpecificTender.amount}/-
                                    </p>
                                    <p style={{ paddingTop: "20px" }} >
                                        <strong>End date:</strong> {getSpecificTender.getSpecificTender.endDate}
                                    </p>
                                    <p style={{ paddingTop: "20px" }} >
                                        <strong>Address:</strong> {getSpecificTender.getSpecificTender.address}
                                    </p>
                                </div>
                                <div className="col s12">
                                    <br />
                                    <h4 style={{ margin: "30px 0 0 0" }}>Quotations representation</h4>
                                    <hr className="divider" />
                                    <div className="col s10 offset-s1">
                                        <BidGraph label={getSpecificTender.getSpecificTender.bids.map(b => b.contractorId.name)} datae={getSpecificTender.getSpecificTender.bids.map(b => b.amount)} />
                                    </div>
                                </div>
                                <div className="col s12">
                                    <br />
                                    <h4 style={{ margin: "30px 0 0 0" }}>Assigned to</h4>
                                    <hr className="divider" />
                                    {
                                        getSpecificTender.getSpecificTender.isAssigned == true ? (
                                            <p>Assigned</p>
                                        ) : (
                                            <>
                                                <h6 className="center-align">
                                                    Haven't assigned the tender to any contractor yet!
                                                </h6>
                                                <Lottie
                                                    options={defaultOptions2}
                                                    height={400}
                                                    width={400}
                                                    isStopped={false}
                                                    isPaused={false}
                                                />
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col s4">
                                <h4 style={{ margin: "30px 0 0 0" }}>Quotations by: {getSpecificTender.getSpecificTender.bids.length} contractor </h4>
                                <hr className="divider" />
                                {
                                    getSpecificTender.getSpecificTender.bids.length != 0 ? (
                                        getSpecificTender.getSpecificTender.bids.sort(compare_amount).map((g) => {
                                            return (
                                                <div className="card-panel" style={{ borderRadius: "12px", padding: "10px", cursor: "pointer" }}>
                                                    <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                        <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${g.contractorId.profile})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                        </div>
                                                        <div className="col s9">
                                                            <h5 className="black-text">
                                                                {g.contractorId.name}
                                                            </h5>
                                                            <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                Bided amount: Rs. {g.amount}/-
                                                            </p>
                                                            <p className="grey-text lighten-1" style={{ fontSize: "13px" }} >
                                                                {g.contractorId.email} | {g.contractorId.bidsMade.length} bids done in career
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="divider" style={{ marginTop: "20px" }} />
                                                    <div className="card-action center-align" style={{ marginTop: "10px" }}>
                                                        {
                                                            getSpecificTender.getSpecificTender.isAssigned == false ? (
                                                                <span className="btn blue" style={{ borderRadius: "24px" }} >Assign</span>
                                                            ) :
                                                                <span className="btn grey" style={{ borderRadius: "24px", cursor: "not-allowed" }} >Already assigned</span>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : <Lottie
                                        options={defaultOptions3}
                                        height={400}
                                        width={400}
                                        isStopped={false}
                                        isPaused={false}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                        isStopped={false}
                        isPaused={false}
                    />
                )
            }
        </>
    )
}

export default composey(
    graphql(getSpecificTender, {
        name: "getSpecificTender",
        options: (props) => {
            return {
                variables: {
                    id: props.props.match.params.tid
                }
            }
        }
    })
)(TenderDetail)
