import { useState } from "react";

const useInput = (validationFn) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validationFn(inputValue);
  const hasError = !inputIsValid && isTouched;

  const inputChangeHandler = (changeEvent) => {
    setInputValue(changeEvent.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  return {
    value: inputValue,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
