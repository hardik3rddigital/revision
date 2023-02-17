import React, { useState } from "react";

const HigherOrderComponent = () => {
  return <>
    <h5>Hello I am HigherOrderComponent Components</h5>
    <HOC cpm={Counter} newColor={{backgroundColor:"#fdaa28"}}/> 
    <HOC cpm={Counter} newColor={{backgroundColor:"#22daba  "}}/> 
  </>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  return <>
    <h5>{count}</h5>
    <button className="btn btn-primary" onClick={()=> setCount(count+1)}>Counter : {count}</button>
    <button className="btn btn-primary mx-3" onClick={()=> setCount(0)}>Reset Counter</button>
  </>;
};

const HOC = (props) => {
    return(
        <div className={`shadow p-3 border`} style={props.newColor}><props.cpm /></div>
    )
}

export default HigherOrderComponent;
