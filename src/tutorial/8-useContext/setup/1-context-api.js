import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components => Provider, Consumer
// the Provider component works as a distributer,
// it helps wrap the components which have access to our context

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>prop drilling</h3>
      <List />
    </PersonContext.Provider>
  );
};

/*
  actually in this commit we are just practicing, since there is no point of passing
  the people array since it is used just one level far from the root component.
  so we could just pass it to the List component like this:
  <List people={people} />
  and access it from the probs inside its component.
*/

const List = () => {
  const mainData = useContext(PersonContext);
  //the mainData has the removePerson method and the people array of objects (data)
  // console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
