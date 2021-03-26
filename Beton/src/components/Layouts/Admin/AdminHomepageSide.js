import React from 'react'
import QuickInfoCard from '../../Cards/QuickInfoCard';
import AdminDonut from '../../Charts/AdminDonut';
import RecentUser from './HomepageComponents/RecentUser';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { allAdvertisers, allReports, users } from '../../../queries/query';
import control from './images/control.png';
import HomeCards from '../../Cards/HomeCards';


const AdminHomepageSide = (props) => {
    return (
        <div className="demo" id="main" style={{ overflowY: "auto" }} >
            <div className="row advHomeTop">
                <div className="col s12 m8">
                    {
                        props.users && !props.users.loading && props.users.users ? (
                            <QuickInfoCard color="#c33c29" textColor="#fff" text="All Users" value={props.users.users.length} />
                        ) :
                            <QuickInfoCard color="#c33c29" textColor="#fff" text="All Users" value="0" />
                    }
                    <QuickInfoCard color="#e5be90" textColor="#000" text="All Contractors" />
                    {
                        props.allAdvertisers && !props.allAdvertisers.loading && props.allAdvertisers.allAdvertisers ? (
                            <QuickInfoCard color="#f7f1ec" textColor="#000" text="All Advertisers" value={props.allAdvertisers.allAdvertisers.length} />
                        ) :
                            <QuickInfoCard color="#f7f1ec" textColor="#000" text="All Advertisers" />
                    }
                    {
                        props.allReports && !props.allReports.loading && props.allReports.allReports ? (
                            <QuickInfoCard color="#75a29e" textColor="#fff" text="All Reports" value={props.allReports.allReports.length} />
                        ) :
                            <QuickInfoCard color="#75a29e" textColor="#fff" text="All Reports" />
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
                    <AdminDonut values={[12, 7, 5, 2]} />

                    {/* Recent users */}
                    <h3 style={{ margin: "30px 0 0 30px" }}>Recent Users</h3>
                    <hr className="divider" />
                    <RecentUser />
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(users, { name: "users" }),
    graphql(allAdvertisers, { name: "allAdvertisers" }),
    graphql(allReports, { name: "allReports" }),
)(AdminHomepageSide)
