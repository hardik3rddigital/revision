import React, { Component } from "react";
import ConTextC from "./ConTextC";
import { UserContextProvider } from "./UserContext";

export class ConText extends Component {
  render() {
    return (
      <div>
        <h5>Hello I am Context Components</h5>
        <UserContextProvider value='Hardik Patel'>
          <ConTextC />
        </UserContextProvider>
      </div>
    );
  }
}

export default ConText;


// 