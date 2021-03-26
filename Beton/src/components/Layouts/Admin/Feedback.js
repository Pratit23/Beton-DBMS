import React from 'react';
import { Redirect } from 'react-router-dom'
import AdminSidenav from './AdminSidenav';
import DemoApp from './AdminComponents/FeedbackMap';

function Feedback() {
    if (!localStorage.getItem('token')) return <Redirect to='/login' />
    return (
        <div>
            <AdminSidenav />
            <DemoApp />
        </div>
    )
}

export default Feedback
