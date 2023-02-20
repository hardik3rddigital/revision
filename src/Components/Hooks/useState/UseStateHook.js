import React, { useState } from 'react'

function UseStateHook() {
  const [counter,newCounter] = useState(0);

  return (
    <>
        <h5>Hello I am useState Hook Components <span className="text-dark">(Increment 5 number and Decrement 4 Number)</span></h5>
        <h5>Counter : {counter}</h5>
        <button className='btn btn-primary' onClick={()=> newCounter(counter + 5)}>Increment</button>
        <button className='btn btn-primary mx-2' onClick={()=> newCounter(counter - 4)}>Decrement</button>
    </>
  )
}

export default UseStateHook;