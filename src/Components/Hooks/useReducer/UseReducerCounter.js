import React, { useReducer } from "react";

const intialState = 0;
const funcationname = (state, action) => {
  switch (action) {
    case "Increment": return state + 1;
    case "Decrement": return state - 1;
    case "Reset": return intialState;
    default: return state;
  }
};
function UseReducerCounter() {
  const [count, dispatch] = useReducer(funcationname, intialState);

  return (
    <>
      <h5>Hello I am UseReducerCounter Components</h5>
      <h5>Counter : {count}</h5>
      <button className="btn btn-primary mx-2 ms-0" onClick={() => dispatch('Increment')}>Increment</button>
      <button className="btn btn-primary mx-2 ms-0" onClick={() => dispatch('Decrement')}>Decrement</button>
      <button className="btn btn-primary mx-2 ms-0" onClick={() => dispatch('Reset')}>Reset</button>
    </>
  );
}

export default UseReducerCounter;
