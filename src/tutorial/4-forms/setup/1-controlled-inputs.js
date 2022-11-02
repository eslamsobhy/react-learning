import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// you have to have a value property that references a state value and don't forget the onChange handler

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("Empty values");
    }
  };

  return (
    <>
      <article>
        <form className="form" /* onSubmit={handleSubmit}*/>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
