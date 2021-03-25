import React from 'react';
import AdminHomepageSide from './AdminHomepageSide';
import AdminSidenav from './AdminSidenav';

const AdminHomepage = () => {
    return (
        <div>
            <AdminSidenav />
            <AdminHomepageSide />
        </div>
    )
}

export default AdminHomepage
