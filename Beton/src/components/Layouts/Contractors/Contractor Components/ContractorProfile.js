import React, { useState, useEffect } from 'react'
import Sidenav from '../ContractorSideNav'
import CoverImg from '../../../../images/instructionCover.png'
import ProfileImg from '../../../../images/two.png'
import { decryptContractor } from '../../../../queries/query';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import Lottie from 'react-lottie';
import loading from '../../../../images/Lottie/contractProfile.json'


const ContractorProfile = (props) => {

    useEffect(() => {
        console.log("Props in profile contractor: ", props)
    }, [props.decryptContractor])

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
                {
                    props.decryptContractor && props.decryptContractor.loading == false && props.decryptContractor.decryptContractor ? (
                        <>
                            <div className="col s8" style={{ height: '100vh', backgroundColor: 'rgb(35, 37, 47)' }}>
                                <div className="demo" id="main" style={{ overflowY: "hidden" }} >
                                    <div className="row">
                                        <div className="col s12" style={{ height: '40vh', position: 'relative', backgroundImage: `url(${CoverImg})`, backgroundSize: 'cover' }}>
                                            <img style={{ height: '150px', width: '150px', borderRadius: '50%', position: 'absolute', top: 'calc(50% - 75px)', left: 'calc(50% - 75px)' }} src={props.decryptContractor.decryptContractor.profile} id='img1' alt="Image not loading" />
                                        </div>
                                        <div className="col s12" style={{ height: '60vh' }}>
                                            <div style={{ height: '100%', width: '100%', paddingLeft: '40px' }}>
                                                {
                                                    props.decryptContractor && props.decryptContractor.loading == false && props.decryptContractor.decryptContractor ?
                                                        <>
                                                            <h2 style={{ paddingTop: '20px' }}>{props.decryptContractor.decryptContractor.name}</h2>
                                                        </> : <h2>Loading...</h2>
                                                }
                                                <br />
                                                {

                                                    props.decryptContractor && props.decryptContractor.loading == false && props.decryptContractor.decryptContractor ?
                                                        <>
                                                            {
                                                                props.decryptContractor.decryptContractor.isVerified ?
                                                                    <p className='center-align white-text' style={{ paddingTop: '10px', backgroundColor: '#2979ff', width: '30%', borderRadius: '24px', paddingBottom: '10px' }}>Verified</p> :
                                                                    <p className='center-align white-text' style={{ paddingTop: '10px', backgroundColor: '#2979ff', width: '30%', borderRadius: '24px', paddingBottom: '10px' }}>Not Verified</p>
                                                            }
                                                        </>
                                                        :
                                                        <p className='center-align white-text' style={{ paddingTop: '10px', backgroundColor: '#2979ff', width: '30%', borderRadius: '24px', paddingBottom: '10px' }}>Loading..</p>
                                                }
                                                <div className='row center-align' style={{ marginTop: '60px', paddingRight: '50px', marginRight: '40px', borderRadius: '24px', backgroundColor: '#F5F5F5', paddingTop: '5%', paddingBottom: '5%', paddingRight: '10%' }}>
                                                    <div className='col s4'>
                                                        <p>Tenders</p>
                                                        <p className='black-text' style={{ fontWeight: 'bold' }}>10</p>
                                                    </div>
                                                    <div className='col s4'>
                                                        <p>Completed</p>
                                                        <p className='black-text' style={{ fontWeight: 'bold' }}>30</p>
                                                    </div>
                                                    <div className='col s4'>
                                                        <p>Active</p>
                                                        <p className='black-text' style={{ fontWeight: 'bold' }}>40</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s4" style={{ height: '100vh', borderRadius: '24px' }}>
                                <div className="row">
                                    <div className='col s12'>
                                        <Lottie
                                            options={defaultOptions}
                                            height={400}
                                            width={400}
                                            isStopped={false}
                                            isPaused={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null
                }
            </div>
        </div>
    )
}

export default compose(
    graphql(decryptContractor, {
        name: "decryptContractor",
        options: () => {
            let temp = localStorage.getItem("token") || "";
            return {
                variables: {
                    token: temp
                }
            }
        }
    })
)(ContractorProfile)


