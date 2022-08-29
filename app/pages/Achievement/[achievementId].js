import { useRouter } from "next/router";

import { useContext } from "react";

import { AppContext } from "../../components/context/AchievementContext";

import AchievementList from "../../components/Achievements/AchievementList";
import SingleComment from "../../components/CommentSection/SingleComment";

const Comments = () => {
  const router = useRouter();
  const ctx = useContext(AppContext);


  ctx.sharedState.commentPageHandler(true);
  const achievementId = router.query.achievementId;

  let achievementArray = ctx.sharedState.achievementArray;

  const achievement = achievementArray.filter(
    (singleAchievement) => singleAchievement.id == achievementId
  );

  return <div>
  {(achievement.length != 0) && <div>
  <AchievementList 
    key={achievement[0].id}
    id={achievement[0].id}
    title={achievement[0].title}
    description={achievement[0].description}
    tag={achievement[0].tag}
    timestamp={achievement[0].timestamp}
    user={achievement[0].user}
    comments = {achievement[0].comments}
    />
    {achievement[0].comments.map((comment, index) => (
      <SingleComment key = {index} comment = {comment} />
      ))}  
      </div>}
      </div> 


};

export default Comments;
