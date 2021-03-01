import React from 'react'
import AdvertismentCard from '../../Cards/AdvertismentCard'
import AdvSidenav from './AdvSidenav'

const AllAdvertisments = () => {
    return (
        <div>
            <AdvSidenav />
            <div className="demo" id="main" style={{ overflowY: "visible" }} >
                <div className="row">
                    <div className="col s12">
                        <h3 style={{ margin: "30px 0 0 30px" }}>All advertisments</h3>
                        <hr className="divider" />
                    </div>
                    <AdvertismentCard />
                    <AdvertismentCard />
                    <AdvertismentCard />
                </div>
            </div>
        </div>
    )
}

export default AllAdvertisments
