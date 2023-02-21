import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <>
      <h5>Hello I am FetchData Components <span className="text-dark">(Using Axios)</span></h5>
      <div className="d-grid m-0 gap-3 d-flex flex-wrap">
        {userdata.length
          ? userdata.map((listvalue, listindex) => {
              return (
                <div className="col-3 shadow-sm border p-2" key={listindex}>
                  <h5>{listvalue.id}</h5>
                  <p className="mb-0">{listvalue.name}</p>
                </div>
              )
            })
          : null}
      </div>
    </>
  );
}

export default FetchData;
