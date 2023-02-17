import React from "react";
import "../CSS/components.css";

const Styling = (props) => {
  let headingClassName = props.primary ? "text-primary" : "text-light";
  let fontDecoration = {
    color: "grey",
    textTransform: "uppercase",
    textAlign: "left",
    letterSpacing: "0.2rem",
  };

  return (
    <>
      <h5 className={headingClassName}>
        Hello I am Styling Components
        <span className="text-dark">(using props true condition)</span>
      </h5>
      <h5 className={`${headingClassName} text-danger`}>
        This Element in props true condition and fixed class
      </h5>
      <h5 style={fontDecoration}>CSS using variable</h5>
      <h5
        style={{
          color: "red",
          letterSpacing: "0.1rem",
          borderLeft: "1px solid grey",
          paddingLeft: "15px",
          marginBottom: "0",
        }}
      >
        CSS using inline CSS
      </h5>
    </>
  );
};

export default Styling;
