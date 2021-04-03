import React, { useEffect, useState } from 'react'
import { graphql } from 'react-apollo';
import { flowRight as composey, toInteger } from 'lodash';
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
        loadingElement: <div id="main" style={{ height: `100%`, borderRadius: '24px' }}>Loading...</div>,
        containerElement: <div id="main" style={{ height: '80vh', width: '90%', borderRadius: '24px', marginLeft: '0' }} />,
        mapElement: <div style={{ height: '100%', borderRadius: '24px' }} />,
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
        defaultZoom={10}
        defaultCenter={{ lat: Number(((props.baseReports[0].location).split(" "))[0]), lng: Number(((props.baseReports[0].location).split(" "))[1]) }}
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
            {
                console.log("Props in tendermap: ", props),
                props.baseReports && props.baseReports.map(marker => {
                    return (
                        <>
                            {
                                marker.similar.map((mark, k) => {
                                    console.log("Mark: ", mark)
                                    var tempArray = mark.location.split(" ")
                                    var lat = Number(tempArray[0])
                                    var lng = Number(tempArray[1])
                                    return (
                                        <Marker
                                            key={k}
                                            position={{ lat: lat, lng: lng }}
                                        />
                                    )
                                })
                            }
                        </>
                    )
                })}
        </MarkerClusterer>
    </GoogleMap>
);

const TenderMap = (props) => {
    const [markers, setMarkers] = useState([])
    useEffect(() => {

    }, [props])

    return (
        <MapWithAMarkerClusterer baseReports={props.baseReports} />
    )
}


export default TenderMap;