import { useState, useContext } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";
import Card from "../UI/Card";

import { AppContext } from "../context/AchievementContext";

import classes from "./CommentForm.module.css";

const FormModal = (props) => {
  const [comment, setComment] = useState('');
  const ctx = useContext(AppContext);

  const changeCommentHandler = (input) => {
    setComment(input);
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();

    props.closeForm();
    ctx.sharedState.addComment(props.achievementId,comment);
    
  };

  return (
    <Card>
    <div className= {classes.form}>
    <form onSubmit={formSubmitHandler}>
    <Input label="Add Comment" placeholder="Enter your comment here" inputChange = {changeCommentHandler}/>
    <Button className = {classes.commentBtn}>Comment</Button>
    </form>
    </div>
    </Card>
  );
};

const Backdrop = (props) => {

    const closeModalHandler = () => {
        props.closeForm();
    }
    
  return <div className={classes.back} onClick = {closeModalHandler}></div>;
};

const CommentForm = (props) => {
    return <div>
        <Backdrop closeForm = {props.closeForm} />
        <FormModal closeForm = {props.closeForm} achievementId = {props.achievementId}/>
    </div>
};

export default CommentForm;
