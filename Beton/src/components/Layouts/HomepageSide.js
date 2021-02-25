import React from 'react'
import StatsCard from '../Cards/StatsCard'
import DownloadApp from '../../images/horizontal.jpg'
import GenericButton from '../Buttons/GenericButton'

const HomepageSide = (props) => {
    return (
        <div className="demo" id="main">
            <div className="row" style={{ height: "100%" }}>

                <div className="col s12 m9 white" style={{ height: "100%" }}>
                    <div className="row" style={{ marginTop: "30px" }}>
                        <div className="col s12 m6" style={{ padding: "0 30px" }} >
                            <h6 className="grey-text">Hello Aajinkya</h6>
                        </div>
                        <div className="col s12 m6 right-align" style={{ padding: "0 30px" }}>
                            <h6 className="grey-text">{new Date().toDateString()}</h6>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: "20px", height: "200px" }}>
                        <div className="col s10 offset-s1 valign-wrapper" style={{
                            height: "100%",
                            backgroundImage: `url(${DownloadApp})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "18px"
                        }}>
                            <div style={{width: "100%", marginTop: "30px"}}>
                                <h5 className="white-text center-align">Download Our Mobile App</h5>
                                <hr className="divider center-align" style={{ width: "10%", margin: "5px auto" }}/>
                                <p className="white-text center-align" style={{fontSize: "small"}} >
                                    Report and earn rewards much easily using our <br/> handy mobile app.
                                    So, what are you waiting for?
                                </p>
                                <div style={{ marginTop: "15px" }}>
                                    <GenericButton text="Download" id="download" link="google.com" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s12 m3" style={{ background: "#f5f7fb", height: "100%"  }}>
                    <div className="row" style={{ marginTop: "30px" }}>
                        <div className="col s12" style={{ padding: "0 30px" }} >
                            <h6 style={{color: "#002438"}} >Statistics of Mumbai as of today,</h6>
                        </div>
                        <hr className="divider"/>
                        <br/>
                        <div className="col s8 offset-s2">
                            <StatsCard text="Total Reports" props={props.props}/>
                        </div>
                        <div className="col s8 offset-s2">
                            <StatsCard text="Total Reports" props={props.props}/>
                        </div>
                        <div className="col s8 offset-s2">
                            <StatsCard text="Total Reports" props={props.props}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageSide
