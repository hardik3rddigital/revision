import React, { useState } from "react";

function useInputCustomHook() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const submitform = (e) => {
    e.preventDefault();
    console.log(`Hello ${firstname} ${lastname}`)
  }
  return (
    <>
      <h5>
        Hello I am useInputCustomHook Components{" "}
        <span className="text-dark">(Custom Hook)</span>
      </h5>

      <form onSubmit={submitform}>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Firstname"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Lastname"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
        </div>

        <div className="">
          <button className="btn btn-primary"> Submit </button>
        </div>
      </form>
    </>
  );
}

export default useInputCustomHook;
