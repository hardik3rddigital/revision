import React from 'react'
import { UserContextUseContext } from './UseContext'

function UseContextB() {
  return (
    <>
      <UserContextUseContext>
        {
          userData => {
            return <>
              <h5 className='list-group-item'>My Name is : <b>{userData.name}</b> & My Componet Name is : <b>{userData.component}</b> </h5>
            </>
          }
        }
      </UserContextUseContext>
    </>
  )
}

export default UseContextB