import React, { useEffect, useState } from 'react'

function UseEffectHook() {
  const [count,setCount] = useState(0);
  const [name,setName] = useState('');

  useEffect(()=>{
    document.title = `You Clicked ${count} times`;
    console.log(`You Clicked ${count} times`)
  }, [count])
    
  return (
    <>
        <h5>Hello I am useEffect Hook Components</h5>
        <h5>Counter : {count} </h5>
        <input type='text' className="form-control mb-3" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <button className='btn btn-primary' onClick={()=> setCount(count + 1)}>Increment</button>
    </>
  )
}

export default UseEffectHook