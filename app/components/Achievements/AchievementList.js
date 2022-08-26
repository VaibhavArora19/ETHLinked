import Link from "next/link";

import classes from "./AchievementList.module.css";

import Button from "../UI/Button";

const AchievementList = (props) => {
  const clickHandler = () => {
    console.log("You are an idiot :P");
  };
  return (
    <div className={`${classes.achievement}`}>
      <h1>
        {props.title}
        <span className={classes.time}> Published at {props.timestamp}</span>
      </h1>
      <h2>{props.description}</h2>
      <div className={classes.commentSection}>
        <button
          className={`btn btn-outline btn-accent ${classes.button}`}
          onClick={clickHandler}
        >
          #{props.tag}
        </button>
        <Link href = {`/Achievement/${props.id}`}>
          <img src="https://img.icons8.com/material-outlined/24/000000/comments--v1.png"/>
        </Link>
      </div>
      <h3>By {props.user}</h3>
    </div>
  );
};

export default AchievementList;
