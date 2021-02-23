import React, { useEffect } from 'react';
import Brush from './images/brush.png'
import './styles.scss'

const ScarthCard = () => {

    useEffect(() => {
        (function () {

            'use strict';

            var isDrawing, lastPoint;
            var container = document.getElementById('js-container'),
                canvas = document.getElementById('js-canvas'),
                canvasWidth = canvas.width,
                canvasHeight = canvas.height,
                ctx = canvas.getContext('2d'),
                image = new Image(),
                brush = new Image();

            // base64 Workaround because Same-Origin-Policy
            image.src = "https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80"
            image.crossOrigin = "Anonymous";
            image.setAttribute('crossOrigin', '');
            image.onload = function () {
                ctx.drawImage(image, 0, 0);
                // Show the form when Image is loaded.
                document.querySelectorAll('.form')[0].style.visibility = 'visible';
            };
            brush.src = Brush
            canvas.addEventListener('mousedown', handleMouseDown, false);
            canvas.addEventListener('touchstart', handleMouseDown, false);
            canvas.addEventListener('mousemove', handleMouseMove, false);
            canvas.addEventListener('touchmove', handleMouseMove, false);
            canvas.addEventListener('mouseup', handleMouseUp, false);
            canvas.addEventListener('touchend', handleMouseUp, false);

            function distanceBetween(point1, point2) {
                return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
            }

            function angleBetween(point1, point2) {
                return Math.atan2(point2.x - point1.x, point2.y - point1.y);
            }

            // Only test every `stride` pixel. `stride`x faster,
            // but might lead to inaccuracy
            function getFilledInPixels(stride) {
                    if (!stride || stride < 1) { stride = 1; }

                    var pixels = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
                        pdata = pixels.data,
                        l = pdata.length,
                        total = (l / stride),
                        count = 0;

                    // Iterate over all pixels
                    for (var i = count = 0; i < l; i += stride) {
                        if (parseInt(pdata[i]) === 0) {
                            count++;
                        }
                    }

                    return Math.round((count / total) * 100);

            }

            function getMouse(e, canvas) {
                try {
                    var offsetX = 0, offsetY = 0, mx, my;

                    if (canvas.offsetParent !== undefined) {
                        do {
                            offsetX += canvas.offsetLeft;
                            offsetY += canvas.offsetTop;
                        } while ((canvas = canvas.offsetParent));
                    }

                    mx = (e.pageX || e.touches[0].clientX) - offsetX;
                    my = (e.pageY || e.touches[0].clientY) - offsetY;

                    return { x: mx, y: my };
                } catch (err) {
                    // do nothing
                }
            }

            function handlePercentage(filledInPixels) {
                console.log(filledInPixels)
                filledInPixels = filledInPixels || 0;
                console.log(filledInPixels + '%');
                if (filledInPixels > 50) {
                    canvas.parentNode.removeChild(canvas);
                }
            }

            function handleMouseDown(e) {
                isDrawing = true;
                lastPoint = getMouse(e, canvas);
            }

            function handleMouseMove(e) {
                if (!isDrawing) { return; }

                e.preventDefault();

                var currentPoint = getMouse(e, canvas),
                    dist = distanceBetween(lastPoint, currentPoint),
                    angle = angleBetween(lastPoint, currentPoint),
                    x, y;

                for (var i = 0; i < dist; i++) {
                    x = lastPoint.x + (Math.sin(angle) * i) - 25;
                    y = lastPoint.y + (Math.cos(angle) * i) - 25;
                    ctx.globalCompositeOperation = 'destination-out';
                    ctx.drawImage(brush, x, y);
                }

                lastPoint = currentPoint;
                handlePercentage(getFilledInPixels(32));
            }

            function handleMouseUp(e) {
                isDrawing = false;
            }

        })();
    }, [])

    return (
        <div className="containerBoah" id="js-container">
            <canvas className="canvas" id="js-canvas" width="300" height="300"></canvas>
            <form className="form" style={{ visibility: "hidden" }}>
                <h2>'Allo, 'Allo!</h2>
                <h3>The secret code is:</h3>
                <h1><code>HlkafSYc</code></h1>
                <br />
            </form>
        </div>
    )
}

export default ScarthCard
