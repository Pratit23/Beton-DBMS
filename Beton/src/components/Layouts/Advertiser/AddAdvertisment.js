import React, { useState } from 'react'
import AdvSidenav from './AdvSidenav';
import AddAdvCover from '../../../images/AddAdvCover.png';

const AddAdvertisment = () => {

    const [coupon, setCoupon] = useState([])

    return (
        <div>
            <AdvSidenav />
            <div className="demo" id="main" style={{ overflowY: "visible" }} >
                <div className="row" style={{
                    height: "100%",
                    marginBottom: "0"
                }} >
                    <div className="col s12 m4 l6" style={{
                        backgroundImage: `url(${AddAdvCover})`,
                        height: "100%",
                    }} ></div>
                    <div className="col s12 m8 l6">
                        <div className="col s12">
                            <h3 style={{ margin: "30px 0 0 30px" }}>Add an advertisment</h3>
                            <hr className="divider" />
                        </div>

                        <div className="col s12" style={{ textAlign: "center", marginTop: "20px" }}>
                            <button className="btn orange" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAdvertisment
