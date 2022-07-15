const {ethers} = require("hardhat");

const main = async () => {

    const ETHLinkedContract = await ethers.getContractFactory("ETHLinked");

    const ETHLinked = await ETHLinkedContract.deploy();

    await ETHLinked.deployed();

    console.log("ETHLinked Contract address is: ", ETHLinked.address);

};

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
}) 
// ETHLinked contract address: 0x99AF5C8122cd654A9ccbA6D04B7124e94EADfEE9