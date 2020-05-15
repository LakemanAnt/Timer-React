import React, { useState, useEffect, useRef } from "react";

export default function TimerFunc() {
  const [time, setTime] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [flag, setFlag] = useState(false);

  const startTimer = function () {
    setFlag(true);
    const timer = setInterval(() => {
      console.log(time);
      setTime((prev) => prev - 1);
      if (time <= 0) {
        setFlag(false);
        clearInterval(timer);
      }
    }, speed);
  };
  //   const startTimer = function () {
  //     setFlag(true);
  //     const timer = setTimeout(function action() {
  //       console.log(time);
  //       setTime((prev) => prev - 1);
  //       if (time <= 0) {
  //         setFlag(false);
  //         return;
  //       }
  //       setTimeout(action, speed);
  //     });
  //   };

  useEffect(() => {
    console.log(speed);
    inputRef.current.click();
  }, [speed]);

  const inputRef = useRef(null);

  return (
    <div className="timer">
      <div className="title">Time</div>
      <div className="time">{time}</div>
      <button
        ref={inputRef}
        className="m-1 btn btn-info"
        onClick={() => setTime(time + 1)}
      >
        Add time
      </button>
      <button
        className="m-1 btn btn-primary"
        onClick={startTimer}
        disabled={flag}
      >
        Start
      </button>
      <input
        style={{ margin: "0 auto" }}
        className="form-control col-3"
        type="text"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />
    </div>
  );
}
