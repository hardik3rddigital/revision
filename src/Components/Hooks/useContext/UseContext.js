import React from "react";
import UseContextA from "./UseContextA";

const UserContextUseContext = React.createContext();

const CustomData = 
  {
    name: "Hardk Patel",
    component: "UseContext",
  }


function UseContext() {
  return (
    <>
      <h5>Hello I am UseContext Components</h5>
      <UserContextUseContext.Provider value={CustomData}>
        <UseContextA />
      </UserContextUseContext.Provider>
    </>
  );
}

export default UseContext;

export {UserContextUseContext}