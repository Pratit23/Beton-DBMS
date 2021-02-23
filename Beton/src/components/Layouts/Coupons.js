import React from 'react';
import Sidenav from '../Layouts/Sidenav';
import ScratchOff from '../Scratchy/ScarthCard';


function Coupons() {
    return (
        <div>
            <Sidenav />
            <div id="main" className="row" style={{ marginBottom: "0", height: "100%" }} >
                <ScratchOff></ScratchOff>
            </div>
        </div>
    )
}

export default Coupons
