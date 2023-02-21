import React, { useEffect, useRef, useState } from "react";

function UseRefInputHook() {
  //const [input,setinput] = useState();
  const keyupevent = () => {};

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <>
      <div className="mb-3">
        <input className="form-control" onChange={keyupevent} ref={inputRef} />
      </div>
    </>
  );
}

export default UseRefInputHook;
