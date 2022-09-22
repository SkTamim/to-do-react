import React, { useState } from "react";

const FormOne = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  const inputEvent = (event) => {
    setName(event.target.value);
  };
  const submit = (e) => {
    setFullName(name);
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submit}>
        <h1>Hello {fullName}</h1>
        <input type='text' onChange={inputEvent} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormOne;
