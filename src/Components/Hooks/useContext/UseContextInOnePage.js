import React, {useContext} from 'react'
import { UserContextUseContext, MultipleContextUseContext } from "./UseContext";

function UseContextInOnePage() {
  const single = useContext(UserContextUseContext)
  const multiple = useContext(MultipleContextUseContext)

  return (
    <>
        <h5 className='mb-0'>Hello My Name is : {single.name} & My Nickname is {multiple.nickname}</h5>
    </>
  )
}

export default UseContextInOnePage