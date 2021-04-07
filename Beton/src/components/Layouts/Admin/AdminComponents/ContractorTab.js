import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { allContractors, toggleActivation } from '../../../../queries/query';
import Lottie from 'react-lottie';
import loading from '../../../../images/Lottie/loading.json'
import moreDetails from '../../../../images/Lottie/moreDetails.json'
import CoverImg from '../../../../images/background-pattern.png'
import M from 'materialize-css';

const ContractorTab = (props) => {
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
                        All Contractors
                    </h3>
                    <hr className="divider" />
                    {
                        props.allContractors && !props.allContractors.loading && props.allContractors.allContractors ? (
                            props.allContractors.allContractors.map(u => {
                                return (
                                    <div className="card-panel hoverable" style={{ borderRadius: "24px", padding: "10px", cursor: "pointer" }} onClick={() => setSelected(u)} >
                                        <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${u.profile})`, backgroundSize: "unset", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }} >
                                            </div>
                                            <div className="col s9">
                                                <h5 className="black-text">
                                                    {u.name}
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
                                            backgroundImage: `url(${selected.profile})`,
                                            backgroundSize: "unset",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center center"
                                        }} id='img1' ></div>
                                    </div>
                                    <div className="col s12" style={{ height: '60vh' }}>
                                        <div style={{ height: '100%', width: '100%' }}>
                                            <h4 style={{ paddingTop: '20px', marginLeft: '40px' }}>{selected.name}</h4>
                                            <br />
                                            <p className='center-align white-text' style={{ padding: '10px', marginLeft: '40px', fontSize: "15px", backgroundColor: '#2979ff', width: 'max-content', borderRadius: '24px' }}>{selected.isVerified ? "Verified" : "Not Verified"} Contractor</p>
                                            <p className='left-align grey-text' style={{ padding: '10px', marginLeft: '40px', fontSize: "15px" }}>{selected.address}</p>
                                            <hr className="divider center-align" style={{ width: "90%" }} />
                                            <div className='row center-align' style={{ margin: '20px auto', borderRadius: '24px', backgroundColor: '#F5F5F5', padding: "20px 0", width: "90%" }}>
                                                <div className='col s4'>
                                                    <p>Total Bids</p>
                                                    <p className='black-text' style={{ fontWeight: 'bold' }}>{selected.bidsMade.length}</p>
                                                </div>
                                                <div className='col s4'>
                                                    <p>Assigned Jobs</p>
                                                    <p className='black-text' style={{ fontWeight: 'bold' }}>{
                                                        selected.bidsMade.length != 0 ? selected.bidsMade.filter(b => b.tenderId.isAssigned == true).length : 0
                                                    }</p>
                                                </div>
                                                <div className='col s4'>
                                                    <p>Completed Jobs</p>
                                                    <p className='black-text' style={{ fontWeight: 'bold' }}>{
                                                        selected.bidsMade.length != 0 ? selected.bidsMade.filter(b => b.tenderId.isCompleted == true).length : 0
                                                    }</p>
                                                </div>
                                            </div>
                                            <hr className="divider center-align" style={{ width: "90%" }} />
                                            <div className="col s12" style={{ textAlign: "center", paddingBottom: "40px", paddingTop: "10px" }} >
                                                {
                                                    selected.isVerified == true ? (
                                                        <button className="btn pink" style={{ borderRadius: "24px", margin: "0 auto" }}
                                                            onClick={async () => {
                                                                if (window.confirm("This will deactivate the account. Continue if you are sure you wish to deactivate the account!")) {
                                                                    let temp = await props.toggleActivation({
                                                                        variables: {
                                                                            id: selected.id,
                                                                            type: "contractor"
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
                                                                            type: "contractor"
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
    graphql(allContractors, { name: "allContractors" }),
    graphql(toggleActivation, { name: "toggleActivation" }),
)(ContractorTab)
