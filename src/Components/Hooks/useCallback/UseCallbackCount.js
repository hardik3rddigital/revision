import React from 'react'

function UseCallbackCount({ text, count }) {
	//console.log(`Rendering ${text}`)
	return <h5>{text} - {count}</h5>
}

export default React.memo(UseCallbackCount)
