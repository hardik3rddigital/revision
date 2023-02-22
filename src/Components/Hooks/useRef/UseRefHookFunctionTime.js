import React, { useEffect, useRef, useState } from 'react'

function UseRefHookFunctionTime() {
  const [timer,setTimer] = useState(0);



  const intervalRef = useRef();

  useEffect(()=>{
    intervalRef.current = setInterval(()=> {
        setTimer(prevTimer => prevTimer + 1)
    },1000)
    return()=> {
        clearInterval(intervalRef.current)
    }
  },[])
  return (
    <>
        <h5>Hello I am UseRefHookClassTimer Components <span className="text-dark">(Using Functional Component)</span></h5>
        <h5>Class Timer : {timer}</h5>
        <button className="btn btn-primary" onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </>
  )
}

export default UseRefHookFunctionTime