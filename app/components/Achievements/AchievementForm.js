import Input from "../UI/Input";
import Button from "../UI/Button";

import classes from "./AchievementForm.module.css";

const AchievementForm = () => {
  return (
    <div>
      <form className={classes.form}>
        <div class="mockup-window border border-base-100">
          <Input label="Title" placeholder="Did you won oscar today?" />
          <Input
            label="Description"
            placeholder="Tell us about your achievement! (350 words)"
          />
          <progress
            className={`progress progress-secondary w-56 ${classes.bar}`}
            value="50"
            max="100"
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
