import React, { useState, useEffect } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, Polygon } from "react-google-maps";
import MapStyles from '../../../Maps/GoogleMapStyles'
import { geolocated } from "react-geolocated";
import { flowRight as compose } from 'lodash';

const Map = withScriptjs(
    withGoogleMap(props => (
        console.log("Specif", props),
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: Number(props.source.split(", ")[0]), lng: Number(props.source.split(", ")[1]) }}
            onClick={e => props.onMapClick(e)}
            options={{
                styles: MapStyles
            }}
        >
            <Polyline
                path={props.coords.map((u) => { return { "lng": u["lat"], "lat": u["lng"] } })}
                // key={key}
                geodesic={true}
                options={{
                    fillColor: "#3772ff",
                    fillOpacity: 0.4,
                    strokeColor: "#3772ff",
                    strokeOpacity: 1,
                    strokeWeight: 2
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
                source={props.source}
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

