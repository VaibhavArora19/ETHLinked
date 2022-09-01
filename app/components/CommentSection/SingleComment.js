import classes from './SingleComment.module.css';

const SingleComment = (props) => {
    return <div className= {classes.singleComment}>
    <img src="https://img.icons8.com/bubbles/50/000000/user-male-circle.png"/>
        <div>
            <h1>Anonymous</h1>
            <h2>{props.comment}</h2>
        </div>
     </div>
};

export default SingleComment;