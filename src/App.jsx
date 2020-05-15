import React from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";
import TimerFunc from "./components/TimerFunc/TimerFunc";

function App() {
  return (
    <div className="App">
      <h1>Class</h1>
      <Timer />
      <h1>Function</h1>
      <TimerFunc />
    </div>
  );
}

export default App;
