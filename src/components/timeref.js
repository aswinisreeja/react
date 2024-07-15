import React, { useState, useRef } from 'react';

function Timer() {
  const [count, setCount] = useState(0); 
  const timerIdRef = useRef(null);

  const startTimer = () => {
    if (timerIdRef.current === null) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000); 
    }
  };

  const stopTimer = () => {
    if (timerIdRef.current !== null) {
      clearInterval(timerIdRef.current); 
      timerIdRef.current = null;
    }
  };

  return (
    <div>
      <p>Timer: {count}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default Timer;
