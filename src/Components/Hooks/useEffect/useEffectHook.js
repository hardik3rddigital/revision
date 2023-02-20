import React, { useEffect, useState } from 'react'

function UseEffectHook() {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    document.title = `You Clicked ${count} times`;
  })
    
  return (
    <>
        <h5>Hello I am useEffect Hook Components</h5>
        <h5>Counter : {count} </h5>
        <button className='btn btn-primary' onClick={()=> setCount(count + 1)}>Increment</button>
    </>
  )
}

export default UseEffectHook