import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter => an array of dependencies

// use effect is all about the work that is done out side of the component!
// cannot use it conditionally!
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call use effect!");
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]); //if the array left empty, then the use state will only called at the initial render!
  // here we call it every time we change the value of the value state variable
  useEffect(() => {
    console.log("Hello World!");
  }, []);
  console.log("Rendering the component!");
  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;
