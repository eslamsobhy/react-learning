import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const { id } = useParams();
  // console.log(params);
  const person = data.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h2>{person.name}</h2>
      <Link className="btn" to="/people">
        back to people
      </Link>
    </div>
  );
};

export default Person;
