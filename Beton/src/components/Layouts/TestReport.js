import React from 'react'
import Sidenav from '../Layouts/Sidenav'
import DropHere from '../Buttons/DropHere'

const TestReport = () => {
    return (
        <div>
            <Sidenav />
            <div id="main" className="row">
                <div className="col s7">
                    <div className="section center-align" style={{ paddingTop: '50px' }}>
                        <h2>Add the animation here</h2>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <DropHere/>
                    </div>
                </div>
                <div className="col s5" style={{ overflow: "hidden" }} >
                    <img src='https://cdn.dribbble.com/users/1784672/screenshots/14316821/media/e37528e940f4e43d0425f009143d060f.png'
                        alt="Select an image" 
                        style={{
                            height: "100%"
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default TestReport
