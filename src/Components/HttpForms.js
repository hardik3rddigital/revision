import React, { Component } from "react";
import axios from "axios";

export class HttpForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    .then(Response => {
        console.log(Response);
    })
    .catch(Error => {
        console.log(Error);
    })
  };

  render() {
    const { userid, title, body } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="">
            <input
              type="text"
              name="userid"
              value={userid}
              onChange={this.changeHandler}
              className="form-control mb-2"
              placeholder="Enter Your User ID"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
              className="form-control mb-2"
              placeholder="Enter Your Title"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
              className="form-control mb-2"
              placeholder="Enter Your Body Description"
            />
          </div>
          <div className="">
            <button className="btn btn-primary" type="submit">
              HTTP Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default HttpForms;
