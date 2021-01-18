import React, { useEffect } from 'react'
import Globe from 'globe.gl';
import Dataset from './datasets/ne_110m_admin_0_countries.geojson';
import DatasetCSV from'./datasets/india_test.csv';
import MapImage from '../../images/mapImage.jpg';
import LandingButton from '../Buttons/LandingButton';

const GlobeJS = () => {
    const OPACITY = 0.1;
    useEffect(() => {
        window.$(document).ready(function () {

            const weightColor = window.d3.scaleSequentialSqrt(window.d3.interpolateYlOrRd)
                .domain([0, 1e7]);

            // globe 1 - hexed one
            // fetch(Dataset).then(res => res.json()).then(countries => {
            //     const world = Globe()
            //         .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
            //         // .arcLabel(d => `${d.airline}: ${d.srcIata} &#8594; ${d.dstIata}`)
            //         // .arcStartLat(d => +d.srcAirport.lat)
            //         // .arcStartLng(d => +d.srcAirport.lng)
            //         // .arcEndLat(d => +d.dstAirport.lat)
            //         // .arcEndLng(d => +d.dstAirport.lng)
            //         // .arcDashLength(0.25)
            //         // .arcDashGap(1)
            //         // .arcDashInitialGap(() => Math.random())
            //         // .arcDashAnimateTime(4000)
            //         // .arcColor(d => [`rgba(0, 255, 0, ${OPACITY})`, `rgba(255, 0, 0, ${OPACITY})`])
            //         // .arcsTransitionDuration(0)
            //         .hexPolygonsData(countries.features)
            //         .hexPolygonResolution(3)
            //         .hexPolygonMargin(0.3)
            //         .hexPolygonColor(() => `#E1DEE9`)
            //         .hexPolygonLabel(({ properties: d }) => `
            //               <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
            //               Population: <i>${d.POP_EST}</i>
            //             `)
            //         (document.getElementById('globeViz'))
            // });

            // globe 2 - lines one
            var world;
            fetch(DatasetCSV).then(res => res.text())
            .then(csv => {console.log("csv:", csv); return window.d3.csvParse(csv, ({ lat, lng, pop }) => ({ lat: +lat, lng: +lng, pop: +pop }))})
            .then(data => {
                    world = Globe()
                        (document.getElementById('globeViz'))
                        // .globeImageUrl(MapImage)
                        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
                        // .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
                        .hexBinPointWeight('pop')
                        .hexAltitude(d => d.sumWeight * 6e-8)
                        .hexBinResolution(4)
                        .hexTopColor(d => weightColor(d.sumWeight))
                        .hexSideColor(d => weightColor(d.sumWeight))
                        .hexBinMerge(true)
                        .hexBinPointsData(data)
                        .enablePointerInteraction(false); // performance improvement
                    
                    // auto rotate thingy
                    world.controls().autoRotate = false;
                    world.controls().autoRotateSpeed = -0.5;
                });
        })
    }, []);

    return (
        <div id="globeWrapper" className="row valign-wrapper" style={{overflow: "hidden", background: "#000011", marginBottom: "0"}} >
            <div id="intro" className="col s12 m3" style={{ marginBottom: "80px" }}>
                <h1 className="white-text right-align">Beton</h1>
                <h6 className="white-text right-align">Some catchy headline here...</h6>
                <LandingButton />
            </div>
            <div id="globeViz" className="col s12 m9"></div>
        </div>
    )
}

export default GlobeJS
