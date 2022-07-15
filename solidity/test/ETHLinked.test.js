const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("ETHLinked Contract", () => {
    let owner, addr1, ETHLinked;

    beforeEach(async () => {
        [owner, addr1] = await ethers.getSigners();

        const ETHLinkedContract = await ethers.getContractFactory("ETHLinked");

        ETHLinked = await ETHLinkedContract.deploy();

    });

    it("should add and return the new achievement correctly", async () => {

        await ETHLinked.addAchievement("mlsa", "I got into mlsa", "microsoft");

        const achievementArray = await ETHLinked.getAchievements();

        expect(achievementArray[0].title).to.equal("mlsa");

        expect(achievementArray[0].tag).to.equal("microsoft");

    });

    it("should return the idCount correctly", async () => {
        let idCount;
        
        idCount = await ETHLinked.idCount();

        expect(idCount).to.equal(1);

        await ETHLinked.addAchievement("mlsa", "I got into mlsa", "microsoft");

        idCount = await ETHLinked.idCount();

        expect(idCount).to.equal(2);
    });

    it("should add comments correctly", async () => {

        await ETHLinked.addAchievement("mlsa", "I got into mlsa", "microsoft");

        await ETHLinked.addComment(1, "nice work");

        const achievementArray = await ETHLinked.getAchievements();

        const firstAchievement = achievementArray[0];

        expect(firstAchievement.comments[0]).to.equal("nice work");

    });
})