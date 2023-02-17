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
      console.log(prefullname);
      return {
        ...prefullname,
        [getnameattr]: getnamevalue,
      };
    });
  };

  return (
    <>
      <form className="">
        <h5>Form Control</h5>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            value={fullname.fname}
            defaultValue=""
            name="fname"
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
            name="lname"
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
