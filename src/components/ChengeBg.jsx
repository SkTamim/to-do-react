import React, { useState } from "react";

const ChengeBg = () => {
  const [bg, setBg] = useState("#fff");
  const [word, setWord] = useState("Click Me");

  const chenge = () => {
    console.log("clicked");
    // let bg = document.querySelector("body");
    // bg.style.background = "#eee";
    // console.log(bg);
    // let btn = document.querySelector("button");
    // btn.innerText = "AUCH 😑";

    setBg("#eee");
    setWord("AUCH 😑");
  };

  const dblChenge = () => {
    // let bg = document.querySelector("body");
    // bg.style.background = "tomato";
    // let btn = document.querySelector("button");
    // btn.innerText = "YAAOOO 😡";

    setBg("tomato");
    setWord("YAAOOO 😡");
  };
  const normal = () => {
    setBg("#fff");
    setWord("Click Me");
  };

  return (
    <>
      <div style={{ background: bg }}>
        <button
          onClick={chenge}
          onDoubleClick={dblChenge}
          onMouseLeave={normal}
        >
          {word}
        </button>
      </div>
    </>
  );
};

export default ChengeBg;
