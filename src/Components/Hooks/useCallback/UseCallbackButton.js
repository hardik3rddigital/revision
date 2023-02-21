import React from 'react'

function UseCallbackButton({ handleClick, children }) {
  //console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick} className="btn btn-primary mb-2">
      {children}
    </button>
  )
}

export default React.memo(UseCallbackButton)