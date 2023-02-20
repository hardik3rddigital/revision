import React, { Component } from "react";
import axios from "axios";

export class Http extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMSG : '',
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        this.setState({ posts: Response.data });
      })
      .catch((Error) => {
        console.log(Error);
        this.setState({errorMSG : 'Error Retreving Data'})
      });
  }

  render() {
    const { posts, errorMSG } = this.state;
    return (
      <>
        <h5>Hello I am HTTP Components</h5>
        <div className="d-grid m-0 gap-3 d-flex flex-wrap">
          {
            posts.length ? 
            posts.map((listvalue, listindex) => {
            return (
              <div className="col-3 shadow-sm border p-2" key={listindex}>
                <h5>{listvalue.id}</h5>
                <p>{listvalue.body}</p>
              </div>
            ) 
          }) : null }

          {errorMSG ? <h5> {errorMSG} </h5> : null}

        </div>
      </>
    );
  }
}

export default Http;
