import React, { useState, useEffect } from 'react'
import QuickInfoCard from '../../Cards/QuickInfoCard';
import ContractorDonut from './Contractor Components/ContractorDonut';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { allBaseReports, availableTenders, myTenders } from '../../../queries/query';
import HomeCards from '../../Cards/HomeCards';
import RecentList from './Contractor Components/RecentList'
import { Link } from 'react-router-dom';


const ContractorHomepageSide = (props) => {

    console.log("Props in contractor homepage side", props)


    return (
        <div className="demo" id="main" style={{ overflowY: "auto" }} >
            <div className="row advHomeTop">
                <div className="col s12 m8">
                    {
                        props.myTenders && !props.myTenders.loading && props.myTenders.myTenders && props.myTenders.myTenders.length != 0 ? (
                            <QuickInfoCard color="#c33c29" textColor="#fff" text="Active Tenders" value={props.myTenders.myTenders.length} />
                        ) :
                            <QuickInfoCard color="#c33c29" textColor="#fff" text="Active Tenders" value="0" />
                    }
                    {

                        props.availableTenders && !props.availableTenders.loading && props.availableTenders.availableTenders && props.availableTenders.availableTenders.length != 0 ? (
                            <QuickInfoCard color="#75a29e" textColor="#fff" text="Available Tenders" value={props.availableTenders.availableTenders.length} />
                        ) :
                            <QuickInfoCard color="#75a29e" textColor="#fff" text="Available Tenders" />
                    }
                    {
                        props.allBaseReports && !props.allBaseReports.loading && props.allBaseReports.allBaseReports && props.allBaseReports.allBaseReports.length != 0 ? (
                            <QuickInfoCard color="#f7f1ec" textColor="#000" text="All Reports" value={props.allBaseReports.allBaseReports.length} />
                        ) :
                            <QuickInfoCard color="#f7f1ec" textColor="#000" text="All Reports" />
                    }
                    {/* total */}
                    <div className="col s12">
                        <h3>Total Activity</h3>
                        <HomeCards />
                    </div>
                </div>
                <div className="col s12 m4 advStatsInfographics">
                    <h3 style={{ margin: "30px 0 0 30px" }}>Statistics</h3>
                    <hr className="divider" />
                    {
                        props.allBaseReports && !props.allBaseReports.loading && props.allBaseReports.allBaseReports && props.availableTenders && !props.availableTenders.loading && props.availableTenders.availableTenders && props.myTenders && props.myTenders.myTenders ?
                            <ContractorDonut values={[props.myTenders.myTenders.length, props.availableTenders.availableTenders.length, props.allBaseReports.allBaseReports.length]} /> :
                            <p>Loading chart</p>
                    }
                    {/* Recent users */}
                    <h3 style={{ margin: "30px 0 0 30px" }}>Recent Tenders</h3>
                    <hr className="divider" />
                    {
                        props.myTenders && !props.myTenders.loading && props.myTenders.myTenders && props.myTenders.myTenders.length != 0 ?
                            (
                                props.myTenders.myTenders.map((u) => {
                                    console.log(u)
                                    return (
                                        <Link to={`/contractor/tenders`}>
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
                                        </Link>
                                    )
                                })
                            ) : (
                                <h6 className="center-align">No active tenders assigned to you! :/</h6>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(availableTenders, {
        name: "availableTenders",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    id: temp
                }
            }
        }
    }),
    graphql(myTenders, {
        name: "myTenders",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    id: temp
                }
            }
        }
    }),
    graphql(allBaseReports, {
        name: "allBaseReports",
    }),
)(ContractorHomepageSide)
