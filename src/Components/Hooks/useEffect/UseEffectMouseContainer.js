import React, { useState } from 'react'
import UseEffectOnceHook from './UseEffectOnceHook';

function UseEffectMouseContainer() {

  const [display,setDisplay] = useState(true); 


  return (
    <>
        <h5>Hello I am useEffect Hook Components <span className='text-dark'>useEffect with cleanup</span></h5>
        <button className='btn btn-primary' onClick={() => setDisplay(!display)}>Show X and Y Cordinate Toggle</button>
        {display && <UseEffectOnceHook />}
    </>
  )
}

export default UseEffectMouseContainer