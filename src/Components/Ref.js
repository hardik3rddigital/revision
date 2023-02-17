import React, { Component, createRef } from "react";

export class Ref extends Component {
  constructor(props) {
    super(props);
    this.PropertyName = createRef();
    this.callBackRef = null
    this.setCallBackRef = element =>{
        this.callBackRef = element
    }
  }


  componentDidMount(){
    if(this.callBackRef){
        this.callBackRef.focus()    
    }
    // this.PropertyName.current.focus(); // on window load focus this input menu
    //console.log(this.PropertyName);
  }

  ClickHandler = (event) => {
    event.preventDefault();
        console.log(this.PropertyName.current.value);
  }


  render() {
    return (
      <>
        <h5>Hello I am Ref Components</h5>
        <form>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              defaultValue=""
              name="fname"
              ref={this.PropertyName}
            />

            <button className="btn btn-primary mt-3" onClick={this.ClickHandler}>Click Me</button>
          </div>
        </form>
      </>
    );
  }
}
