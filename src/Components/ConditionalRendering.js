import React, { useState } from "react";

const ConditionalRendering = () => {
  const [condition, newCondition] = useState(true);

  if (condition) {
    return <h5 className="mb-0">Hello I am ConditionalRendering Components : true</h5>;
  } else {
    return <h5 className="mb-0">Hello I am ConditionalRendering Components : false</h5>;
  }
  
};

export default ConditionalRendering;
