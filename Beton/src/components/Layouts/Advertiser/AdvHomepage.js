import React from 'react'
import AdvertiserStatsCard from '../../Cards/AdvertiserStatsCard'
import AdvOne from '../../../images/advOne.png'
import AdvTwo from '../../../images/advTwo.png'
import AdvThree from '../../../images/advThree.png'

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
                </div>
            </div>
        </div>
    )
}

export default AdvHomepage
