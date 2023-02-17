import React from "react";

const Props = (props) => {
  return (
    <>
      <h5>Hello I am Props Components</h5>
      <h5 className="">Hello My Name Is {props.name}</h5>
      {props.children}
    </>
  );
};

export default Props;
