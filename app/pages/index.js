import { useContext } from "react";
import AchievementList from "../components/Achievements/AchievementList";
import { AppContext } from "../components/context/AchievementContext";

export default function Home() {
  const ctx = useContext(AppContext)
  
  return (
    <div>
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
  );
}
