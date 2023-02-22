import React, { useState } from "react";
import useCustomHookuseDocument from "./useCustomHookuseDocument";

function CustomHook() {
  const [count, setCount] = useState(0);
  
  useCustomHookuseDocument(count)

  return (
    <>
      <h5>
        Hello I am CustomHook Components{" "}
        <span className="text-dark">(Changing Document Time)</span>
      </h5>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Count - {count}
      </button>
    </>
  );
}

export default CustomHook;
