import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h2>Value: {secondValue}</h2> */}
      <h1>{text || "john doe"}</h1>
      <h1>{text && "hello world"}</h1>
      <h1>{!text && "hello world"}</h1>
    </>
  );
};

export default ShortCircuit;
