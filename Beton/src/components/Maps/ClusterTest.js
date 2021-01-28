import React, { useState, useRef } from 'react'
import {
  Marker,
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps'
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'

import SearchBox from './SearchBox'
import MarkerCarrierIcon from './MarkerCarrierIcon'
import list from './list'

const ClusterTest = withScriptjs(
  withGoogleMap(props => {
    const mapRef = useRef(null)
    const [zoom, setZoom] = useState(7)
    const [marker, setMarker] = useState({ hasMarker: false, position: {} })
    const [center, setCenter] = useState({ lat: -15, lng: -54.645636 })

    const handlePlacesChanged = place => {
      setZoom(16)
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      })
      setMarker({
        hasMarker: true,
        position: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
      })
    }

    return (
      <GoogleMap
        zoom={zoom}
        ref={mapRef}
        center={center}
        defaultOptions={props.defaultOptions}
        onDragEnd={() => setCenter(mapRef.current.getCenter())}
        onZoomChanged={() => setZoom(mapRef.current.getZoom())}
        options={{
            styles: [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#212121"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#212121"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "administrative.country",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "administrative.locality",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "administrative.locality",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "administrative.neighborhood",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#181818"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#1b1b1b"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#2c2c2c"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#8a8a8a"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#373737"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#3c3c3c"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#4e4e4e"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#000000"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#3d3d3d"
                    }
                  ]
                }
              ]
          }}
      >
        {/*<SearchBox onPlacesChanged={handlePlacesChanged} />*/}
        {marker.hasMarker && <Marker position={marker.position} />}

        <MarkerClusterer
          averageCenter
          calculator={markerClustererCalculator}
          enableRetinaIcons
          gridSize={30}
          tracksViewChanges={false}
        >
          {list.map((lac, index) => (
            <MarkerCarrierIcon key={index} lac={lac} />
          ))}
        </MarkerClusterer>
      </GoogleMap>
    )
  }),
)

export default ClusterTest

// https://nooshu.github.io/blog/2012/10/03/marker-cluster-calculator-for-google-maps-v3/
const markerClustererCalculator = (markers, numStyles) => {
  const index = markers.find(marker => marker.icon.condition === 'anormal')
    ? 3
    : markers.find(marker => marker.icon.condition === 'alerta')
    ? 2
    : markers.find(marker => marker.icon.condition === 'normal')
    ? 1
    : 4

  return {
    index: index,
    text: markers.length,
  }
}
