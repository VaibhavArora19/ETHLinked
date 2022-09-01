import Link from "next/link";

import classes from "./AchievementList.module.css";

import { useContext} from "react";

import { AppContext } from "../context/AchievementContext";

const AchievementList = (props) => {

  const ctx = useContext(AppContext);

  const isCommentPage = ctx.sharedState.isCommentPage;

  const randomImage = (props.id % 5) + 1;




  return (
    <div className={`${classes.achievement}`}>
      <div className="grid grid-cols-2 ">
        <div className= {classes.title}>
          <div className={`avatar ${classes.profile}`}>
            <div className="w-10 rounded-full">
              <img src={`/${randomImage}.png`} />
            </div>
          </div>
        <h1>{props.title}</h1>
        </div>
        <span className={classes.time}>
          {props.timestamp}
        </span>
      </div>

      <h3>{props.user}</h3>
      <h2>{props.description}</h2>
      <div className={classes.commentSection}>
        {isCommentPage ? <div></div> : (
          <Link href={`/Achievement/${props.id}`}>
          <div className={`grid grid-cols-2 ${classes.commentDiv}`}>
          <img src="/comment.png" />
          <span>{props.comments.length}</span> 
          </div>  
          </Link>
        )}
        <h4>#{props.tag}</h4>
      </div>

    </div>
  );
};

export default AchievementList;
