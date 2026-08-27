// import React from 'react';

import { useState } from "react";

const ControlledField = () => {
  // state for name
  const [name, setName] = useState('')
  // state for email
  const [email,setEmail] = useState('')
  // state for password
  const [password, setPassword] = useState("");
  // state for error handling
  const [error, setError] = useState("");
// default handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email,password,name)
    if (password.length < 6) {
      setError("Password Must Be 6 Characters or Longer");
    } else {
      setError("");
    }
  };
  // handler for name
  const handleNameOnChange = e =>{
    setName(e.target.value)
    console.log(setName)
  }
  // handler for email
  const handleEmailOnChange = e => {
    setEmail(e.target.value)
    console.log(setEmail)
  }
// handler for password
  const handlePasswordOnChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("Password Must Be 6 Characters or Longer");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"  placeholder="Your Name" required onChange={handleNameOnChange} defaultValue={name}/>
        <br />
        <input type="email" onChange={handleEmailOnChange} defaultValue={email} name="email" placeholder="Your Mail" required />
        <br />
        <input type="password" name="password" placeholder="Your Password" onChange={handlePasswordOnChange}defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledField;
