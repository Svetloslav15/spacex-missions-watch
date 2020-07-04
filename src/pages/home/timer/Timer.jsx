import React from 'react';
import TimerSegment from './TimerSegment';

const Timer = ({timeToNextLaunch}) => {
    return (
        <h3 className="mx-auto row justify-content-center">
            <TimerSegment type='DAYS' content={timeToNextLaunch.days}/> :
            <TimerSegment type='HOURS' content={timeToNextLaunch.hours}/> :
            <TimerSegment type='MINUTES' content={timeToNextLaunch.minutes}/> :
            <TimerSegment type='SECONDS' content={timeToNextLaunch.seconds}/>
        </h3>
    );
};

export default Timer;