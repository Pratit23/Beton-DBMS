import React, { useEffect } from 'react'
import MainMap from '../Maps/MainMap'
import Geocode from "react-geocode";

let coords = ''

export default function Chonker() {

    const getCoords = (coord) => {
        console.log("Check this: ", coord)
        coords = coord
        console.log("Selected location: ", coords)
        Geocode.fromLatLng(coords[0], coords[1]).then(
            response => {
                var address = response.results[0].formatted_address;
                console.log("Address: ", address)
                address = address.split(" " || ",")
                console.log("Address array: ", address)
                let specialOnes = [
                    'road',
                    'road,',
                    'Mahamarg',
                    'marg',
                    'Mahamarg,',
                    'marg,',
                    'nh',
                    'nh,',
                    'sh',
                    'sh,',
                    'rd',
                    'rd,',
                    'highway',
                    'highway,',
                    'under',
                    'under,',
                    'pass',
                    'pass,',
                    'hwy',
                    'hwy,',
                    'mh',
                    'mh,',
                    'motorway',
                    'motorway,',
                ]
                

                let isFounded = address.filter( ai => specialOnes.includes(String(ai).toLowerCase()) );
                if(isFounded){
                    console.log("Valid Road")
                }else{
                    console.log("Invalid Road")
                }

            },
            error => {
                console.error("Error fetching the land: ", error);
            })
    }

    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey("AIzaSyBvZX8lKdR6oCkPOn2z-xmw0JHMEzrM_6w");

    // set response language. Defaults to english.
    Geocode.setLanguage("en");

    useEffect(() => {

    }, [])

    return (
        <div>
            <MainMap getCoords={getCoords} />
        </div>
    )
}
