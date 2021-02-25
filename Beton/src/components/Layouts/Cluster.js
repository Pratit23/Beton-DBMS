import React from 'react'
// import ClusterTesting from '../Maps/ClusterTest'
import Sidenav from '../Layouts/Sidenav'
import { Redirect } from 'react-router-dom'
import DemoApp from '../Maps/MainThingNow';

const Cluster = () => {
    if(!localStorage.getItem('token')) return <Redirect to='/login' />
    return (
        <div>
            <Sidenav />
            {/* <ClusterTesting
                
                defaultOptions={{ scaleControl: true }}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w&libraries=visualization,drawing,geometry,places`}
                loadingElement={<div id="main" style={{ height: '100%' }}>Loading..</div>}
                containerElement={<div id="main" style={{ height: '100vh' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            /> */}
            <DemoApp />
        </div>
    )
}

export default Cluster
