import React, { useState, useEffect } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import AddTender from "./AddTender";
import MapStyles from '../../../Maps/GoogleMapStyles'
import { geolocated } from "react-geolocated";
import { flowRight as compose } from 'lodash';
import { graphql, useLazyQuery } from 'react-apollo';
import { isOnLinev2 } from '../../../../queries/query'

const Map = withScriptjs(
    withGoogleMap(props => (
        console.log("Map props: ", props),
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 15.99469601380641, lng: 73.68452 }}
            onClick={e => props.onMapClick(e)}
            options={{
                styles: MapStyles
            }}
        >
            {props.marks.map((mark, index) => (
                <Marker key={index} position={mark} />
            ))}
            {
                props.showDirec ?
                    <DirectionsRenderer
                        directions={props.directions}
                    /> : null
            }
        </GoogleMap>
    ))
);

var coords = []

const AddTenderMap = (props) => {

    const [marks, setMarks] = useState([])
    const [directions, setDirections] = useState(null)
    const [showDirections, setShowDirections] = useState(props.showDirec)

    const setMark = e => {
        console.log("E: ", e)
        if (marks.length < 2) {
            setMarks(prevMarks => [...prevMarks, e.latLng]);
        }
    };

    useEffect(() => {
        if (props.showDirec == false) {
            setMarks([])
        }
    })

    const [isOnv2, { called, loading, data }] = useLazyQuery(
        isOnLinev2,
        {
            variables: {
                encoded: coords
            }
        }
    );

    const getDirection = async () => {
        if (marks.length > 1) {

            const directionsService = new window.google.maps.DirectionsService();

            const origin = { lat: marks[0].lat(), lng: marks[0].lng() };
            const destination = { lat: marks[1].lat(), lng: marks[1].lng() };

            directionsService.route(
                {
                    origin: origin,
                    destination: destination,
                    travelMode: window.google.maps.TravelMode.DRIVING
                },
                (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        setDirections(result)
                        setShowDirections(true)
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );

            const lat = marks[0].lat()
            const lng = marks[0].lng()
            const lat1 = marks[1].lat()
            const lng1 = marks[1].lng()
            const fromName = lat + "," + lng
            const toName = lat1 + "," + lng1
            let resp = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=${fromName}&destination=${toName}&mode=driving&key=AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w`)
            let respJson = await resp.json()
            console.log("JSON response: ", respJson)

            const routeData = {
                distance: respJson.routes[0].legs[0].distance.text,
                start_address: respJson.routes[0].legs[0].start_address,
                end_address: respJson.routes[0].legs[0].end_address,
                start_location: respJson.routes[0].legs[0].start_location,
                end_location: respJson.routes[0].legs[0].end_location
            }

            console.log("Route data: ", routeData)

            props.getData(routeData)

            var encoded = respJson.routes[0].legs[0].steps.map((obj, key) => {
                return obj.polyline.points
            })

            props.getEncoded(encoded)

            coords = [...encoded]
            isOnv2();

            if (called && loading) {
                console.log("Patience is virtue")
            }

            console.log("Encoded: ", encoded)
        }
    }

    if (data) {
        var num = data.isOnLinev2.length
        console.log("Data1: ", data)
        console.log("Num: ", num)
        props.getNumPotholes(num, data)
    }

    useEffect(() => {
        getDirection()
    }, [marks])

    return (
        <div>
            {
                console.log("Show directioins: ", showDirections)
            }
            <Map
                googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w"
                loadingElement={<div style={{ height: `100%`, borderRadius: '24px' }} />}
                containerElement={<div style={{ height: `400px`, borderRadius: '24px' }} />}
                mapElement={<div style={{ height: `100%`, borderRadius: '24px' }} />}
                onMapClick={(e) => setMark(e)}
                marks={marks}
                directions={directions}
                showDirec={props.showDirec}
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
)(AddTenderMap)

