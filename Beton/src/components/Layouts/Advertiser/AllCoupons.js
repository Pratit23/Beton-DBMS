import React, { useState } from 'react';
import AdvSidenav from './AdvSidenav';
import { graphql } from 'react-apollo'
import { decryptAdvertiser } from '../../../queries/query';
import { flowRight as compose } from 'lodash'
import CouponTable from './CouponTable';
import { Redirect } from 'react-router';
import noResult from '../../../images/Lottie/noCoupons.json';
import Lottie from 'react-lottie';



const AllCoupons = (props) => {
    const [toggle, setToggle] = useState(false);
    if ((!localStorage.getItem('token')) || (props && props.decrypt && props.decrypt.loading == false && (!props.decrypt.decrypt || !props.decrypt.decrypt.id))) return <Redirect to='/login' />

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: noResult,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    console.log(props)
    return (
        <div>
            <AdvSidenav />
            <div className="demo" id="main" style={{ overflowY: "visible" }}  >
                <div className="row">
                    <div className="col s12">
                        <h3 style={{ margin: "30px 0 0 30px" }}>All Coupons</h3>
                        <hr className="divider" />
                    </div>
                    <div className="col s12">
                        {
                            props.decryptAdvertiser && !props.decryptAdvertiser.loading && props.decryptAdvertiser.decryptAdvertiser && props.decryptAdvertiser.decryptAdvertiser.coupons.length != 0 ? (
                                <>
                                    <div className="col s12" >
                                    </div>
                                    <CouponTable rows={[...props.decryptAdvertiser.decryptAdvertiser.coupons]} />
                                </>
                            ) :
                                <>
                                    <Lottie options={defaultOptions}
                                        height={400}
                                        width={400}
                                        isStopped={false}
                                        isPaused={false}

                                    />
                                    <h4 className="center">
                                        Uh-oh. You haven't added any coupons yet!
                                    </h4>
                                </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default compose(
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
)(AllCoupons)
