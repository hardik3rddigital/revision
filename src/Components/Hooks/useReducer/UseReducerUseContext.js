import React, { useReducer } from "react";
import UseReducerContext1 from "./UseReducerContext1";
import UseReducerContext2 from "./UseReducerContext2";
import UseReducerContext3 from "./UseReducerContext3";

const intialState = 0;
const funcationname = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return intialState;
    default:
      return state;
  }
};

export const ReducerContext = React.createContext();

function UseReducerUseContext() {
  const [count, dispatch] = useReducer(funcationname, intialState);
  return (
    <>
      <ReducerContext.Provider value={{countState : count, countDispatch : dispatch}}>
        <h5>Hello I am UseReducerUseContext Components</h5>
        <h5>Counter : {count}</h5>
        <UseReducerContext1 />
        <UseReducerContext2 />
        <UseReducerContext3 />
      </ReducerContext.Provider>
    </>
  );
}

export default UseReducerUseContext;
