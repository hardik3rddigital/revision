import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: "",
  error: "",
  post: {},
};

const reducerfunction = (state, action) => {
  switch (action.type) {
    case "Fetch_Success":
      return { loading: false, post: action.payload, error: "" };
    case "Fetch_Error":
      return { loading: false, post: {}, error: "Something Went Wrong" };
    default:
      return state;
  }
};

function FetchingData2() {
  const [state, dispatch] = useReducer(reducerfunction, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/4")
      .then((response) => {
        dispatch({ type: "Fetch_Success", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "Fetch_Error" });
      });
  }, []);

  return (
    <>
      <h5>
        Hello I am FetchingData2 Components
        <span className="text-dark">(useReducer)</span>
      </h5>
      {state.loading ? "Loading" : <h5>{state.post.title}</h5>}
      {state.error ? state.error : null}
    </>
  );
}

export default FetchingData2;
