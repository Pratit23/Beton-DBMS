import React from 'react'
import { Redirect } from 'react-router-dom'
import AdminSidenav from './AdminSidenav';
import UsersTab from './AdminComponents/UsersTab';

function AllUsers() {
    if (!localStorage.getItem('token')) return <Redirect to='/login' />
    return (
        <div>
            <AdminSidenav />
            <UsersTab />
        </div>
    )
}

export default AllUsers
