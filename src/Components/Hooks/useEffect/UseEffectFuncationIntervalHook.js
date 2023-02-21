import React, { useEffect, useState } from "react";

function UseEffectFuncationIntervalHook() {
  const [count, setcount] = useState(0);

  const tick = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      <h5>
        Hello I am useEffect Hook Components(Using Functional Class)
        <span className="text-dark">(useEffect with incorrect dependency)</span>
      </h5>
      <h5>{count}</h5>
    </>
  );
}

export default UseEffectFuncationIntervalHook;
