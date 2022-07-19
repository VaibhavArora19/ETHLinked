import { useContext } from "react";
import AchievementList from "../components/Achievements/AchievementList";
import { AppContext } from "../components/context/AchievementContext";

import classes from "../styles/Home.module.css";

export default function Home() {
  const ctx = useContext(AppContext);
  const isSuccess = ctx.sharedState.isSuccess;
  return (
    <div className={classes.container}>
    <div>
    {isSuccess && (
      <div
          className={`alert alert-success shadow-lg ${classes.notification}`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Achievement added successfully!!!</span>
          </div>
        </div>
      )}
      {ctx.sharedState.achievementArray.map((achievement) => (
        <AchievementList
        key={achievement.id}
        title={achievement.title}
        description={achievement.description}
        tag={achievement.tag}
        timestamp={achievement.timestamp}
        user={achievement.user}
        />
        ))}
        </div>
        </div>
  );
}
