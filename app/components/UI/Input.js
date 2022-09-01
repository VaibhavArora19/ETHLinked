import { useState } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const [input, setInput] = useState("");


  const changeHandler = (event) => {
    const lastVal = event.target.value.substr(event.target.value.length -1);
    const value = lastVal.charCodeAt();

    if(props.label === 'Tag'){
      if(value < 65 && value != 45){
        return;
      }else if(value > 90 && value < 97){
        return;
      }else if(value > 97 && value > 122){
        return;
      }
    }
     setInput(event.target.value);

     props.inputChange(event.target.value);
    
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
        maxLength={props.maxlength ? props.maxlength : '100'}
        required
      />
    </div>
  );
};

export default Input;
