import React, { useState } from "react";
import { data } from "../../../data";
import { Link, useNavigate } from "react-router-dom";
const People = () => {
  const [people, setPeople] = useState(data);
  let navigate = useNavigate();

  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            {/* <Link to={`/people/${person.id}`}>more details</Link> */}
            <p
              onClick={() => navigate(`/people/${person.id}`)}
              style={{ color: "#2d87c8", cursor: "pointer" }}
            >
              more details
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default People;
