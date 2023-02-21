import React, { useReducer } from "react";
const intialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const funcationname = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "IncrementFive":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "DecrementTen":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "Reset":
      return intialState;
    default:
      return state;
  }
};

function UseReducerCounterType() {
  const [count, dispatch] = useReducer(funcationname, intialState);
  const [count2, dispatch2] = useReducer(funcationname, intialState);

  return (
    <>
      <h5>
        Hello I am UseReducerCounter Components
        <span className="text-dark">(Dispatch in object type)</span>
      </h5>
      <div className="container shadow p-3 border">
        <h5>First Counter Container(same function)</h5>
        <h5>1. Counter : {count.firstCounter}</h5>
        <h5>1. Counter : {count.secondCounter}</h5>
        <button
          className="btn btn-primary mx-2 ms-0"
          onClick={() => dispatch({ type: "Increment", value: 12 })}
        >
          Increment : 12
        </button>
        <button
          className="btn btn-primary mx-2 ms-0"
          onClick={() => dispatch({ type: "Decrement", value: 2 })}
        >
          Decrement : 2
        </button>
        <button
          className="btn btn-primary mx-2 ms-0"
          onClick={() => dispatch({ type: "IncrementFive", value: 5 })}
        >
          Increment : 5
        </button>
        <button
          className="btn btn-primary mx-2 ms-0"
          onClick={() => dispatch({ type: "DecrementTen", value: 10 })}
        >
          Decrement : 10
        </button>
        <button
          className="btn btn-primary mx-2 ms-0"
          onClick={() => dispatch({ type: "Reset" })}
        >
          Reset
        </button>
      </div>

      <div className="container shadow p-3 border mt-3">
        <h5>Second Counter Container(same function)</h5>
        <h5>1. Counter : {count2.firstCounter}</h5>
        <h5>1. Counter : {count2.secondCounter}</h5>
        <button
          className="btn btn-primary mx-2 ms-0"
          onClick={() => dispatch2({ type: "Increment", value: 5 })}
        >
          Increment : 5
        </button>
        <button
          className="btn btn-primary mx-2 ms-0"
          onClick={() => dispatch2({ type: "Decrement", value: 3 })}
        >
          Decrement : 3
        </button>
        <button
          className="btn btn-primary mx-2 ms-0"
          onClick={() => dispatch2({ type: "Reset" })}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default UseReducerCounterType;
