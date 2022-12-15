import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    { value, onChange: (e) => setValue(e.target.value) }, // the attributes always wrote inside of the input tag
    () => setValue(initialValue), // reset the value to prepare the input field for the next value
  ];
};
