import React from 'react'
import AdvertiserStatsCard from '../../Cards/AdvertiserStatsCard'
import AdvOne from '../../../images/advOne.png'
import AdvTwo from '../../../images/advTwo.png'
import AdvThree from '../../../images/AdvThree.png'
import AdvChart from '../../Charts/AdvChart'
import AdvDonut from '../../Charts/AdvDonut'
import MinimalImageCard from '../../Cards/MinimalImageCard'
import One from '../../../images/one.png'
import Two from '../../../images/two.png'


const AdvHomepage = () => {
    return (
        <div className="demo" id="main">
            <div className="row advHomeTop">
                <div className="col s12 m8">
                    <h3 style={{ margin: "30px 0 0 30px" }}>Overiew</h3>
                    <hr className="divider" />
                    <AdvertiserStatsCard text="Advertisments" src={AdvOne} stat="05" />
                    <AdvertiserStatsCard text="Total Coupons" src={AdvTwo} stat="03" />
                    <AdvertiserStatsCard text="Available Coupons" src={AdvThree} stat="01" />
                    <div className="col s12 advChart">
                        <AdvChart />
                    </div>
                </div>
                <div className="col s12 m4 advStatsInfographics">
                    <h3 style={{ margin: "30px 0 0 30px" }}>Statistics</h3>
                    <hr className="divider" />
                    <div className="col s12">
                        <AdvDonut />
                    </div>
                    <h3 className="col s12" style={{ margin: "20px", marginBottom: "0" }}>
                        Quick links
                    </h3>
                    <div className="col s12" style={{borderRadius: "18px", height: "100px", margin: "10px 0"}} >
                        <MinimalImageCard img={One} text="Map view" link="/cluster" />
                    </div>
                    <div className="col s12" style={{borderRadius: "18px", height: "100px", margin: "10px 0"}} >
                        <MinimalImageCard img={Two} text="My account" link="/account" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvHomepage
