import React from "react";
import {useState} from "react";
import ChildComponents from "./ChildComponent";

const ParentComponets = () => {
  const [parentProps,newParentProps] = useState();
  const clickEventHandle = (event) => {
    newParentProps(event.target.className)
  };

  return (
    <>
      <h5>Hello I am ParentComponets Components <span className="text-secondary">(Child Components classname get using props)</span></h5>
      <ChildComponents ParentComponetsProps={clickEventHandle} />
      <h5 className="mb-0">Button Classname : {parentProps}</h5>
    </>
  );
};

export default ParentComponets;
