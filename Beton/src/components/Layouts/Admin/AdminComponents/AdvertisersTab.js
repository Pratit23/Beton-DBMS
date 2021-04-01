import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { allAdvertisers, toggleActivation } from '../../../../queries/query';
import Lottie from 'react-lottie';
import loading from '../../../../images/Lottie/loading.json'
import moreDetails from '../../../../images/Lottie/moreDetails.json'
import CoverImg from '../../../../images/background-pattern.png'
import M from 'materialize-css';

const AdvertisersTab = (props) => {
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
    // * function to show the milliseconds in proper time format
    function time(ms) {
        return new Date(ms).toISOString().slice(11, -1);
    }

    return (
        <div className="demo" id="main" style={{ overflowY: "auto" }} >
            <div className="row advHomeTop" style={{ height: "100%" }} >
                <div className="col s8">
                    <h3 style={{ margin: "30px 0 0 30px" }}>
                        All Advertisers
                    </h3>
                    <hr className="divider" />
                    {
                        props.allAdvertisers && !props.allAdvertisers.loading && props.allAdvertisers.allAdvertisers ? (
                            props.allAdvertisers.allAdvertisers.map(u => {
                                return (
                                    <div className="card-panel hoverable" style={{ borderRadius: "24px", padding: "10px", cursor: "pointer" }} onClick={() => setSelected(u)} >
                                        <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url('https://f1.allesedv.com/64/${u.website}')`, backgroundSize: "unset", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }} >
                                            </div>
                                            <div className="col s9">
                                                <h5 className="black-text">
                                                    {u.company}
                                                </h5>
                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                    {u.email} | Click to know more
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
                                            backgroundImage: `url('https://f1.allesedv.com/64/${selected.website}')`,
                                            backgroundSize: "unset",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center center"
                                        }} id='img1' ></div>
                                    </div>
                                    <div className="col s12" style={{ height: '60vh' }}>
                                        <div style={{ height: '100%', width: '100%' }}>
                                            <h4 style={{ paddingTop: '20px', marginLeft: '40px' }}>{selected.company}</h4>
                                            <br />
                                            <p className='center-align white-text' style={{ padding: '10px', marginLeft: '40px', fontSize: "15px", backgroundColor: '#2979ff', width: 'max-content', borderRadius: '24px' }}>{selected.category}</p>
                                            <hr className="divider center-align" style={{ width: "90%" }} />
                                            <div className='row center-align' style={{ margin: '20px auto', borderRadius: '24px', backgroundColor: '#F5F5F5', padding: "20px 0", width: "90%" }}>
                                                <div className='col s5 offset-s1'>
                                                    <p>Advertisments</p>
                                                    <p className='black-text' style={{ fontWeight: 'bold' }}>{selected.advertisments.length}</p>
                                                </div>
                                                <div className='col s5'>
                                                    <p>Coupons</p>
                                                    <p className='black-text' style={{ fontWeight: 'bold' }}>{selected.coupons.length}</p>
                                                </div>
                                            </div>
                                            <hr className="divider center-align" style={{ width: "90%" }} />
                                            {
                                                selected.advertisments.length != 0 ? selected.advertisments.map(d => {
                                                    return (
                                                        <div className="card-panel hoverable col s10 offset-s1" style={{ borderRadius: "18px", padding: "10px", cursor: "pointer" }}>
                                                            <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                                                <div className="col s2 center" style={{ height: "60px", width: "60px", borderRadius: "100%", backgroundImage: `url(${d.image})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                                </div>
                                                                <div className="col s9">
                                                                    <h5 className="black-text truncate">
                                                                        {d.title}
                                                                    </h5>
                                                                    <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                        Live since {d.when} | Total outreach: {d.outreach} | Total screentime: {time(d.screentime)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }) : (
                                                    <h6 className="center-align">
                                                        No advertisements live yet!
                                                    </h6>
                                                )
                                            }
                                            <div className="col s12" style={{ textAlign: "center", paddingBottom: "40px", paddingTop: "10px" }} >
                                                {
                                                    selected.isVerified == true ? (
                                                        <button className="btn pink" style={{ borderRadius: "24px", margin: "0 auto" }}
                                                            onClick={async () => {
                                                                if (window.confirm("This will deactivate the account. Continue if you are sure you wish to deactivate the account!")) {
                                                                    let temp = await props.toggleActivation({
                                                                        variables: {
                                                                            id: selected.id,
                                                                            type: "advertiser"
                                                                        }
                                                                    })
                                                                    if (temp) {
                                                                        M.toast({ html: "Successfully changed it!" })
                                                                        setSelected({ ...selected, isVerified: !selected.isVerified })
                                                                    } else {
                                                                        M.toast({ html: "Something went wrong" })
                                                                    }
                                                                }
                                                            }}
                                                        >
                                                            Deactivate
                                                        </button>
                                                    ) : (
                                                        <button className="btn green" style={{ borderRadius: "24px", margin: "0 auto" }}
                                                            onClick={async () => {
                                                                if (window.confirm("This will activate the account. Continue if you are sure you wish to activate the account!")) {
                                                                    let temp = await props.toggleActivation({
                                                                        variables: {
                                                                            id: selected.id,
                                                                            type: "advertiser"
                                                                        }
                                                                    })
                                                                    if (temp) {
                                                                        M.toast({ html: "Successfully changed it!" })
                                                                        setSelected({ ...selected, isVerified: !selected.isVerified })
                                                                    } else {
                                                                        M.toast({ html: "Something went wrong" })
                                                                    }
                                                                }
                                                            }}
                                                        >
                                                            Activate
                                                        </button>
                                                    )
                                                }
                                            </div>
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
    graphql(allAdvertisers, { name: "allAdvertisers" }),
    graphql(toggleActivation, { name: "toggleActivation" }),
)(AdvertisersTab)
