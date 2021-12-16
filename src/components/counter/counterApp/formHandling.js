// import React from 'react';
import React, { useState } from "react";

function FormHand() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    let studentData = {
      name,
      password,
    };
    console.log(studentData);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Name is :{name}</p>
      <p>Password is :{password}</p>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default FormHand;
