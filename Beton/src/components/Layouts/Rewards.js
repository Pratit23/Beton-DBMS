import React, { useState, useEffect } from 'react'
import Sidenav from './Sidenav'
import CoverImg from '../../images/instructionCover.png'
import ProfileImg from '../../images/two.png'
import { decrypt } from '../../queries/query';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import Lottie from 'react-lottie';
import lonely from '../../images/Lottie/lonely.json'


const Rewards = (props) => {

    useEffect(() => {
        console.log("Props in profile: ", props)
    }, [props.decrypt])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lonely,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Sidenav />
            <div className="row">
                <div className="col s8" style={{ height: '100vh', backgroundColor: 'rgb(35, 37, 47)' }}>
                    <div className="demo" id="main" style={{ overflowY: "hidden" }} >
                        <div className="col s12">
                            <h2 style={{ padding: '20px' }}>Your Coupons</h2>
                            <hr />
                            {
                                props.decrypt && props.decrypt.decrypt && props.decrypt.decrypt.coupons.length > 0 ?
                                    <>
                                        {
                                            props.decrypt.decrypt.coupons.map((coupon, key) => {
                                                console.log(coupon)
                                                return (
                                                    <div className="card-panel hoverable" style={{ borderRadius: "24px", padding: "10px", cursor: "pointer" }} >
                                                        <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url('https://f1.allesedv.com/64/${coupon.advertiserID.website}')`, backgroundSize: "unset", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">
                                                                    {coupon.name}
                                                                </h5>
                                                                <div className="chip">
                                                                    {coupon.advertiserID.company}
                                                                </div>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                    Valid for {coupon.validity} month | ₹{coupon.amount}
                                                                </p>
                                                            </div>
                                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                                ➜
                                                            </div>
                                                        </div>
                                                    </div>
                                                )

                                            })
                                        }
                                    </> :
                                    <>
                                        <Lottie
                                            options={defaultOptions}
                                            height={400}
                                            width={500}
                                            isStopped={false}
                                            isPaused={false}
                                        />
                                        <p className="center-align">Keep on reporting and you'll earn rewards</p>
                                    </>
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                </div>
                <div className="col s4" style={{ height: '100vh', borderRadius: '24px' }}>

                </div>
            </div>
        </div>
    )
}

export default compose(
    graphql(decrypt, {
        name: "decrypt",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    token: temp
                }
            }
        }
    })
)(Rewards)


