import React, { useState } from "react";

import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Message: ", message);

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className={classes["form-box"]}>
      <h2>Contact Us!</h2>

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

        <div className={classes["input-group"]}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className={classes["input-group"]}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows={4}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
