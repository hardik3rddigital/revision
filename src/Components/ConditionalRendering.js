import React, { useState } from "react";

const ConditionalRendering = () => {
  const [condition] = useState(true);

  return(
    <>
      {condition ? <h5 className="mb-0">Hello I am ConditionalRendering Components : true</h5> : <h5 className="mb-0">Hello I am ConditionalRendering Components : false</h5>}
    </>
  )

};

export default ConditionalRendering;
