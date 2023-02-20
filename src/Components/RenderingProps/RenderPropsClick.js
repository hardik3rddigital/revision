import React, { Component } from "react";

export class RenderPropsClick extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // incrementCount = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  render() {
    const {count, incrementCount} = this.props;

    return (
      <div>
        <button className="btn btn-primary" onClick={incrementCount}>
          Cliked {count}  Times
        </button>
      </div>
    );
  }
}

export default RenderPropsClick;
