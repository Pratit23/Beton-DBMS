import React, { useState, useEffect } from 'react'
import Sidenav from './Sidenav'
import CoverImg from '../../images/instructionCover.png'
import ProfileImg from '../../images/two.png'
import { decrypt } from '../../queries/query';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import Lottie from 'react-lottie';
import loading from '../../images/Lottie/loading.json'


const Rewards = (props) => {

    useEffect(() => {
        console.log("Props in profile: ", props)
    }, [props.decrypt])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
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
                            <h1 style={{ padding: '20px' }}>Your Coupons</h1>

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
)(Rewards)


