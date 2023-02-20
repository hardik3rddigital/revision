import React, { Component } from "react";
import RenderPropsClick from "./RenderPropsClick";
import RenderPropsHover from "./RenderPropsHover";
// import RenderPropsUser from "./RenderPropsUser";
import RenderPropsCounter from "./RenderPropsCounter";

export default class RenderProps extends Component {


  render() {
    return (
      <>
        <h5>Hello I am RenderProps Components</h5>
        {/* <RenderPropsClick />
        <RenderPropsHover />
        <RenderPropsUser render={(isLoggedIn)=> isLoggedIn ? "Hardik Patel" : 'Guest'} /> */}
        <RenderPropsCounter render={(count,incrementCount)=> <RenderPropsClick count={count} incrementCount={incrementCount} />   } />
        <RenderPropsCounter render={(count,incrementCount)=> <RenderPropsHover count={count} incrementCount={incrementCount} />   } />

      </>
    );
  }
}
