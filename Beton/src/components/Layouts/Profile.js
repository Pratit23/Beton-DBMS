import React, { useState, useEffect } from 'react'
import Sidenav from './Sidenav'
import CoverImg from '../../images/instructionCover.png'
import ProfileImg from '../../images/two.png'
import { decrypt } from '../../queries/query';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import Lottie from 'react-lottie';
import loading from '../../images/Lottie/loading.json'


const Profile = (props) => {

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
                {
                    props.decrypt && props.decrypt.loading == false && props.decrypt.decrypt ? (
                        <>
                            <div className="col s8" style={{ height: '100vh', backgroundColor: 'rgb(35, 37, 47)' }}>
                                <div className="demo" id="main" style={{ overflowY: "hidden" }} >
                                    <div className="row">
                                        <div className="col s12" style={{ height: '40vh', position: 'relative', backgroundImage: `url(${CoverImg})`, backgroundSize: 'cover' }}>
                                            <img style={{ height: '150px', width: '150px', borderRadius: '50%', position: 'absolute', top: 'calc(50% - 75px)', left: 'calc(50% - 75px)' }} src={props.decrypt.decrypt.profile} id='img1' alt="Image not loading" />
                                        </div>
                                        <div className="col s12" style={{ height: '60vh' }}>
                                            <div style={{ height: '100%', width: '100%', paddingLeft: '40px' }}>
                                                {
                                                    props.decrypt && props.decrypt.loading == false && props.decrypt.decrypt ?
                                                        <>
                                                            <h2 style={{ paddingTop: '20px' }}>{props.decrypt.decrypt.name}</h2>
                                                        </> : <h2>Loading...</h2>
                                                }
                                                <br />
                                                {

                                                    props.decrypt && props.decrypt.loading == false && props.decrypt.decrypt ?
                                                        <>
                                                            {
                                                                props.decrypt.decrypt.karma <= 25 ?
                                                                    <p className='center-align white-text' style={{ paddingTop: '10px', backgroundColor: '#2979ff', width: '30%', borderRadius: '24px', paddingBottom: '10px' }}>Beginner</p> :
                                                                    <>
                                                                        {
                                                                            props.decrypt.decrypt.karma <= 65 ?
                                                                                <p className='center-align white-text' style={{ paddingTop: '10px', backgroundColor: '#2979ff', width: '30%', borderRadius: '24px', paddingBottom: '10px' }}>Intermediate</p> :
                                                                                <p className='center-align white-text' style={{ paddingTop: '10px', backgroundColor: '#2979ff', width: '30%', borderRadius: '24px', paddingBottom: '10px' }}>Pro</p>
                                                                        }
                                                                    </>
                                                            }
                                                        </>
                                                        :
                                                        <p className='center-align white-text' style={{ paddingTop: '10px', backgroundColor: '#2979ff', width: '30%', borderRadius: '24px', paddingBottom: '10px' }}>Loading..</p>
                                                }
                                                <div className='row center-align' style={{ marginTop: '60px', paddingRight: '50px', marginRight: '40px', borderRadius: '24px', backgroundColor: '#F5F5F5', paddingTop: '5%', paddingBottom: '5%', paddingRight: '10%' }}>
                                                    <div className='col s4'>
                                                        <p>Reports</p>
                                                        {
                                                            props.decrypt && props.decrypt.loading == false && props.decrypt.decrypt && props.decrypt.decrypt.reports.length > 0 ?
                                                                <p className='black-text' style={{ fontWeight: 'bold' }}>{props.decrypt.decrypt.reports.length}</p> :
                                                                <p className='black-text' style={{ fontWeight: 'bold' }}>0</p>
                                                        }
                                                    </div>
                                                    <div className='col s4'>
                                                        <p>Completed</p>
                                                        {
                                                            props.decrypt && props.decrypt.loading == false && props.decrypt.decrypt && props.decrypt.decrypt.baseReports.length > 0 ?
                                                                <p className='black-text' style={{ fontWeight: 'bold' }}>{props.decrypt.decrypt.baseReports.filter(a => a.resolved == true).length}</p> :
                                                                <p className='black-text' style={{ fontWeight: 'bold' }}>0</p>
                                                        }
                                                    </div>
                                                    <div className='col s4'>
                                                        <p>Rewards</p>
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
                                        <h3 style={{ paddingLeft: '20px', paddingTop: '20px' }}>Your Reports</h3>
                                        <hr className="divider" />
                                    </div>
                                    <div className='col s12'>
                                        {
                                            props.decrypt.decrypt.baseReports.length > 0 ?
                                                <>
                                                    {
                                                        props.decrypt.decrypt.baseReports.map((report, key) => {
                                                            return (
                                                                <div key={key} className="card-panel col s12" style={{ borderRadius: "24px", padding: "10px" }} >
                                                                    <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                                        <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${report.image})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                                        </div>
                                                                        <div className="col s9">
                                                                            <h5 className="black-text">
                                                                                {
                                                                                    report.address.length > 50 ?
                                                                                        <p>{(report.address).substring(0, 50)}...</p>
                                                                                        :
                                                                                        <p>{report.address}</p>
                                                                                }
                                                                            </h5>
                                                                            <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                                {report.reportedAt}, {report.reportedOn}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </>
                                                : <Lottie
                                                    options={defaultOptions}
                                                    height={400}
                                                    width={400}
                                                    isStopped={false}
                                                    isPaused={false}
                                                />
                                        }
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
)(Profile)


