import React, { useState, useEffect } from 'react'
import TenderMap from './TenderMap'
import Lottie from 'react-lottie';
import loading from '../../../../images/Lottie/newTenders.json'

export default function TenderSide() {

    const [currentTab, setCurrentTab] = useState(0)
    const [showTenders, setShowTenders] = useState(false)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        window.$(document).ready(function () {
            window.$('.collapsible').collapsible();
            window.$('.materialboxed').materialbox();

            window.$('.tabbar li a').on('click', function (e) {

                e.preventDefault();

                let that = window.$(this),
                    li = that.parent(),
                    ul = li.parent();

                if (!ul.hasClass('move') && !li.hasClass('active')) {
                    ul.children('li').removeClass('active');

                    ul.css('--x-n', li.position().left + li.outerWidth() / 2 + 'px');
                    li.addClass('move');
                    ul.addClass('move');

                    setTimeout(() => {
                        ul.removeClass('move');
                        li.removeClass('move').addClass('active');
                        ul.css('--x', li.position().left + li.outerWidth() / 2 + 'px');
                    }, 1200);
                }

            });
        });
    })

    return (
        <>
            {
                !showTenders ?
                    <div className="row">
                        <div className="col s8" style={{ height: '100vh' }}>
                            <div className="demo" id="main" style={{ overflowY: "auto" }} >
                                <div className="row">
                                    <div className="col s12" style={{ paddingTop: '40px' }}>
                                        <div class="frame">
                                            <ul class="tabbar" style={{ "--x-n": "81.133px", "--x": "81.133px" }}>
                                                <li class="active">
                                                    <a onClick={() => setCurrentTab(0)} class="box">
                                                        <div>
                                                            <svg>
                                                                <use xlinkHref="#box" />
                                                            </svg>
                                                            <em></em>
                                                        </div>
                                                    </a>
                                                    {
                                                        currentTab == 0 ?
                                                            <p className="center-align blue-text">New</p> :
                                                            <p className="center-align">New</p>
                                                    }
                                                </li>
                                                <li>
                                                    <a onClick={() => setCurrentTab(1)} class="home">
                                                        <div>
                                                            <svg>
                                                                <use xlinkHref="#home" />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                    {
                                                        currentTab == 1 ?
                                                            <p className="center-align blue-text">Active</p> :
                                                            <p className="center-align">Active</p>
                                                    }
                                                </li>
                                                <li>
                                                    <a onClick={() => setCurrentTab(2)} class="calendar">
                                                        <div>
                                                            <svg>
                                                                <use xlinkHref="#calendar" />
                                                            </svg>
                                                            <em></em>
                                                        </div>
                                                    </a>
                                                    {
                                                        currentTab == 2 ?
                                                            <p className="center-align blue-text">Past</p> :
                                                            <p className="center-align">Past</p>
                                                    }
                                                </li>
                                            </ul>
                                        </div>

                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                                            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="box">
                                                <path d="M4.2715356,6.86557078 C3.79533783,7.1301251 3.5,7.63205601 3.5,8.1768067 L3.5,15.8231933 C3.5,16.367944 3.79533783,16.8698749 4.2715356,17.1344292 L11.2715356,21.0233181 C11.7245694,21.2750036 12.2754306,21.2750036 12.7284644,21.0233181 L19.7284644,17.1344292 C20.2046622,16.8698749 20.5,16.367944 20.5,15.8231933 L20.5,8.1768067 C20.5,7.63205601 20.2046622,7.1301251 19.7284644,6.86557078 L12.7284644,2.97668189 C12.2754306,2.72499645 11.7245694,2.72499645 11.2715356,2.97668189 L4.2715356,6.86557078 Z"></path>
                                            </symbol>
                                            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="home">
                                                <path d="M3.66781808,10.0753614 C3.5610739,10.1702451 3.5,10.3062472 3.5,10.4490661 L3.5,20 C3.5,20.8284271 4.17157288,21.5 5,21.5 L19,21.5 C19.8284271,21.5 20.5,20.8284271 20.5,20 L20.5,10.4490661 C20.5,10.3062472 20.4389261,10.1702451 20.3321819,10.0753614 L12.9965458,3.55479593 C12.4282167,3.04961457 11.5717833,3.04961457 11.0034542,3.55479593 L3.66781808,10.0753614 Z"></path>
                                            </symbol>
                                            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="calendar">
                                                <path d="M5,4.5 C4.17157288,4.5 3.5,5.17157288 3.5,6 L3.5,19 C3.5,19.8284271 4.17157288,20.5 5,20.5 L19,20.5 C19.8284271,20.5 20.5,19.8284271 20.5,19 L20.5,6 C20.5,5.17157288 19.8284271,4.5 19,4.5 L5,4.5 Z"></path>
                                            </symbol>
                                        </svg>
                                        {
                                            currentTab == 0 ?
                                                <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '150px', paddingRight: '100px', paddingTop: '25px' }}>
                                                    <div className="card-panel" onClick={() => setShowTenders(true)} style={{ borderRadius: "24px", padding: "10px" }} >
                                                        <div className="row valign-wrapper">
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">
                                                                    NH-17
                                                    </h5>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                    50,00,000 | May 2021 | Click to know more
                                                    </p>
                                                            </div>
                                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                                ➜
                                                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                                        <div className="row valign-wrapper">
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">
                                                                    NH-20
                                                    </h5>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                    50,00,000 | May 2021 | Click to know more
                                                    </p>
                                                            </div>
                                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                                ➜
                                                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                                        <div className="row valign-wrapper">
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">
                                                                    NH-15
                                                                </h5>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                    50,00,000 | May 2021 | Click to know more
                                                                </p>
                                                            </div>
                                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                                ➜
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null
                                        }
                                        {
                                            currentTab == 1 ?
                                                <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '150px', paddingRight: '100px', paddingTop: '25px' }}>
                                                    <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                                        <div className="row valign-wrapper">
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">
                                                                    SH-17
                                                        </h5>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                    50,00,000 | May 2021 | Click to know more
                                                        </p>
                                                            </div>
                                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                                ➜
                                                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                                        <div className="row valign-wrapper">
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">
                                                                    SH-20
                                                        </h5>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                    50,00,000 | May 2021 | Click to know more
                                                        </p>
                                                            </div>
                                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                                ➜
                                                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                                        <div className="row valign-wrapper">
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">
                                                                    SH-15
                                                        </h5>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                    50,00,000 | May 2021 | Click to know more
                                                        </p>
                                                            </div>
                                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                                ➜
                                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null
                                        }
                                        {
                                            currentTab == 2 ?
                                                <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '150px', paddingRight: '100px', paddingTop: '25px' }}>
                                                    <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                                        <div className="row valign-wrapper">
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">
                                                                    DH-17
                                                        </h5>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                    50,00,000 | May 2021 | Click to know more
                                                        </p>
                                                            </div>
                                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                                ➜
                                                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                                        <div className="row valign-wrapper">
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">
                                                                    DH-20
                                                        </h5>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                    50,00,000 | May 2021 | Click to know more
                                                        </p>
                                                            </div>
                                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                                ➜
                                                    </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
                                                        <div className="row valign-wrapper">
                                                            <div className="col s2 center" style={{ height: "80px", width: "80px", borderRadius: "100%", backgroundImage: `url(${'https://source.unsplash.com/800x600/?beach'})`, backgroundSize: "cover", backgroundPosition: "center center" }} >
                                                            </div>
                                                            <div className="col s9">
                                                                <h5 className="black-text">
                                                                    DH-15
                                                        </h5>
                                                                <p className="grey-text" style={{ paddingTop: "8px" }} >
                                                                    50,00,000 | May 2021 | Click to know more
                                                        </p>
                                                            </div>
                                                            <div className="col s1" style={{ paddingTop: "10px", fontSize: "26px" }} >
                                                                ➜
                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s4" style={{ height: '100vh' }}>
                            <Lottie options={defaultOptions}
                                height={700}
                                width={400}
                                isStopped={false}
                                isPaused={false}
                                style={{ marginTop: '15vh' }}
                            />
                        </div>
                    </div>
                    :
                    <div className="row">
                        <div className="col s8" style={{ height: '100vh' }}>
                            <div className="demo" id="main" style={{ overflowY: "auto" }} >
                                <div className="row">
                                    <div className="col s12" style={{ paddingTop: '40px' }}>
                                        <ul className="tabs" style={{ paddingLeft: '40px', borderRadius: '12px', backgroundColor: '#F5F5F5', width: '700px' }}>
                                            <li onClick={() => setCurrentTab(0)} className="tab col s3"><a className="blue-text">All Reports</a></li>
                                            <li onClick={() => setCurrentTab(1)} className="tab col s3"><a className="blue-text">Images</a></li>
                                            <li onClick={() => setCurrentTab(2)} className="tab col s3"><a className="blue-text">Users</a></li>
                                            <li onClick={() => setCurrentTab(3)} className="tab col s3"><a className="blue-text">Map View</a></li>
                                        </ul>
                                        {
                                            currentTab == 0 ?
                                                <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '150px', paddingRight: '100px', paddingTop: '25px' }}>
                                                    <ul className="collapsible">
                                                        <li>
                                                            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Address of the first report</div>
                                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                                        </li>
                                                        <li>
                                                            <div className="collapsible-header"><i className="material-icons">place</i>Address of the second report</div>
                                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                                        </li>
                                                        <li>
                                                            <div className="collapsible-header"><i className="material-icons">whatshot</i>Address of the third report</div>
                                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                : null
                                        }
                                        {
                                            currentTab == 1 ?
                                                <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '150px', paddingRight: '160px', paddingTop: '25px' }}>
                                                    <div class="row" >
                                                        <div class="col s3 m3" style={{ paddingBottom: '20px' }}><img src="https://source.unsplash.com/800x600/?beach" alt="" class="materialboxed responsive-img" /></div>
                                                        <div class="col s3 m3" style={{ paddingBottom: '20px' }}><img src="https://source.unsplash.com/800x600/?sand" alt="" class="materialboxed responsive-img" /></div>
                                                        <div class="col s3 m3" style={{ paddingBottom: '20px' }}><img src="https://source.unsplash.com/800x600/?boat" alt="" class="materialboxed responsive-img" /></div>
                                                        <div class="col s3 m3" style={{ paddingBottom: '20px' }}><img src="https://source.unsplash.com/800x600/?cruise" alt="" class="materialboxed responsive-img" /></div>
                                                        <div class="col s3 m3" style={{ paddingBottom: '20px' }}><img src="https://source.unsplash.com/800x600/?cruise" alt="" class="materialboxed responsive-img" /></div>
                                                    </div>
                                                </div>
                                                : null
                                        }
                                        {
                                            currentTab == 2 ?
                                                <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '200px', paddingRight: '180px', paddingTop: '25px' }}>
                                                    <div class="chip">
                                                        <img src="https://source.unsplash.com/800x600/?beach" alt="Contact Person" />
                                                        Jane Doe
                                                    </div>
                                                    <div class="chip">
                                                        <img src="https://source.unsplash.com/800x600/?beach" alt="Contact Person" />
                                                        Jane Doe
                                                    </div>
                                                    <div class="chip">
                                                        <img src="https://source.unsplash.com/800x600/?beach" alt="Contact Person" />
                                                        Jane Doe
                                                    </div>
                                                    <div class="chip">
                                                        <img src="https://source.unsplash.com/800x600/?beach" alt="Contact Person" />
                                                        Jane Doe
                                                    </div>
                                                    <div class="chip">
                                                        <img src="https://source.unsplash.com/800x600/?beach" alt="Contact Person" />
                                                        Jane Doe
                                                    </div>
                                                    <div class="chip">
                                                        <img src="https://source.unsplash.com/800x600/?beach" alt="Contact Person" />
                                                        Jane Doe
                                                    </div>
                                                    <div class="chip">
                                                        <img src="https://source.unsplash.com/800x600/?beach" alt="Contact Person" />
                                                        Jane Doe
                                                    </div>
                                                    <div class="chip">
                                                        <img src="https://source.unsplash.com/800x600/?beach" alt="Contact Person" />
                                                        Jane Doe
                                                     </div>
                                                    <div class="chip">
                                                        <img src="https://source.unsplash.com/800x600/?beach" alt="Contact Person" />
                                                        Jane Doe
                                                    </div>
                                                    <div class="chip">
                                                        <img src="https://source.unsplash.com/800x600/?beach" alt="Contact Person" />
                                                        Jane Doe
                                                    </div>
                                                </div>
                                                : null
                                        }
                                        {
                                            currentTab == 3 ?
                                                <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '80px', paddingTop: '25px' }}>
                                                    <TenderMap />
                                                </div>
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s4" style={{ height: '100vh' }}>
                            <Lottie options={defaultOptions}
                                height={700}
                                width={400}
                                isStopped={false}
                                isPaused={false}
                                style={{ marginTop: '15vh' }}
                            />
                        </div>
                    </div>
            }
        </>
    )
}
