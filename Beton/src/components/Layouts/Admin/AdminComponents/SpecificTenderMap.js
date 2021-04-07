import React, { useState, useEffect } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
import MapStyles from '../../../Maps/GoogleMapStyles'
import { geolocated } from "react-geolocated";
import { flowRight as compose } from 'lodash';

const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 15.99469601380641, lng: 73.68452 }}
            onClick={e => props.onMapClick(e)}
            options={{
                styles: MapStyles
            }}
        >
            <Polyline
                path={props.coords}
                // key={key}
                geodesic={true}
                options={{
                    fillColor: "blue",
                    fillOpacity: 0.4,
                    strokeColor: "#145BA9",
                    strokeOpacity: 1,
                    strokeWeight: 1
                }}
            />
        </GoogleMap>

    ))
);


const SpecificTenderMap = (props) => {

    return (
        <div>
            <Map
                googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w"
                loadingElement={<div style={{ height: `100%`, borderRadius: '24px' }} />}
                containerElement={<div style={{ height: `400px`, borderRadius: '24px' }} />}
                mapElement={<div style={{ height: `100%`, borderRadius: '24px' }} />}
                coords={[...props.coords]}
            />
        </div>
    );
}


export default compose(
    geolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    }),
)(SpecificTenderMap)

