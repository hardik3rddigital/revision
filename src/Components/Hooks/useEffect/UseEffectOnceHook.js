import React, { useEffect, useState } from 'react'

function UseEffectOnceHook() {
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('Mouse Event');
    setX(e.clientX)
    setY(e.clientY)
  }
  
  useEffect(()=> {
    window.addEventListener('mousemove',logMousePosition)

    return () => {
      console.log('Component unmounting code');
      window.removeEventListener('mousemove',logMousePosition);
    }
  },[])
  return (
    <>
        <h5>Hello I am useEffect Hook Components <span className='text-dark'>Run effects only once</span></h5>
        <h5>Hooks X - {x} and Y - {y}</h5>
    </>
  )
}

export default UseEffectOnceHook