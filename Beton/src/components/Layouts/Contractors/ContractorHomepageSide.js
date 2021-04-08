import React, { useState, useEffect } from 'react'
import QuickInfoCard from '../../Cards/QuickInfoCard';
import ContractorDonut from './Contractor Components/ContractorDonut';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { allBaseReports, availableTenders, myTenders } from '../../../queries/query';
import HomeCards from '../../Cards/HomeCards';
import RecentList from './Contractor Components/RecentList'


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
                        console.log(props),
                        props.allBaseReports && !props.allBaseReports.loading && props.allBaseReports.allBaseReports && props.availableTenders && !props.availableTenders.loading && props.availableTenders.availableTenders && props.myTenders && props.myTenders.myTenders ?
                            <ContractorDonut values={[props.myTenders.myTenders.length, props.availableTenders.availableTenders.length, props.allBaseReports.allBaseReports.length]} /> :
                            <p>Loading chart</p>
                    }
                    {/* Recent users */}
                    <h3 style={{ margin: "30px 0 0 30px" }}>Recent Tenders</h3>
                    <hr className="divider" />
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
