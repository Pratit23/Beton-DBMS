import React, { useEffect, useState } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon } from "react-google-maps"
import { compose, withStateHandlers } from 'recompose'
import { geolocated } from "react-geolocated";



const MapContainer = ({ getCoords }) => {

  var coords = [0, 0]
  var zoomLevel = 10

  const Map = compose(
    geolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    }),
    withStateHandlers(() => ({
      isMarkerShown: false,
      markerPosition: null
    }), {
      onMapClick: ({ isMarkerShown }) => (e) => (
        {
          markerPosition: e.latLng,
          isMarkerShown: true
        })
    }),
    withScriptjs,
    withGoogleMap
  )
    (props => {
      if (props.markerPosition && props.markerPosition.lat() && props.markerPosition.lng()) {
        coords = [props.markerPosition.lat(), props.markerPosition.lng()]
      }
      getCoords(coords)
      return (
        <GoogleMap
          defaultZoom={zoomLevel}
          defaultCenter={console.log(props), props.coords ? { lat: props.coords.latitude, lng: props.coords.longitude } : { lat: 19.073880, lng: 72.849062 }}
          onClick={props.onMapClick}
          options={{
            styles: [
              { elementType: "geometry", stylers: [{ color: "#1c1b21" }] },
              { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
              { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#ffffff" }],
              },
              {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#3f3f48" }],
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
              },
              {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#090909" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#090909" }],
              },
            ]
          }}
        >
          {props.isMarkerShown && <Marker position={props.markerPosition} />}

        </GoogleMap>
      )
    }
    )

  return (
    <div style={{ height: '100%' }}>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `50vh` }} />}
        mapElement={<div style={{ height: `100%`, borderRadius: `24px` }} />}
      />

    </div>
  )
}

export default MapContainer
