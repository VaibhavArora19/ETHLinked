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
// ETHLinked contract address: 0x7419341f98f4B28E4Fe47b43CDD5319dB90BC2a2