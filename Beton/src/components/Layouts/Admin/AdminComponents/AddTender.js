import React from 'react'
import Sidenav from '../AdminSidenav'
import { allBaseReports } from '../../../../queries/query'
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

function AddTender(props) {
    return (
        <div>
            <Sidenav />
            <div className="row">
                <div className="col s8" style={{ height: '100vh' }}>
                    <div className="demo" id="main" style={{ overflowY: "auto" }} >
                    </div>
                </div>
                <div className="col s4" style={{ height: '100vh' }}>
                    <div className="card-panel col s10 offset-s1" style={{ borderRadius: "24px", padding: "10px" }} >
                        <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                            </div>
                            <div className="col s9">
                                <h5 className="black-text">DH-15</h5>
                                <p className="grey-text" style={{ paddingTop: "8px" }} >50,00,000 | May 2021 | Click to know more</p>
                            </div>
                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }}>➜</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(allBaseReports, {
        name: "allBaseReports",
    })
)(AddTender)
