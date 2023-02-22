import React, { Component } from "react";

class UseRefHookClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1,
      }));
    }, 1000);
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h5>Hello I am UseRefHookClassTimer Components <span className="text-dark">(Using Class Component)</span></h5>
        <h5>Class Timer : {this.state.timer}</h5>
        <button className="btn btn-primary" onClick={() => clearInterval(this.interval)}>Clear Timer</button>
      </>
    );
  }
}

export default UseRefHookClassTimer;
