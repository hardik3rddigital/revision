import React, { Component } from "react";

export class RenderPropsHover extends Component {
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
    //console.log(count);
    return <h5 onMouseOver={incrementCount} className="mt-2">Hover {count} Times</h5>;
  }
}

export default RenderPropsHover;
