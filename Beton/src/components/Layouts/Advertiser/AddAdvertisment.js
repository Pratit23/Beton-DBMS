import React, { useState } from 'react'
import AdvSidenav from './AdvSidenav';
import AddAdvCover from '../../../images/AddAdvCover.png';
import FormatCover from '../../../images/FormatCover2.png';
import GeneralInput from '../../Buttons/GeneralInput';
import URL from '../../Buttons/URL';

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
                    }} >
                    </div>
                    <div className="col s12 m8 l6">
                        <div className="col s12">
                            <h3 style={{ margin: "30px 0 0 30px" }}>Add an advertisment</h3>
                            <hr className="divider" />
                        </div>

                        {/* instruction box here */}
                        <div className="col s12 valign-wrapper hide-on-med-and-down" style={{
                            backgroundImage: `url(${FormatCover})`,
                            height: "150px",
                            borderRadius: "20px",
                            marginBottom: "30px"
                        }} >
                            <p className="white-text col s4 center-align" style={{
                                display: "inline-block",
                                whiteSpace: "nowrap"
                            }} >
                                1. Fill the form
                            </p>
                            
                            <p className="white-text col s4 center-align" style={{
                                display: "inline-block",
                                whiteSpace: "nowrap"
                            }} >
                                2. Make sure you've added<br/> coupons from this account 
                            </p>
                            <p className="white-text col s4 center-align" style={{
                                display: "inline-block",
                                whiteSpace: "nowrap"
                            }} >
                                3. Submit
                            </p>
                        </div>
                        
                        <div className="secretAdv">
                            {/* title */}
                            <GeneralInput placeholder="Catchy line for your ad" classy="col s10 offset-s1 m9 offset-m2 l6 offset-l3" type="text" id="add-title" />
                            
                            {/* link */}
                            <URL classy="col s10 offset-s1 m9 offset-m2 l6 offset-l3"/>

                            {/* image */}
                            <div className="file-field input-field col s10 offset-s1 m9 offset-m2 l6 offset-l3">
                                <div className="btn">
                                    <span>File</span>
                                    <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" />
                                </div>
                            </div>

                        </div>

                        <div className="col s12" style={{ textAlign: "center", marginTop: "20px" }}>
                            <button className="btn pink" type="submit" name="action" style={{ borderRadius: "18px" }} >Submit
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
