import React from 'react';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};
const TimerCounter = (props) => {
  return (
    <>
      <CountdownCircleTimer
        key={props.keyName}
        isPlaying
        duration={10}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
        size={150}
        onComplete={() => [true, 0]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </>
  );
};

export default TimerCounter;
