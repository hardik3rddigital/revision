
import React, { Component } from 'react'

export class UseEffectIntervalHook extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }

  componentDidMount(){
    this.interval = setInterval(this.tick,1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  tick = () => {
    this.setState({
        count:this.state.count+1
    })
  }

  render() {
    return (
      <>
        <h5>Hello I am useEffect Hook Components(Using StateClass Method)<span className='text-dark'>(useEffect with incorrect dependency)</span></h5>
        <h5>{this.state.count}</h5>
      </>
    )
  }
}

export default UseEffectIntervalHook