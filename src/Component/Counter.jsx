
import React, { useState, useRef, useEffect } from "react";

export default function Counter() {
  const [timer, setTimer] = React.useState(0);
  const [timerloop, setTimerloop] = React.useState(false);
  const id = React.useRef(null);
  var test = "";
  const clear = () => {
    window.clearInterval(id.current);
  };
  const statTime = () => {
    setTimerloop(true);
  };

  React.useEffect(() => {
    if (timerloop === true) {
      id.current = window.setInterval(() => {
        setTimer((time) => time + 1);
      }, 1000);
    }
    return () => clear();
  }, [timerloop]);

  const reset = () => {
    setTimer(0);
    setTimerloop(false);
  };

  const stopTime = () => {
    setTimerloop(false);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{timer}</p>
      <p>{test}</p>
      <button onClick={statTime}>Start Time</button>

      <button onClick={stopTime}>stop time</button>

      <button onClick={reset}>reset</button>
    </div>
  );
}
