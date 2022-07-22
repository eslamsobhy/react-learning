import React, { useState, useEffect } from "react";

// cleanup function
// second argument
// it is a good practice that every and each time you make a side effect is to set up a clean up function!

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Hello from use effect!");
    window.addEventListener("resize", checkSize);
    // this return here will be invoked once we exit!
    // return () => {
    //   console.log("before the next render!");
    //   window.removeEventListener("resize", checkSize);
    // };
  }, []);
  return (
    <>
      <h1>window</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
