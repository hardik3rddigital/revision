import React, { Component } from 'react'
import ConTextE from './ConTextE';
import UserContext from './UserContext';

export class ConTextC extends Component {

  static contextType = UserContext
  render() {
    return (
      <div>
        <h5>Hello I am Component C context {this.context}</h5>
        <ConTextE/>
      </div>
    )
  }
}

ConTextE.contextType = UserContext

export default ConTextC