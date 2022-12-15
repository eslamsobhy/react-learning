// This example from the Learning React O'REILLY Book

import { useEffect, useRef, useState } from "react";
import { useInput } from "./3-useInput";

const Form = () => {
  const [people, setPeople] = useState([]);
  const [nameProps, resetName] = useInput("");
  console.log(people, nameProps, resetName);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameProps);
    setPeople([...people, nameProps.value]);
    resetName();
  };

  const inputContainer = useRef(null);
  useEffect(() => {
    inputContainer.current.focus();
  });

  return (
    <>
      <h4>useInput / custom hook</h4>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name: </label>
        <input
          ref={inputContainer}
          type="text"
          placeholder="your name"
          id="name"
          {...nameProps} // value, onChange()
        />
        <button type="submit">add</button>
      </form>
      <article className="section">
        {people.map((person, index) => (
          <h4 key={index}>{person}</h4>
        ))}
      </article>
    </>
  );
};

export default Form;
