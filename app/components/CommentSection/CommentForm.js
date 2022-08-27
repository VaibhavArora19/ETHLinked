import Input from "../UI/Input";
import Button from "../UI/Button";

import classes from "./CommentForm.module.css";

const FormModal = () => {
  const formSubmitHandler = () => {
    console.log('lol');
  };

  return (
    <div className= {classes.form}>
      <form onSubmit={formSubmitHandler}>
        <Input label="Add Comment" placeholder="Enter your comment here" />
        <Button>Comment</Button>
      </form>
    </div>
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
        <Backdrop closeForm = {props.closeForm}/>
        <FormModal />
    </div>
};

export default CommentForm;
