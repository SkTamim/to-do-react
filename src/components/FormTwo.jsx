import React, { useState } from "react";

const FormTwo = () => {
  const [nameF, setNameF] = useState("");
  const [nameL, setNameL] = useState("");
  const [fullName, setFullName] = useState("");

  const firstName = (e) => {
    setNameF(e.target.value);
    console.log(nameF);
  };
  const lastName = (e) => {
    setNameL(e.target.value);
    console.log(nameL);
  };

  const submit = (e) => {
    setFullName(nameF + nameL);
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={submit}>
        <h1>Hello {fullName}</h1>
        <input
          type='text'
          placeholder='Enter first name'
          onChange={firstName}
        />
        <input type='text' placeholder='Enter last name' onChange={lastName} />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default FormTwo;
