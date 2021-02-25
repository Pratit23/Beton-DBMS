import React, { useEffect, useState } from 'react'
import { graphql } from 'react-apollo';
import { flowRight as composey } from 'lodash';
import { allBaseReports } from '../../queries/query';
import MapStyles from './GoogleMapStyles'
const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");



const MapWithAMarkerClusterer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div id="main"  style={{ height: `100%` }}>Loading...</div>,
        containerElement: <div id="main" style={{ height: '100vh' }} />,
        mapElement: <div style={{ height: '100%' }} />,
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            const clickedMarkers = markerClusterer.getMarkers()
            console.log(`Current clicked markers length: ${clickedMarkers.length}`)
            console.log(clickedMarkers)
        },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
        options={{
            styles: MapStyles
        }}
    >
        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.map(marker => (
                <Marker
                    key={marker.photo_id}
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                />
            ))}
        </MarkerClusterer>
    </GoogleMap>
);

const DemoApp = (props) => {
    const [markers, setMarkers] = useState([])
    useEffect(() => {
        if (props && props.allBaseReports && !props.allBaseReports.loading) {
            let temp = []

            temp = props.allBaseReports.allBaseReports.map(i => {
                let test = {
                    ...i,
                    key: i.id,
                    latitude: Number(i.location.split(" ")[0]),
                    longitude: Number(i.location.split(" ")[1])
                }
                return test;
            })
            setMarkers(temp)
        }
        return () => {
            setMarkers([])
        }
    }, [props])

    return (
        <MapWithAMarkerClusterer markers={markers} />
    )
}


export default composey(
    graphql(allBaseReports, { name: "allBaseReports" })
)(DemoApp);