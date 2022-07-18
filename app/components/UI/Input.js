import { useState } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);

    if(props.label === 'Description') {
      props.inputChange(event.target.value);
    }
  }

  return (
    <div className={`form-control w-full max-w-xs ${classes.form}`}>
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <input
        type="text"
        placeholder={props.placeholder}
        className="input input-bordered w-full max-w-xs"
        value = {input}
        onChange = {changeHandler}
        maxLength={props.maxlength ? props.maxlength : '10000'}
      />
    </div>
  );
};

export default Input;
