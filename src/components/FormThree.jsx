import React, { useState } from "react";

const FormThree = () => {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const inputEvent = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFullName((obj) => {
      return {
        ...fullName,
        [name]: value, // squer bracket ta diye akhane ho66e ta ki ki6ui to bujhthe par6i nah
      };

      // if (name === "firstName") {
      //   return {
      //     ...fullName,
      //     firstName: value,
      //   };
      // } else if (name === "lastName") {
      //   return {
      //     ...fullName,
      //     lastName: value,
      //   };
      // } else {
      //   return {
      //     ...fullName,
      //     email: value,
      //   };
      // }
    });
  };

  const submit = (e) => {
    e.preventDefault();

    let finalName = fullName.firstName + fullName.lastName;
    let email = fullName.email;
    e.target.firstChild.innerText = ` Hello ${finalName}`;
    e.target.childNodes[1].innerText = ` ${email}`;
  };
  return (
    <>
      <form onSubmit={submit}>
        <h1>Hello</h1>
        <p></p>
        <input
          type='text'
          placeholder='Enter first name'
          onChange={inputEvent}
          name='firstName'
        />
        <input
          type='text'
          placeholder='Enter last name'
          onChange={inputEvent}
          name='lastName'
        />
        <input
          type='email'
          placeholder='Enter Email'
          onChange={inputEvent}
          name='email'
        />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};
export default FormThree;
