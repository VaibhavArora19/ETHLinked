import classes from "./AchievementList.module.css";
import Button from "../UI/Button";

const AchievementList = (props) => {
  return (
    <div className={`${classes.achievement}`}>
      <h1>
        {props.title}
        <span className= {classes.time}> Published at {props.timestamp}</span>
      </h1>
      <h3>{props.description}</h3>
      <Button className = {classes.button}>#{props.tag}</Button>
      <h3>By {props.user}</h3>
    </div>
  );
};

export default AchievementList;
