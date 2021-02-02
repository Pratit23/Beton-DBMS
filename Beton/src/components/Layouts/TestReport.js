import React from 'react'
import Sidenav from '../Layouts/Sidenav'
import DropHere from '../Buttons/DropHere';
import ProgressCard from '../Cards/ProgressCard';
import UploadButton from '../Buttons/UploadButton'

const TestReport = (props) => {

    // pass this function to the button's onclick for some spicy wet magic
    const nextAnimation = () => {
        document.querySelectorAll('.tabbar li a')[1].dispatchEvent(new CustomEvent('click'))
    }

    return (
        <div>
            <Sidenav />
            <div id="main" className="row" style={{ marginBottom: "0", height: "100%" }} >
                <div className="col s12 m7">
                    <div className="section center-align" style={{ paddingTop: '50px' }}>
                        <ProgressCard one="active" two="" three="" props={props} style1="81.133px" style2="81.133px"/>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <DropHere/>
                        <UploadButton action={nextAnimation} btnText={"Upload"} />
                    </div>
                </div>
                <div className="col m5 hide-on-small-only" style={{ overflow: "hidden", height: "100%" }} >
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
