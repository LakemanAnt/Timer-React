import React from "react";
import "./Timer.css";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, speed: 1000, flag: false };
  }

  addTime(item) {
    this.setState({ ...this.state, time: this.state.time + item });
  }

  startTimer() {
    this.setState({ ...this.state, flag: true });
    const timer = setInterval(() => {
      this.setState((prev) => ({ ...prev, time: this.state.time - 1 }));
      if (this.state.time <= 0) {
        this.setState({ ...this.state, flag: false });
        clearInterval(timer);
      }
    }, this.state.speed);
  }
  render() {
    return (
      <div className="timer">
        <div className="title">Time</div>
        <div className="time">{this.state.time}</div>
        <button
          className="m-1 btn btn-info"
          onClick={this.addTime.bind(this, 1)}
        >
          Add time
        </button>
        <button
          className="m-1 btn btn-primary"
          onClick={this.startTimer.bind(this)}
          disabled={this.state.flag}
        >
          Start
        </button>
        <input
          style={{ margin: "0 auto" }}
          className="form-control col-3"
          type="text"
          value={this.state.speed}
          onChange={(event) =>
            this.setState({ ...this.state, speed: event.target.value })
          }
        />
      </div>
    );
  }
}
