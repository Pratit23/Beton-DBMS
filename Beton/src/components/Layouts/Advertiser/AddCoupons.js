import React, { useState } from 'react'
import UploadCSV from '../../Buttons/UploadCSV'
import AdvSidenav from './AdvSidenav';
import CouponCover from '../../../images/coupons.png';
import instructionCover from '../../../images/instructionCover.jpg';
import FormatCover from '../../../images/FormatCover.png';
import { graphql } from 'react-apollo'
import { decryptAdvertiser, addCoupon } from '../../../queries/query';
import { flowRight as compose } from 'lodash'
import M from 'materialize-css';

const AddCoupons = (props) => {

    const [coupon, setCoupon] = useState([])
    const handleSubmit = async () => {
        console.log("Coupons", coupon);
        if(!coupon.data || coupon.data.length == 0){
            M.toast({ html: "Hold on mate! Let's have the CSV file for processing!" })
            return;
        }
        if(props.decryptAdvertiser && !props.decryptAdvertiser.loading && props.decryptAdvertiser.decryptAdvertiser){
            let res = await props.addCoupon({
                variables: {
                    coupons: coupon.data,
                    advertiserID: props.decryptAdvertiser.decryptAdvertiser.id
                }
            })
            if (res && res.data && res.data.addCoupon){
                M.toast({ html: `All coupons added! Now you can go make an advertisment` });
                props.history.push("/advertiser/homepage");
            }else{
                M.toast({ html: `Something wasn't right. Couldn't process your request :/` });
            }
        }else{
            M.toast({ html: "Okay okay. Easy now. You're moving a bit too quick. Authenticating..." })
        }
    }
    return (
        <div>
            <AdvSidenav />
            <div className="demo" id="main" style={{ overflowY: "visible" }} >
                <div className="row" style={{
                    height: "100%",
                    marginBottom: "0"
                }} >
                    <div className="col s12 m4 l6" style={{
                        backgroundImage: `url(${CouponCover})`,
                        height: "100%",
                    }} ></div>
                    <div className="col s12 m8 l6">
                        <div className="col s12">
                            <h3 style={{ margin: "30px 0 0 30px" }}>Add Coupons</h3>
                            <hr className="divider" />
                        </div>

                        {/* instruction box here */}
                        <div className="col s12 valign-wrapper hide-on-med-and-down" style={{
                            backgroundImage: `url(${instructionCover})`,
                            height: "150px",
                            borderRadius: "20px"
                        }} >
                            <p className="white-text col s4 center-align" style={{
                                display: "inline-block",
                                whiteSpace: "nowrap"
                            }} >
                                1. Add CSV <br /><a href={FormatCover} target="__blank">(Check format)</a>
                            </p>
                            
                            <p className="white-text col s4 center-align" style={{
                                display: "inline-block",
                                whiteSpace: "nowrap"
                            }} >
                                2. All pass?
                            </p>
                            <p className="white-text col s4 center-align" style={{
                                display: "inline-block",
                                whiteSpace: "nowrap"
                            }} >
                                3. Submit
                            </p>
                        </div>
                        <UploadCSV setState={setCoupon} />
                        <div className="col s12" style={{ textAlign: "center", marginTop: "20px" }}>
                            <button className="btn orange" type="submit" onClick={handleSubmit} name="action" style={{ borderRadius: "18px" }} >Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(addCoupon, { name: "addCoupon" }),
    graphql(decryptAdvertiser, {
        name: "decryptAdvertiser",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    token: temp
                }
            }
        }
    })   
)(AddCoupons)
