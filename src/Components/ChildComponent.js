import React from "react";

const ChildComponents = (props) => {
  return (
    <>
      <button
        className="btn btn-primary mb-2 childcomponents"
        onClick={props.ParentComponetsProps}
      >
        Child Components
      </button>
    </>
  );
};

export default ChildComponents;
