import React, { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [oldTime, newTime] = useState(time);

  //   setTimeout(() => {
  //     time = new Date().toLocaleTimeString();
  //     newTime(time);
  //   }, 500);

  let updateTime = () => {
    time = new Date().toLocaleTimeString();
    newTime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <>
      <h1>The time is </h1>
      <h2>{oldTime}</h2>
    </>
  );
};

export default Clock;
