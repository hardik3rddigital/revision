import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
export class ConTextE extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {
            (username)=> {
                return <h5>Hello {username}</h5>
            }
          }
        </UserConsumer>
      </div>
    )
  }
}

export default ConTextE