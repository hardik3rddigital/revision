import React, { useState } from "react";
import { useEffect } from "react";

const List = () => {
  const [OldList, NewList] = useState([]);

  const FetchList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
    const actualdata = await response.json();
    console.log(actualdata);
    NewList(actualdata);
  };

  useEffect(() => {
    FetchList();
  }, []);

  return (
    <>
      <h5>Hello I am List Components</h5>  
      <div className="d-grid m-0 gap-3 d-flex flex-wrap">
        {OldList.map((listvalue,listindex) => {
          return <div className="col-3 shadow-sm border p-2">
            <h5>{listvalue.id}</h5>
            <p>{listvalue.body}</p>
          </div>;
        })}
      </div>
    </>
  );
};

export default List;
