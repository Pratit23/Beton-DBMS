import React from 'react';
import { Redirect } from 'react-router-dom'
import AdminSidenav from './AdminSidenav';
import DemoApp from '../../Maps/MainThingNow';

function Verified() {
    if (!localStorage.getItem('token')) return <Redirect to='/login' />
    return (
        <div>
            <AdminSidenav />
            <DemoApp />
        </div>
    )
}

export default Verified
