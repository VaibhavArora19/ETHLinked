// src/context/state.js
import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchedArray, setSearchedArray] = useState([]);
    
  const [achievementArray, setAchievementArray] = useState([
    {
      id: 1,
      user: "0X2B",
      title: "MLH",
      description: "MLH Fellowship",
      tag: "MLH",
      comments: [],
      timestamp: "20:01",
    },
    {
      id: 2,
      user: "0X2B",
      title: "MICROSOFT",
      description: "MLH Fellowship",
      tag: "MICROSOFT",
      comments: [],
      timestamp: "20:01",
    },
  ]);

  const searchByTagorUserName = (keyword, TagorUserName) => {
    let matched = [];
    let matchedKeyWord = keyword.toUpperCase();

    if(TagorUserName === 'Tag'){

      achievementArray.map(achievement => {
        if(achievement.tag.includes(matchedKeyWord) && matchedKeyWord !== '' ){
           matched.push(achievement);
        }
      })
    } else if(TagorUserName === 'User') {

      achievementArray.map(achievement => {
        if(achievement.user.includes(keyword) && matchedKeyWord !== '' ){
           matched.push(achievement);
        }
      })
    }

    setSearchedArray(matched);

  };

  const sharedState = {achievementArray, searchByTagorUserName, searchedArray};

  return <AppContext.Provider value={{sharedState}}>
      {children}
    </AppContext.Provider>
};
