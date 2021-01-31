(function () {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    new IsoGrid(document.querySelector('.isolayer--deco3'), {
        transform: 'translateX(40vw) translateY(100px) rotateX(15deg) rotateY(0) rotateZ(40deg)',
        stackItemsAnimation: {
            properties: function (pos) {
                return {
                    rotateY: pos * -15
                };
            },
            options: function (pos, itemstotal) {
                return {
                    type: dynamics.bezier,
                    duration: 500,
                    points: [{ "x": 0, "y": 0, "cp": [{ "x": 0.2, "y": 1 }] }, { "x": 1, "y": 1, "cp": [{ "x": 0.3, "y": 1 }] }],
                    delay: (itemstotal - pos - 1) * 40
                };
            }
        }
    });
})();