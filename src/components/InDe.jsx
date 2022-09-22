import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function InDe() {
  const [value, setValue] = useState(0);

  const incrise = () => {
    setValue(value + 1);
  };
  const decrese = () => {
    if (value !== 0) {
      setValue(value - 1);
    } else {
      alert("Minimum value reched");
    }
  };
  return (
    <>
      <h2>Increment and Decrement</h2>
      <h1>{value}</h1>
      <button onClick={incrise}>
        <AddIcon />
      </button>
      <button onClick={decrese}>Decrement</button>
    </>
  );
}

export default InDe;
