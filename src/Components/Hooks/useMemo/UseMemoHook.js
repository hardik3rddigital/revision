import React, { useState,useMemo } from "react";
function UseMemoHook() {
  const [countone, setcountone] = useState(0);
  const [counttwo, setcounttwo] = useState(0);

  const incrementOne = () => {
    //console.log(countone);
    setcountone(countone + 1);
  };

  const incrementTwo = () => {
    //console.log(counttwo);
    setcounttwo(counttwo + 1);
  };

  const isEven = useMemo(() => {
    return countone % 2 === 0;
  },[countone])

  return (
    <>
      <h5>Hello I am Us eMemoHook Components</h5>
      <button className="btn btn-primary" onClick={incrementOne}>
        Counter One - {countone} 
        <span>{isEven ? ' Even' : ' Odd'}</span>
      </button>
      <button className="btn btn-primary mx-2" onClick={incrementTwo}>
        Counter Two - {counttwo}
      </button>
    </>
  );
}

export default UseMemoHook;
