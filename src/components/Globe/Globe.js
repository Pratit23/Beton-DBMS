import React, { useEffect } from 'react'
import Globe from 'globe.gl';
import Dataset from './datasets/india_test.csv'

const GlobeJS = () => {
    useEffect(() => {
        window.$(document).ready(function(){

            const weightColor = window.d3.scaleSequentialSqrt(window.d3.interpolateYlOrRd)
                .domain([0, 1e7]);
    
            const world = Globe()
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
    
            fetch(Dataset).then(res => res.text())
                .then(csv => {console.log("csv:", csv); return window.d3.csvParse(csv, ({ lat, lng, pop }) => ({ lat: +lat, lng: +lng, pop: +pop }))})
                .then(data => world.hexBinPointsData(data));
    
            // Add auto-rotation
            world.controls().autoRotate = true;
            world.controls().autoRotateSpeed = 0.6;
        })
    }, [])
    return (
        <div>
            <div id="globeViz"></div>
        </div>
    )
}

export default GlobeJS
