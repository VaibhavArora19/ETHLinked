import { useContext } from "react";
import { AppContext } from "../../components/context/AchievementContext";

import SearchBar from "../../components/UI/SearchBar";
import AchievementList from "../../components/Achievements/AchievementList";

const Users = () => {
    const ctx = useContext(AppContext);

    const check = (value) => {
        ctx.sharedState.searchByTagorUserName(value, 'User');
    }
    return <div>
    <SearchBar placeholder = 'Enter User Address' searchChange = {check}/>
    {ctx.sharedState.searchedArray.map((achievement) => (
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
};

export default Users;