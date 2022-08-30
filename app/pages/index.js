import { Fragment, useContext } from "react";
import { AppContext } from "../components/context/AchievementContext";

import AchievementList from "../components/Achievements/AchievementList";
import LandingPage from "../components/LandingPage/LandingPage";

import Sidebar from "../components/Sidebar/Sidebar";

import classes from "../styles/Home.module.css";

export default function Home() {
  const ctx = useContext(AppContext);
  ctx.sharedState.commentPageHandler(false);
  const isSuccess = ctx.sharedState.isSuccess;

  let achievementListClass, sideBarClass;

  achievementListClass = { display: "inline-block", width: "59%" };
  sideBarClass = {
    float: "right",
    display: "inline-block",
    width: "37%",
    marginLeft: "2%",
  };

  // will go at line 65

  return (
    <Fragment>
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
        </div>
        <LandingPage />
        <div style={{ display: "inline-block" }}>
          <div style={achievementListClass}>
            {ctx.sharedState.achievementArray.map((achievement) => (
              <AchievementList
                key={achievement.id}
                id={achievement.id}
                title={achievement.title}
                description={achievement.description}
                tag={achievement.tag}
                timestamp={achievement.timestamp}
                user={achievement.user}
                comments={achievement.comments}
              />
            ))}
          </div>
          {ctx.sharedState.achievementArray.length !== 0 && (
            <div style={sideBarClass}>
              <Sidebar />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
