import React from 'react';
import ReportDetails from './AdminComponents/ReportDetails';
import AdminSidenav from './AdminSidenav';

const SpecificReport = (props) => {
    console.log(props)
    return (
        <div>
            <AdminSidenav />
            <ReportDetails props={props} />
        </div>
    )
}

export default SpecificReport