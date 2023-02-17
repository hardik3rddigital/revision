import React, { useState } from "react";

const FormControl = () => {
  const [fullname, setfullname] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const keyupevent = (event) => {
    const getnameattr = event.target.name;
    const getnamevalue = event.target.value;

    setfullname((prefullname) => {
      if (getnameattr === "fName") {
        return {
          ...prefullname,
          fname: getnamevalue,
        };
      } else if (getnameattr === "lName") {
        return {
          ...prefullname,
          lname: getnamevalue,
        };
      } else if (getnameattr === "email") {
        return {
          ...prefullname,
          email: getnamevalue,
        };
      } else if (getnameattr === "phone") {
        return {
          ...prefullname,
          phone: getnamevalue,
        };
      }
    });
  };

  return (
    <>
      <form className="">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            value={fullname.fname}
            defaultValue=""
            name="fName"
            onChange={keyupevent}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={fullname.lname}
            defaultValue=""
            name="lName"
            onChange={keyupevent}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            value={fullname.email}
            defaultValue=""
            name="email"
            onChange={keyupevent}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="number"
            className="form-control"
            value={fullname.phone}
            defaultValue=""
            name="phone"
            onChange={keyupevent}
          />
        </div>
      </form>
      <div className="">
        <table className="table table-bordered mb-0">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{fullname.fname}</td>
              <td>{fullname.lname}</td>
              <td>{fullname.email}</td>
              <td>{fullname.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FormControl;
