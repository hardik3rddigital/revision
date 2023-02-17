import React, { Component } from "react";

export class ErrorBoundaryUser extends Component {
  render() {
    // if (true) {
    //   throw new Error("Custom New Error")
    // }

    return (
      <>
        <h5>Hello I am ErrorBoundaryUser Components</h5>
      </>
    );
  }
}

export default ErrorBoundaryUser;
