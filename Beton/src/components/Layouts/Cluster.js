import React from 'react'
// import ClusterTesting from '../Maps/ClusterTest'
import Sidenav from '../Layouts/Sidenav'
import { Redirect } from 'react-router-dom'
import DemoApp from '../Maps/MainThingNow';
import AdCard from '../Cards/AdCard';

const Cluster = () => {
    if (!localStorage.getItem('token')) return <Redirect to='/login' />
    return (
        <div>
            <Sidenav />
            <DemoApp />
            <AdCard />
        </div>
    )
}

export default Cluster
