import React, { useState } from "react";
import useCustomHookuseDocument from "./useCustomHookuseDocument";

function CustomHookTwo() {
  const [count, setCount] = useState(0);
  
  useCustomHookuseDocument(count)

  return (
    <>
      <h5>
        Hello I am CustomHookTwo Components{" "}
        <span className="text-dark">(Changing Document Time)</span>
      </h5>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Count : {count}
      </button>
    </>
  );
}

export default CustomHookTwo;
