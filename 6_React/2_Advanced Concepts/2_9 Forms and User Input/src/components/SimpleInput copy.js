import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // const {} = useInput();
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameTouched;

  let formIsValid = false;

  if(nameIsValid) {
    formIsValid = true;
  }


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);

    if (!nameIsValid) {
      return;
    }
    setEnteredName("");
    setNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
