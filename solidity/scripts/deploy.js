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
// ETHLinked contract address: 0xdBEAB88590a6CB699970914a4CBAaD9409cA0480