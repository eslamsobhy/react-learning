import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      // you can use the functional way in all the previous examples!

      // prevState parameter will contain the actual last state (the most recent updated one)
      setValue((prevState) => {
        // whatever value returned here will be the new state
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          increase
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          decrease
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
