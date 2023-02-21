import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchDataUserID() {
  const [userdata, setUserdata] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setUserdata(res.data);
        //console.log(res.data.id);
      })
      .catch((error) => {
        //console.log(error);
      });
  }, [id]);
  return (
    <>
      <h5>
        Hello I am FetchData Components{" "}
        <span className="text-dark">(Using Axios)</span>
      </h5>
      <input
        type="text"
        max="2"
        value={id.id}
        name="id"
        onChange={(e) => setId(e.target.value)}
        className="form-control mb-3"
      />
      <div className="d-grid m-0 gap-3 d-flex flex-wrap">
        {/* {userdata.length ? ( */}
          <div className="col-3 shadow-sm border p-2">
            <h5>{userdata.id}</h5>
            <p className="mb-0">{userdata.title}</p>
          </div>
        {/* ) : null} */}
      </div>
    </>
  );
}

export default FetchDataUserID;
