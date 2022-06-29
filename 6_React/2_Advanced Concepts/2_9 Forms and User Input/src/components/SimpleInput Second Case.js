import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim().length !== '') {
      setNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setNameTouched(true);
    if (enteredName.trim() === '') {
      setNameIsValid(false);
      return;
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
    if (enteredName.trim() === '') {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    setEnteredName('');
  };

  const nameInputIsInvalid = !nameIsValid && nameTouched;

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
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
