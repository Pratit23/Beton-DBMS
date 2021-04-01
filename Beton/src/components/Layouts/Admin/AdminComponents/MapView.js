import React from 'react'
import MapStyles from '../../../Maps/GoogleMapStyles'
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
        loadingElement: <div id="main" style={{ height: `75%`, width: "100%", margin: "0" }}>Loading...</div>,
        containerElement: <div id="main" style={{ height: '75vh', width: "100%", margin: "0" }} />,
        mapElement: <div style={{ height: '75%', width: "100%", margin: "0", borderRadius: "24px" }} />,
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
        defaultZoom={15}
        defaultCenter={{ lat: Number(props.latitude), lng: Number(props.longitude) }}
        options={{
            styles: MapStyles
        }}
    >
        <MarkerClusterer
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            <Marker
                key="1234"
                position={{ lat: Number(props.latitude), lng: Number(props.longitude) }}
            />
        </MarkerClusterer>
    </GoogleMap>
);

export default MapWithAMarkerClusterer;