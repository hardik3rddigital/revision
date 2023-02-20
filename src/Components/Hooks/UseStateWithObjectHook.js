import React, { useState } from "react";

function UseStateWithObjectHook() {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  });

  return (
    <>
      <div className="">
        <form>
          <h5>Hello I am UseState With Object Hook Components</h5>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={name.firstname}
              name="firstname"
              placeholder="firstname"
              onChange={(e) => setName({ ...name, firstname: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={name.lastname}
              name="lastname"
              placeholder="lastname"
              onChange={(e) => setName({ ...name, lastname: e.target.value })}
            />
          </div>
          My Firstname is {name.firstname} and lastname is {name.lastname}
        </form>
      </div>
    </>
  );
}

export default UseStateWithObjectHook;
