import React from "react";
import useInput from "./useInput";

function useInputCustomHook() {
  const [firstName, bindFirstname, resetFirstName] = useInput("");
  const [lastName, bindLastname, resetLastName] = useInput("");

  const submitform = (e) => {
    e.preventDefault();
    console.log(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

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
            {...bindFirstname}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Lastname"
            {...bindLastname}
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
