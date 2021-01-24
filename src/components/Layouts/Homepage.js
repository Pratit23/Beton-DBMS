import React from 'react'
import Sidenav from './Sidenav'
import RefreshHome from './RefreshHome'

const Homepage = () => {
    return (
        <div>
            <div className="row" style={{ height: "100%" }}>
                <div className="col s3" style={{ height: "100%", backgroundColor: "black" }}>
                    <Sidenav />
                </div>
                <div className="col s9" style={{ padding: "2px", height: "100%" }}>
                    <RefreshHome />
                </div>
            </div>
        </div>
    )
}

export default Homepage