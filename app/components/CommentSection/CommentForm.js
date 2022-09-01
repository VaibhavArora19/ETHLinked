import { useState, useContext } from "react";

import Input from "../UI/Input";

import { AppContext } from "../context/AchievementContext";

import classes from "./CommentForm.module.css";

const FormModal = (props) => {
  const [comment, setComment] = useState("");

  const ctx = useContext(AppContext);

  const changeCommentHandler = (input) => {
    setComment(input);
  };



  const formSubmitHandler = (event) => {
    event.preventDefault();

    ctx.sharedState.addComment(props.achievementId, comment);

  };

  return (
      <div>
        <form onSubmit={formSubmitHandler}>
          <div className = {`${classes.input} grid grid-cols-2`}>
            <Input
            placeholder="Enter your comment here"
            inputChange={changeCommentHandler}
            clearInput = {formSubmitHandler}
            />
            <button><img src="https://img.icons8.com/external-inkubators-blue-inkubators/28/000000/external-send-ecommerce-user-interface-inkubators-blue-inkubators.png"/></button>
          </div>  
        </form>
      </div>
  );
};


const CommentForm = (props) => {
  return (
    <div>
      <FormModal
        closeForm={props.closeForm}
        achievementId={props.achievementId}
      />
    </div>
  );
};

export default CommentForm;
