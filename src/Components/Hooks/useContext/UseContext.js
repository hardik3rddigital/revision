import React from "react";
import UseContextA from "./UseContextA";
import UseContextInOnePage from "./UseContextInOnePage";

const UserContextUseContext = React.createContext();
const MultipleContextUseContext = React.createContext();

const CustomData = {
  name: "Hardik Patel",
  component: "UseContext",
};

const MultipleCustomData = {
  nickname: "H D Satapara",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

function UseContext() {
  return (
    <>
      <h5>Hello I am UseContext Components</h5>
      <UserContextUseContext.Provider value={CustomData}>
        <MultipleContextUseContext.Provider value={MultipleCustomData}>
          <UseContextA />
          <div className="container shadow p-3 border">
            <UseContextInOnePage />
          </div>
        </MultipleContextUseContext.Provider>
      </UserContextUseContext.Provider>
    </>
  );
}

export default UseContext;

export { UserContextUseContext, MultipleContextUseContext };
