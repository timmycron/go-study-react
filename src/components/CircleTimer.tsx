import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const CircleTimer = () => {
    return (
        <CountdownCircleTimer
            isPlaying
            duration={10}
            colors="#A30000"
            onComplete={() => {
                // do your stuff here
                return { shouldRepeat: true, delay: 1.5 } // repeat animation in 1.5 seconds
            }}
        />
    );
};

export default CircleTimer;