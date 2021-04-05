import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { allTenders } from '../../../../queries/query';
import Lottie from 'react-lottie';
import sunny from '../../../../images/Lottie/sunny.json';


const TendersTab = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: sunny,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="demo" id="main" style={{ overflowY: "auto" }} >
            <div className="row advHomeTop" style={{ height: "100%" }} >
                <div className="col s8">
                    <h3 style={{ margin: "30px 0 0 30px" }}>
                        All Tenders
                    </h3>
                    <hr className="divider" />
                    {/* drop down here */}
                    <div className="container" style={{ width: "85%" }} >
                        {
                            props.allTenders && !props.allTenders.loading && props.allTenders.allTenders ? (
                                props.allTenders.allTenders.map(u => {
                                    console.log(u)
                                    return (
                                        <div className="card-panel" style={{ borderRadius: "12px", padding: "10px", cursor: "pointer", height: "150px" }}  >
                                            <div className="row valign-wrapper" style={
                                                u.isCompleted == false ? u.isAssigned == false ? {
                                                    margin: "5px -.75rem",
                                                    borderLeft: "3px solid #5f88fe",
                                                    marginLeft: "20px",
                                                    height: "90%"
                                                } : {
                                                    margin: "5px -.75rem",
                                                    borderLeft: "3px solid #feb81b",
                                                    marginLeft: "20px",
                                                    height: "90%"
                                                } : {
                                                    margin: "5px -.75rem",
                                                    borderLeft: "3px solid #fe7e7c",
                                                    marginLeft: "20px",
                                                    height: "90%"
                                                }}
                                            >
                                                <i className="material-icons col s1 center" style={
                                                    u.isCompleted == false ? u.isAssigned == false ? {
                                                        backgroundColor: "#eef5ff",
                                                        color: "#5f88fe",
                                                        padding: "15px 15px",
                                                        width: "max-content",
                                                        borderRadius: "50%",
                                                        fontWeight: "bolder"
                                                    } : {
                                                        backgroundColor: "#fff3da",
                                                        color: "#feb81b",
                                                        padding: "15px 15px",
                                                        width: "max-content",
                                                        borderRadius: "50%",
                                                        fontWeight: "bolder"
                                                    } : {
                                                        backgroundColor: "#ffebea",
                                                        color: "#fe7e7c",
                                                        padding: "15px 15px",
                                                        width: "max-content",
                                                        borderRadius: "50%",
                                                        fontWeight: "bolder"
                                                    }} >check</i>
                                                <div className="col s10">
                                                    <h5 className="black-text">
                                                        {u.nameOfWork}
                                                    </h5>
                                                    <p className="truncate black-text lighten-1" style={{ paddingTop: "8px" }}>
                                                        {u.address}
                                                    </p>
                                                    <p className="grey-text">
                                                        Estimated amount: {u.amount} | {u.bids.length} bids made | Click to know more
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : <p>Loading..</p>
                        }
                    </div>
                </div>
                <div className="col s4 valign-wrapper" style={{ height: "100%" }} >
                    <div style={{ width: "max-content" }}>
                        <h4>
                            Click any contact to know more about the tenders.
                        </h4>
                        <Lottie options={defaultOptions}
                            height={400}
                            width={400}
                            isStopped={false}
                            isPaused={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(allTenders, { name: "allTenders" })
)(TendersTab)
