import React from 'react'
import Sidenav from './Sidenav'
import MainMap from '../Maps/MainMap'

const Homepage = () => {
    return (
        <div>
            <div className="row">
                <div className="col s3" style={{ height: "100vh", backgroundColor: "black" }}>
                    <Sidenav />
                </div>
                <div className="col s9" style={{ padding: "0" }}>
                    <MainMap />
                </div>
            </div>
        </div>
    )
}

export default Homepage