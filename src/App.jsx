import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  }


  return (
    <>
     <div className="App">
      
      <h1>Stopwatch</h1>
      <div className="stopwatch">
        <p>{formatTime(time)}</p>
        <div className="buttons">
          <button onClick={() => setRunning(true)}>Start</button>
          <button onClick={() => setRunning(false)}>Stop</button>
          <button onClick={() => { setRunning(false); setTime(0); }}>Reset</button>
        </div>
      </div>
    </div>

      
    </>
  )
}

export default App
export {useEffect,useState}
