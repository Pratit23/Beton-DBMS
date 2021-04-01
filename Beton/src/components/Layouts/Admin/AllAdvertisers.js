import React from 'react'
import { Redirect } from 'react-router-dom'
import AdminSidenav from './AdminSidenav';
import AdvertisersTab from './AdminComponents/AdvertisersTab';

function AllAdvertisers() {
    if (!localStorage.getItem('token')) return <Redirect to='/login' />
    return (
        <div>
            <AdminSidenav />
            <AdvertisersTab />
        </div>
    )
}

export default AllAdvertisers
