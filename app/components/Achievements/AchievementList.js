import Link from "next/link";

import classes from "./AchievementList.module.css";

import CommentForm from "../CommentSection/CommentForm";

import { useContext, useState } from "react";

import { AppContext } from "../context/AchievementContext";

const AchievementList = (props) => {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const ctx = useContext(AppContext);

  const isCommentPage = ctx.sharedState.isCommentPage;

  const clickHandler = () => {
    console.log("You are an idiot :P");
  };

  const addCommentHandler = () => {
    setShowCommentForm(true);
  };

  const closeCommentHandler = () =>{
    setShowCommentForm(false);
  }

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
        {showCommentForm && <CommentForm closeForm = {closeCommentHandler}/>}
        {isCommentPage ? (
          <button className="btn btn-primary" onClick={addCommentHandler}>
            Comment
          </button>
        ) : (
          <Link href={`/Achievement/${props.id}`}>
            <img src="https://img.icons8.com/material-outlined/24/000000/comments--v1.png" />
          </Link>
        )}
      </div>
      <h3>By {props.user}</h3>
    </div>
  );
};

export default AchievementList;
