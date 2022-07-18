import { useState } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";

import classes from "./AchievementForm.module.css";

const AchievementForm = () => {
  const [progress, setProgress] = useState(0);
  
  const progressHandler = (input) => {
    setProgress(input.length.toString());
  }
  return (
    <div>
      <form className={classes.form}>
        <div class="mockup-window border border-base-100">
          <Input label="Title" placeholder="Did you won oscar today?" />
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
          />
        </div>
        <Button className={classes.btn}>Add Achievement</Button>
      </form>
    </div>
  );
};

export default AchievementForm;
