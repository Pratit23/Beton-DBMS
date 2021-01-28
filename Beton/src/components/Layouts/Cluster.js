import React from 'react'
import ClusterTesting from '../Maps/ClusterTest'
import Sidenav from '../Layouts/Sidenav'

const Cluster = () => {
    return (
        <div>
            <div className="row">
                <div className="col s3" style={{height: "100vh", backgroundColor : "black"}}>
                    <Sidenav />
                </div>
                <div className="col s9" style={{padding: "0"}}>
                    <ClusterTesting
                        defaultOptions={{ scaleControl: true }}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w&libraries=visualization,drawing,geometry,places`}
                        loadingElement={<div style={{ height: '100%' }}>Loading..</div>}
                        containerElement={<div style={{ height: '100vh' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default Cluster
