import React from 'react'
import Sidenav from './Sidenav'
import CoverImg from '../../images/instructionCover.png'
import ProfileImg from '../../images/two.png'

export default function Profile() {
    return (
        <div>
            <Sidenav />
            <div className="row">
                <div className="col s8" style={{ height: '100vh', backgroundColor: 'rgb(35, 37, 47)' }}>
                    <div className="demo" id="main" style={{ overflowY: "hidden" }} >
                        <div className="row">
                            <div className="col s12" style={{ height: '40vh', position: 'relative', backgroundImage: `url(${CoverImg})`, backgroundSize: 'cover' }}>
                                <img style={{ height: '150px', width: '150px', borderRadius: '50%', position: 'absolute', top: '27%', left: '40%' }} src={ProfileImg} id='img1' alt="Image not loading" />
                            </div>
                            <div className="col s12" style={{ height: '60vh' }}>
                                <div style={{ height: '100%', width: '100%', paddingLeft: '40px' }}>
                                    <h2 style={{ paddingTop: '20px' }}>Pratit</h2>
                                    <h2>Bandiwadekar</h2>
                                    <p className='center-align white-text' style={{ paddingTop: '10px', backgroundColor: '#2979ff', width: '30%', borderRadius: '24px', paddingBottom: '10px' }}>Intermediate</p>
                                    <div className='row center-align' style={{ marginTop: '60px', paddingRight: '50px', marginRight: '40px', borderRadius: '24px', backgroundColor: '#F5F5F5', paddingTop: '5%', paddingBottom: '5%', paddingRight: '10%' }}>
                                        <div className='col s4'>
                                            <p>Reports</p>
                                            <p className='black-text' style={{ fontWeight: 'bold' }}>37</p>
                                        </div>
                                        <div className='col s4'>
                                            <p>Completed</p>
                                            <p className='black-text' style={{ fontWeight: 'bold' }}>69</p>
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
                        </div>
                        <div className='col s12'>
                            
                            <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                    <div className="col s2 center" style={{ height: "50px", width: "50px", borderRadius: "100%", backgroundImage: `url(${"https://source.unsplash.com/800x600/?beach"})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                    </div>
                                    <div className="col s9">
                                        <h5 className="black-text">
                                            Report 2
                                        </h5>
                                        <p className="grey-text" style={{ paddingTop: "8px" }} >
                                            This is the address | 416520 | Click to know more
                                        </p>
                                    </div>
                                    <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                        ➜
                                    </div>
                                </div>
                            </div>
                            <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                    <div className="col s2 center" style={{ height: "50px", width: "50px", borderRadius: "100%", backgroundImage: `url(${"https://source.unsplash.com/800x600/?beach"})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                    </div>
                                    <div className="col s9">
                                        <h5 className="black-text">
                                            Report 2
                                        </h5>
                                        <p className="grey-text" style={{ paddingTop: "8px" }} >
                                            This is the address | 416520 | Click to know more
                                        </p>
                                    </div>
                                    <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                        ➜
                                    </div>
                                </div>
                            </div>
                            <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                <div className="row valign-wrapper" style={{ margin: "5px -.75rem" }} >
                                    <div className="col s2 center" style={{ height: "50px", width: "50px", borderRadius: "100%", backgroundImage: `url(${"https://source.unsplash.com/800x600/?beach"})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                    </div>
                                    <div className="col s9">
                                        <h5 className="black-text">
                                            Report 2
                                        </h5>
                                        <p className="grey-text" style={{ paddingTop: "8px" }} >
                                            This is the address | 416520 | Click to know more
                                        </p>
                                    </div>
                                    <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                        ➜
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
