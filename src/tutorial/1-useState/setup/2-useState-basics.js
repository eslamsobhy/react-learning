import React, { useState } from "react";

// GENERAL RULES OF HOOKS:
//  - starts with 'use'
//  - component name must be uppercase
//  - must be in the function/component body
//  - cannot call the hook conditionally

const UseStateBasics = () => {
  // console.log(useState("Hello world"));
  // console.log(useState("hello")[0]);
  // console.log(useState("hello")[1]);
  // const [text, handler] = useState("normal text");
  // console.log(text, handler);

  const [title, setTitle] = useState("random title!");
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };

  const clickHandler = () => {
    if (title === "random title!") {
      setTitle("new title!");
    } else {
      setTitle("random title!");
    }
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={clickHandler}>
        Change Title
      </button>
      <p>You clicked {count} times!</p>
      <button className="btn" onClick={counter}>
        Counter
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
