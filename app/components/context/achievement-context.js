// src/context/state.js
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchedArray, setSearchedArray] = useState([]);

  const [account, setAccount] = useState({
    isConnected: false,
    accountAddress: null,
    signer: null,
    contract: null,
    chainId: null,
  });

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

  useEffect(() => {
    const { ethereum } = window;
    console.log(ethereum.chainId);

    const connectWallet = async () => {
      let accounts;
      if (!ethereum.isMetaMask) {
        alert("Please install MetaMask");
        return;
      }
      if (ethereum && !account.isConnected) {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount((prevState) => {
          return {
            ...prevState,
            isConnected: true,
            accountAddress: accounts[0],
          };
        });
        const chainId = await ethereum.request({ method: "eth_chainId" });

        if (chainId !== "0x3") {
          alert("Please connect to Ropsten Testnet!!!");
        } else {
          setAccount((prevState) => {
            return {
              ...prevState,
              chainId: "0x3",
            };
          });
        }
      }
    };
    connectWallet();
  }, []);

  const searchByTagorUserName = (keyword, TagorUserName) => {
    let matched = [];
    let matchedKeyWord = keyword.toUpperCase();

    if (TagorUserName === "Tag") {
      achievementArray.map((achievement) => {
        if (achievement.tag.includes(matchedKeyWord) && matchedKeyWord !== "") {
          matched.push(achievement);
        }
      });
    } else if (TagorUserName === "User") {
      achievementArray.map((achievement) => {
        if (achievement.user.includes(keyword) && matchedKeyWord !== "") {
          matched.push(achievement);
        }
      });
    }

    setSearchedArray(matched);
  };

  const sharedState = {
    achievementArray,
    searchByTagorUserName,
    searchedArray,
    account
  };

  return (
    <AppContext.Provider value={{ sharedState }}>
      {children}
    </AppContext.Provider>
  );
}
