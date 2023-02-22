import React from 'react'
import useCounter from './useCounter'
function CounterTwo() {

  const [count, increment, decrement, reset] = useCounter()
  return (
    <>
        <h5>Hello I am CounterTwo Components <span className='text-dark'>(Custom Hooks)</span></h5>
        <h5>Count : {count}</h5>
        <button className="btn btn-primary" onClick={increment}>Increment</button>
        <button className="btn btn-primary mx-2" onClick={decrement}>Decrement</button>
        <button className="btn btn-primary mx-2 ms-0" onClick={reset}>Reset</button>
    </>
  )
}

export default CounterTwo