import React from 'react'
import QuickInfoCard from '../../Cards/QuickInfoCard';
import AdvDonut from '../../Charts/AdvDonut'


const AdminHomepageSide = () => {
    return (
        <div className="demo" id="main" style={{ overflowY: "auto" }} >
            <div className="row advHomeTop">
                <div className="col s12 m8">
                    <QuickInfoCard color="#c33c29" textColor="#fff" />
                    <QuickInfoCard color="#e5be90" textColor="#000" />
                    <QuickInfoCard color="#f7f1ec" textColor="#000" />
                    <QuickInfoCard color="#75a29e" textColor="#fff" />
                </div>
                <div className="col s12 m4 advStatsInfographics">
                    <h3 style={{ margin: "30px 0 0 30px" }}>Statistics</h3>
                    <hr className="divider" />
                    <AdvDonut values={[12, 7, 5, 2]} />
                </div>
            </div>
        </div>
    )
}

export default AdminHomepageSide
