import React, { useState } from "react";

import classes from "./UpdateInfoForm.module.css";

const UpdateInfoForm = ({ updateUserInfo }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    updateUserInfo({ firstName, lastName });

    setFirstName("");
    setLastName("");
  };

  return (
    <div className={classes["form-box"]}>
      <h2>Update User Information</h2>
      <form onSubmit={submitHandler}>
        <div className={classes["input-group"]}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
        </div>

        <div className={classes["input-group"]}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
        </div>

        <button type="submit">Update Info</button>
      </form>
    </div>
  );
};

export default UpdateInfoForm;
