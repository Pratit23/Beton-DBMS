import React from 'react';
import AdminSidenav from './AdminSidenav';
import TenderDetail from './AdminComponents/TenderDetail';


const SpecificTender = (props) => {
    console.log(props)
    return (
        <div>
            <AdminSidenav />
            <TenderDetail props={props} />
        </div>
    )
}

export default SpecificTender
