import React, { useContext } from "react";
// import UseReducerContext5 from "./UseReducerContext5";
import { ReducerContext } from "./UseReducerUseContext";

function UseReducerContext2() {
  const countContext = useContext(ReducerContext);

  return (
    <>
      <h5 className="mt-3">UseReducerContext2 (Counter : {countContext.countState})</h5>
      <button
        className="btn btn-primary mx-2 ms-0"
        onClick={() => countContext.countDispatch("Increment")}
      >
        Increment
      </button>
      <button
        className="btn btn-primary mx-2 ms-0"
        onClick={() => countContext.countDispatch("Decrement")}
      >
        Decrement
      </button>
      <button
        className="btn btn-primary mx-2 ms-0"
        onClick={() => countContext.countDispatch("Reset")}
      >
        Reset
      </button>
    </>
  );
}

export default UseReducerContext2;
