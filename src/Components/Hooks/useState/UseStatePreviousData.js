import React, { useState } from 'react'

function UseStatePreviousData() {
  const intialState = 0;
  const [count,setCount] = useState(intialState);
  
  const incrementFiveError = () => {
    for(let i = 0; i < 5 ; i++){
        setCount(count + 1)
    }
  }

  const incrementFiveSolve = () => {
    for(let i = 0; i < 5 ; i++){
        setCount(prevdata=> prevdata + 1)
    }
  }
  
  return (
    <>
        <h5>Hello I am useState Hook Components <span className="text-dark text-capitalize">(useState with previous state)</span></h5>
        <h5>Counter : {count}</h5>
        <button className='btn btn-primary' onClick={()=> setCount(count + 5)}>Increment</button>
        <button className='btn btn-primary mx-2' onClick={incrementFiveError}>Increment 5(Error)</button>
        <button className='btn btn-primary ms-0 mx-2 ' onClick={incrementFiveSolve}>Increment 5(Solve)</button>
    </>
  )
}

export default UseStatePreviousData