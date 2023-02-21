import React, { useReducer } from "react";
const intialState = {
    firstCounter : 0
};
const funcationname = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {firstCounter : state.firstCounter + 1};
    case "Decrement":
        return {firstCounter : state.firstCounter - 1 };
    case "Reset":
      return intialState;
    default:
      return state;
  }
};

function UseReducerCounterType() {
  const [count, dispatch] = useReducer(funcationname, intialState);

  return (
    <>
      <h5>Hello I am UseReducerCounter Components <span className="text-dark">(Dispatch in object type)</span></h5>
      <h5>Counter : {count.firstCounter }</h5>
      <button
        className="btn btn-primary mx-2 ms-0"
        onClick={() => dispatch({ type: "Increment" })}
      >
        Increment
      </button>
      <button
        className="btn btn-primary mx-2 ms-0"
        onClick={() => dispatch({ type: "Decrement" })}
      >
        Decrement
      </button>
      <button
        className="btn btn-primary mx-2 ms-0"
        onClick={() => dispatch({ type: "Reset" })}
      >
        Reset
      </button>
    </>
  );
}

export default UseReducerCounterType;
