import React, { useState, useEffect } from 'react'

export default function TenderSide() {

    const [currentTab, setCurrentTab] = useState(2)
    const [showTenders, setShowTenders] = useState(true)

    useEffect(() => {
        window.$(document).ready(function () {
            window.$('.collapsible').collapsible();
            window.$('.materialboxed').materialbox();
        });
    })

    return (
        <>
            {
                !showTenders ?
                    <div className="demo" id="main" style={{ overflowY: "auto" }} >
                        <div className="row">
                            <div className="col s12" style={{ paddingTop: '40px' }}>
                                <ul className="tabs" style={{ paddingLeft: '180px', borderRadius: '12px', backgroundColor: '#F5F5F5', width: '700px' }}>
                                    <li onClick={() => setCurrentTab(0)} className="tab col s3"><a>New</a></li>
                                    <li onClick={() => setCurrentTab(1)} className="tab col s3"><a>Active</a></li>
                                    <li onClick={() => setCurrentTab(2)} className="tab col s3"><a>Past</a></li>
                                </ul>
                                {
                                    currentTab == 0 ?
                                        <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '290px', paddingRight: '250px', paddingTop: '25px' }}>
                                            <div className="card-panel" style={{ borderRadius: "24px", padding: "10px" }} >
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
                                        <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '290px', paddingRight: '250px', paddingTop: '25px' }}>
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
                                        <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '290px', paddingRight: '250px', paddingTop: '25px' }}>
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
                    :
                    <div className="demo" id="main" style={{ overflowY: "auto" }} >
                        <div className="row">
                            <div className="col s12" style={{ paddingTop: '40px' }}>
                                <ul className="tabs" style={{ paddingLeft: '70px', borderRadius: '12px', backgroundColor: '#F5F5F5', width: '1000px' }}>
                                    <li onClick={() => setCurrentTab(0)} className="tab col s3"><a>All Reports</a></li>
                                    <li onClick={() => setCurrentTab(1)} className="tab col s3"><a>Images</a></li>
                                    <li onClick={() => setCurrentTab(2)} className="tab col s3"><a>Users</a></li>
                                    <li onClick={() => setCurrentTab(3)} className="tab col s3"><a>Map View</a></li>
                                </ul>
                                {
                                    currentTab == 0 ?
                                        <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '270px', paddingRight: '250px', paddingTop: '25px' }}>
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
                                        <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '290px', paddingRight: '250px', paddingTop: '25px' }}>
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
                                        <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '290px', paddingRight: '250px', paddingTop: '25px' }}>
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
                                        <div className="row" style={{ height: '100%', width: '100%', paddingLeft: '290px', paddingRight: '250px', paddingTop: '25px' }}>
                                            
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
