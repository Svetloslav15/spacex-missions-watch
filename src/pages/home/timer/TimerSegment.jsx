import React from 'react';

const TimerSegment = ({content, type}) => {
    return (
        <div className="column-display">
            <span className="font-size-36">{content}</span>
            <span className="font-size-22">{type}</span>
        </div>
    );
};

export default TimerSegment;