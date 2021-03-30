import React, { useEffect } from 'react'
import DatasetCSV from './datasets/india_test.csv';
import GenericButton from '../Buttons/GenericButton';
import Typing from '../Layouts/Landing/Interactive/Typing';

const GlobeJS = () => {
    const OPACITY = 0.1;
    useEffect(() => {
        window.$(document).ready(function () {

            // TODO: figure this shit out
            const weightColor = window.d3.scaleSequentialSqrt(window.d3.interpolateYlOrRd)
                .domain([0, 1e7]);

            const world = window.Globe()
                (document.getElementById('globeViz'))
                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
                // .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
                .hexBinPointWeight('pop')
                .hexAltitude(d => d.sumWeight * 6e-8)
                .hexBinResolution(4)
                .hexTopColor(d => weightColor(d.sumWeight))
                .hexSideColor(d => weightColor(d.sumWeight))
                .hexBinMerge(true)
                .enablePointerInteraction(false); // performance improvement

            fetch(DatasetCSV).then(res => res.text())
                .then(csv => window.d3.csvParse(csv, ({ lat, lng, pop }) => ({ lat: +lat, lng: +lng, pop: +pop })))
                .then(data => world.hexBinPointsData(data));

            // Add auto-rotation
            world.controls().autoRotate = true;
            world.controls().autoRotateSpeed = -0.35;
        });

    }, []);

    return (
        <div id="globeWrapper" className="row" style={{ overflow: "hidden", background: "#000011", marginBottom: "0" }} >
            <div id="intro" className="col s12 m4 offset-m1" style={{ zIndex: "2", height: "100vh", position: "relative" }}>
                <div id="homeMotto" style={{ paddingLeft: "20px", width: "100%", marginTop: "150px" }}>
                    <h2 className="white-text left-align" style={{ width: "100%" }} >
                        Be the change
                        <Typing />
                    </h2>
                    {/* <h6 className="white-text right-align">
                        Beton helps people raise their concerns to help make India into a better place.
                        Be the change!
                    </h6> */}
                    <br />
                    <p className="white-text lighten-2">
                        Beton helps people raise their concerns to help make India into a better place.
                    </p>
                    <GenericButton text="Get Started" id="CTA" link="signup" />
                </div>
            </div>
            <div id="globeViz" className="col s12 m7" style={{ position: "relative", left: "-150px" }}></div>
        </div>
    )
}

export default GlobeJS

