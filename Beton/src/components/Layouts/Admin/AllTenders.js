import React from 'react'
import { Redirect } from 'react-router-dom'
import AdminSidenav from './AdminSidenav';
import TendersTab from './AdminComponents/TendersTab';

function AllTenders() {
    if (!localStorage.getItem('token')) return <Redirect to='/login' />
    return (
        <div>
            <AdminSidenav />
            <TendersTab />
        </div>
    )
}

export default AllTenders