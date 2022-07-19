import { useState, useContext } from "react";

import {AppContext} from "../context/AchievementContext";

import Input from "../UI/Input";
import Button from "../UI/Button";

import classes from "./AchievementForm.module.css";

const AchievementForm = () => {
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tag: ''
  });
  const ctx = useContext(AppContext);

  if(!ctx.sharedState.account.isConnected)
  {
    return <div className= {classes.connect}>Please Connect to MetaMask to add Achievement!!!</div>
  }

  const titleHandler = (input) => {
    
    setFormData((prevState) => {
      return {
        ...prevState,
        title: input
      }
    })
  }
  const descriptionHandler = (input) => {
     
      setFormData((prevState) => {
        return {
          ...prevState,
          description: input
        }
      });
      setProgress(input.length.toString());
  }

  const tagHandler = (input) => {
    console.log('tag value', input);
    setFormData((prevState) => {
      return {
        ...prevState,
        tag:input
      }
    })
  }

  const formSubmitHandler = (event) => {
    event.preventDefault(); 
    ctx.sharedState.newAchievement(formData);

  };
  return (
    <div>
      <form className={classes.form} onSubmit = {formSubmitHandler}>
        <div className="mockup-window border border-base-100">
          <Input label="Title" placeholder="Did you won oscar today?" inputChange={titleHandler} />
          <Input
            label="Description"
            placeholder="Tell us about your achievement! (350 words)"
            inputChange={descriptionHandler}
            maxlength="350"
          />
          <progress
            className={`progress progress-secondary w-56 ${classes.bar}`}
            value={progress}
            max="350"
          ></progress>
          <Input
            label="Tag"
            placeholder="Don't use '#' we'll do that for you :)"
            inputChange={tagHandler}
            maxlength = "15"
          />
        </div>
        <Button className={classes.btn}>Add Achievement</Button>
      </form>
    </div>
  );
};

export default AchievementForm;
