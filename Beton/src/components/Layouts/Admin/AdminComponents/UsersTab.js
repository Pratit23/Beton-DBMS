import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { users } from '../../../../queries/query';
import Lottie from 'react-lottie';
import loading from '../../../../images/Lottie/loading.json'
import moreDetails from '../../../../images/Lottie/moreDetails.json'
import CoverImg from '../../../../images/instructionCover.png'
import { Link } from 'react-router-dom';

const UsersTab = (props) => {
    const [selected, setSelected] = useState({});
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: moreDetails,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="demo" id="main" style={{ overflowY: "auto" }} >
            <div className="row advHomeTop" style={{ height: "100%" }} >
                <div className="col s8">
                    <h3 style={{ margin: "30px 0 0 30px" }}>
                        All Users
                    </h3>
                    <hr className="divider" />
                    {
                        props.users && !props.users.loading && props.users.users ? (
                            props.users.users.map(u => {
                                let level = "";
                                if (u.karma < 25) {
                                    level = "Beginner"
                                } else if (u.karma < 65) {
                                    level = "Intermediate"
                                } else {
                                    level = "Pro"
                                }
                                let obj = {
                                    ...u,
                                    level
                                }
                                return (
                                    <div className="card-panel hoverable" style={{ borderRadius: "24px", padding: "10px", cursor: "pointer" }} onClick={() => setSelected(obj)} >
                                        <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${u.profile})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                            </div>
                                            <div className="col s9">
                                                <h5 className="black-text">
                                                    {u.name}
                                                </h5>
                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                    {u.email} | {level} | Click to know more
                                                </p>
                                            </div>
                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                ➜
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : <Lottie options={defaultOptions}
                            height={400}
                            width={400}
                            isStopped={false}
                            isPaused={false}
                        />
                    }
                </div>
                {
                    selected && Object.keys(selected).length === 0 ? (
                        <div className="col s4 valign-wrapper" style={{ height: "100%" }} >
                            <div>
                                <h4>
                                    Click any contact to know more!
                                </h4>
                                <Lottie options={defaultOptions2}
                                    height={400}
                                    width={400}
                                    isStopped={false}
                                    isPaused={false}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="col s4" style={{ padding: 0 }} >
                            <div className="demo" id="main" style={{ overflowY: "auto", margin: 0 }} >
                                <div className="row">
                                    <div className="col s12" style={{ height: '40vh', position: 'relative', backgroundImage: `url(${CoverImg})`, backgroundSize: 'cover' }}>
                                        <div style={{
                                            height: '150px',
                                            width: '150px',
                                            borderRadius: '50%',
                                            position: 'absolute',
                                            top: 'calc(50% - 75px)',
                                            left: 'calc(50% - 75px)',
                                            backgroundImage: `url(${selected.profile})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center center"
                                        }} id='img1' ></div>
                                    </div>
                                    <div className="col s12" style={{ height: '60vh' }}>
                                        <div style={{ height: '100%', width: '100%' }}>
                                            <h4 style={{ paddingTop: '20px', marginLeft: '40px' }}>{selected.name}</h4>
                                            <br />
                                            <p className='center-align white-text' style={{ paddingTop: '10px', marginLeft: '40px', fontSize: "15px", backgroundColor: '#2979ff', width: '30%', borderRadius: '24px', paddingBottom: '10px' }}>{selected.level}</p>
                                            <hr className="divider center-align" style={{ width: "90%" }} />
                                            <div className='row center-align' style={{ margin: '20px auto', borderRadius: '24px', backgroundColor: '#F5F5F5', padding: "20px 0", width: "90%" }}>
                                                <div className='col s4'>
                                                    <p>Base</p>
                                                    <p className='black-text' style={{ fontWeight: 'bold' }}>{selected.baseReports.length}</p>
                                                </div>
                                                <div className='col s4'>
                                                    <p>Dependent</p>
                                                    <p className='black-text' style={{ fontWeight: 'bold' }}>{selected.reports.length}</p>
                                                </div>
                                                <div className='col s4'>
                                                    <p>Coupons</p>
                                                    <p className='black-text' style={{ fontWeight: 'bold' }}>{selected.coupons.length}</p>
                                                </div>
                                            </div>
                                            <hr className="divider center-align" style={{ width: "90%" }} />
                                            {
                                                selected.baseReports.length != 0 ? selected.baseReports.map(d => {
                                                    return (
                                                        <Link to={`/admin/report/${d.id}`}>
                                                            <div className="card-panel hoverable col s10 offset-s1" style={{ borderRadius: "18px", padding: "10px", cursor: "pointer" }}>
                                                                <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                                    <div className="col s2 center" style={{ height: "60px", width: "60px", borderRadius: "100%", backgroundImage: `url(${d.image})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                                    </div>
                                                                    <div className="col s9">
                                                                        <h5 className="black-text truncate">
                                                                            {d.address}
                                                                        </h5>
                                                                        <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                            {d.noOfReports} | Click to know more
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    )
                                                }) : (
                                                    <h6 className="center-align">
                                                        No reports done yet!
                                                    </h6>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default compose(
    graphql(users, { name: "users" })
)(UsersTab)
