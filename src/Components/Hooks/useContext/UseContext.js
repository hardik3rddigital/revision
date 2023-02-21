import React from "react";
import UseContextA from "./UseContextA";

const UserContextUseContext = React.createContext();
const MultipleContextUseContext = React.createContext();

const CustomData = {
  name: "Hardk Patel",
  component: "UseContext",
};

const MultipleCustomData = {
  nickname: "H D Satapara",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

function UseContext() {
  return (
    <>
      <h5>Hello I am UseContext Components</h5>
      <UserContextUseContext.Provider value={CustomData}>
        <MultipleContextUseContext.Provider value={MultipleCustomData}>
          <UseContextA />
        </MultipleContextUseContext.Provider>
      </UserContextUseContext.Provider>
    </>
  );
}

export default UseContext;

export { UserContextUseContext,MultipleContextUseContext };
