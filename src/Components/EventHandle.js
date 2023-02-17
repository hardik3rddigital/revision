import React from "react";
import { useState } from "react";

const EventHandle = () => {
  const [classname, setclassname] = useState('');
  const clickEventHandle = (event) => {
    const getClassName = event.target.className;
    console.log(event.target.className);
    setclassname(getClassName);
  };

  return (
    <>
      <h5>Hello I am EventHandle Components</h5>
      <button className="btn btn-primary mb-2" onClick={clickEventHandle}>
        Click Event
      </button>
      <h5 className="mb-0">Button Classname : {classname}</h5>
    </>
  );
};

export default EventHandle;
