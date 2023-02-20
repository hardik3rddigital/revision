import React, { Component } from 'react'

export class RenderPropsUser extends Component {
  render() {
    return (
      <div>{this.props.render(true)}</div>
    )
  }
}

export default RenderPropsUser