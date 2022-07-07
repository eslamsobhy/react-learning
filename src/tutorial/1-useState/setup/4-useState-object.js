import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });
  // console.log(person);

  const changeMessage = () => {
    // using the spread operator we are preserving the old data values,
    //  and then we are overwriting the properties we want.

    // setPerson({ ...person, message: "new message" });

    setMessage("new message");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
