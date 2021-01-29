(function () {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    [].slice.call(document.querySelectorAll('.isolayer')).forEach(function (el) {
        new IsoGrid(el, {
            type: 'scrollable',
            transform: 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
            stackItemsAnimation: {
                properties: function (pos) {
                    return {
                        translateZ: (pos + 1) * 50,
                        rotateZ: getRandomInt(-3, 3)
                    };
                },
                options: function (pos, itemstotal) {
                    return {
                        type: dynamics.bezier,
                        duration: 500,
                        points: [{ "x": 0, "y": 0, "cp": [{ "x": 0.2, "y": 1 }] }, { "x": 1, "y": 1, "cp": [{ "x": 0.3, "y": 1 }] }],
                        //delay: (itemstotal-pos-1)*40
                    };
                }
            },
            onGridLoaded: function () {
                classie.add(document.body, 'grid-loaded');
            }
        });
    })
})();