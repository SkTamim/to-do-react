import React, { useState } from "react";

const ShowTime = () => {
  let time = new Date().toLocaleTimeString();
  const [oldTime, newTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    newTime(time);
    console.log(time);
  };
  return (
    <>
      <h1>The time is </h1>
      <h2>{oldTime}</h2>
      <button onClick={updateTime}>Get Time</button>
    </>
  );
};

export default ShowTime;
