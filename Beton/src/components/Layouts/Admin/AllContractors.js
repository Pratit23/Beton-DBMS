import React from 'react'
import { Redirect } from 'react-router-dom'
import AdminSidenav from './AdminSidenav';
import ContractorTab from './AdminComponents/ContractorTab';

function AllAdvertisers() {
    if (!localStorage.getItem('token')) return <Redirect to='/login' />
    return (
        <div>
            <AdminSidenav />
            <ContractorTab />
        </div>
    )
}

export default AllAdvertisers
