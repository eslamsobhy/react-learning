import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { useRef } from "react";
import { useEffect } from "react";
// reducer function
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const nameRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  useEffect(() => {
    nameRef.current.focus();
  });

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <div>
        {state.people.map((person) => {
          return (
            <div key={person.id} className="item">
              <h4>{person.name}</h4>
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_ITEM", payload: person.id });
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
