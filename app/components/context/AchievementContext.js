// src/context/state.js
import { createContext,  useEffect, useState } from "react";
import {useRouter} from 'next/router';

import moment from 'moment';
import {ethers} from 'ethers';

import {ABI, contractAddress} from '../constants/index';

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [searchedArray, setSearchedArray] = useState([]);
  const [isCommentPage, setIsCommentPage] = useState(false);
  const router = useRouter();
  const [account, setAccount] = useState({
    isConnected: false,
    accountAddress: null,
    signer: null,
    contract: null,
    chainId: null,
  });

  const [achievementArray, setAchievementArray] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  if(isSuccess){
    setTimeout(() => {
      setIsSuccess(false);
    },3500);
  }

  const commentPageHandler = (value) => {
    setIsCommentPage(value);
  }
  // <- useEffect connects to the wallet and also get the achievements from the blockchain ->
  useEffect(() => {
    connectWallet();
  }, []);

  // <- useEffect ends here -> 

    const connectWallet = async() => {
      const { ethereum } = window;
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

      getAchievements();
    }

  // <- getAchievements is called to get the achievements from the blockchain ->

  async function getAchievements() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, ABI, signer);
    

    const achievements = await contract.getAchievements();

    const filteredAchievements = achievements.map((achievement) => {
      
      const epochTime = achievement.timestamp;
      const date = new Date(epochTime*1000);
      date = date.toLocaleDateString("en-US").toString();

      let time = '';
      for(let i =2; i>=0; i--){
        time += date.split('/')[i];
      }

      const dateValue = moment(time, "YYYYDDMM").fromNow();


    
      return {
        id: achievement.id.toString(),
        title: achievement.title,
        description: achievement.description,
        tag: achievement.tag.toUpperCase(),
        user:achievement.user,
        comments: achievement.comments,
        timestamp: `${dateValue}`      
      }
    })
    filteredAchievements.reverse();
    setAchievementArray(filteredAchievements);

    setAccount((prevState) => {
      return {
       ...prevState,
      signer: signer,
      contract: contract
    }

    })
  }

  // <- getAchievements ends here ->


  // <- it searches the achievemenst by using tag or userId ->

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

  // <- searchByTagorUserName ends here ->

  async function newAchievement(achievementData) {
    const {title, description, tag} = achievementData;
    const tx = await account.contract.addAchievement(title, description, tag);
    router.push('/');
    await tx.wait();
    setIsSuccess(true);
    getAchievements();
  
  }

  // <- addComment allows you to comment on a particular achievement

  async function addComment(commentId, newComment){

    const _id = Number(commentId);

    const tx = await account.contract.addComment(_id, newComment);
    await tx.wait(); 
    
    getAchievements();
  } 

  // <- sharedState is the one that is being shared accross every component 
  
  const sharedState = {
    achievementArray,
    searchByTagorUserName,
    searchedArray,
    account,
    newAchievement,
    getAchievements,
    isSuccess,
    connectWallet,
    isCommentPage,
    commentPageHandler,
    addComment,
  };

  //  <- sharedState ends here ->

  return (
    <AppContext.Provider value={{ sharedState }}>
      {children}
    </AppContext.Provider>
  );
}
