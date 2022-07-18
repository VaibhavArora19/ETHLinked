import { useState, useContext } from "react";

import {AppContext} from "../context/Achievement-context";

import Input from "../UI/Input";
import Button from "../UI/Button";

import classes from "./AchievementForm.module.css";

const AchievementForm = () => {
  const ctx = useContext(AppContext);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tag: ''
  });


  const isSuccess = ctx.sharedState.isSuccess;

  const [progress, setProgress] = useState(0);

  const progressHandler = (input, label) => {
    if(label === 'Title'){
     
      setFormData((prevState) => {
        return {
          ...prevState,
          title: input
        }
      })

    }else if(label === 'Description'){
 
      setFormData((prevState) => {
        return {
          ...prevState,
          description: input
        }
      })
      setProgress(input.length.toString());
    }else{
      
      setFormData((prevState) => {
        return {
          ...prevState,
          tag: input
        }
      })
    }
  }


  const formSubmitHandler = (event) => {
    event.preventDefault();
    ctx.sharedState.newAchievement(formData);
    setFormData({title: '', description: '', tag: ''});

  };
  return (
    <div>
      <form className={classes.form} onSubmit = {formSubmitHandler}>
        <div class="mockup-window border border-base-100">
          <Input label="Title" placeholder="Did you won oscar today?" inputChange={progressHandler} />
          <Input
            label="Description"
            placeholder="Tell us about your achievement! (350 words)"
            inputChange={progressHandler}
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
            inputChange={progressHandler}
          />
        </div>
        <Button className={classes.btn}>Add Achievement</Button>
      </form>
      {isSuccess && <div className={`alert alert-success shadow-lg ${classes.notification}`}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Achievement added successfully!!!</span>
      </div>
    </div>}
    </div>
  );
};

export default AchievementForm;
