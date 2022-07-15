require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const INFURA_URL_API = process.env.ROPSTEN_URL_API;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: INFURA_URL_API,
      accounts: [PRIVATE_KEY], 
    }
  }
};
