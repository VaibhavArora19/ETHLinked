// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract ETHLinked {

    // Struct defining details about the achievement
    struct Achievement{
        uint id;
        address user;
        string title;
        string description;
        string tag;
        string[] comments;
        uint timestamp;
    }

    uint idCount = 1;   

    // Array to store all of the achievements
    Achievement[] private achievements;

    // Function to add a new achievement to the array
    function addAchievement(string memory _title, string memory _description, string memory _tag) public {
        require(bytes(_description).length <= 350, "Description should not be more than 350 words");

        // _id provides unique id to every achievement
        uint _id = idCount;

        // _comments let other useers comment on a specific achievement due to gas fee it has been limited to only
        // 10 comments per achievement.
        string[] memory _comments = new string[](10);

        achievements.push(Achievement(_id, msg.sender, _title, _description, _tag, _comments, block.timestamp));

        idCount++;   
    }

    // Function to get all of the achievements
    function getAchievements() public view returns(Achievement[] memory) {
        return achievements;
    }

    // Function to add comment on a specific achievement
    function addComment(uint id, string memory comment) public {     
        require(id<=idCount && id>0, "Achievemnt does not exist!");

        for(uint i =0; i<achievements.length; i++){
            if(id == achievements[i].id){
                achievements[i].comments.push(comment);
                break;
            }
        }

    }
}