import React, { useEffect } from 'react'
import Globe from 'globe.gl';
import Dataset from './datasets/ne_110m_admin_0_countries.geojson';
import DatasetCSV from'./datasets/india_test.csv';
import MapImage from '../../images/mapImage.jpg';
// import LandingButton from '../Buttons/LandingButton';
import GenericButton from '../Buttons/GenericButton';

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
        <div id="globeWrapper" className="row" style={{overflow: "hidden", background: "#000011", marginBottom: "0"}} >
            <div id="intro" className="col s12 m5 valign-wrapper" style={{ zIndex: "2", height: "100vh", position: "relative" }}>
                <div id="homeMotto" style={{ paddingLeft: "20px" }}>
                    <h2 className="white-text right-align">Beton</h2>
                    <h4 className="white-text right-align">Be the change you wan't to see</h4>
                    <h6 className="white-text right-align">
                        Beton helps people raise their concerns to help make India into a better place.
                        Be the change!
                    </h6>
                    <GenericButton text="Get Started" id="CTA" />
                </div>
            </div>
            <div id="globeViz" className="col s12 m7" style={{ position: "relative", left: "-150px" }}></div>
        </div>
    )
}

export default GlobeJS

