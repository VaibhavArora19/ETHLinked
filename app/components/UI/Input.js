import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`form-control w-full max-w-xs ${classes.form}`}>
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <input
        type="text"
        placeholder={props.placeholder}
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default Input;
