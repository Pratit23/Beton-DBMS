import React from 'react';
import ScratchCard from 'react-scratchcard';

const settings = {
    width: 640,
    height: 480,
    image: 'https://images.unsplash.com/photo-1594151615781-0404e534ca20?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNjcmF0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    finishPercent: 80,
    onComplete: () => console.log('The card is now clear!')
};

const ScarthCard = () => {
    return (
        <ScratchCard {...settings}>
            Congratulations! You WON!
        </ScratchCard>
    )
}

export default ScarthCard
