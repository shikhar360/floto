require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
const RPC = "https://rpc.ankr.com/polygon_mumbai";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai : {
      url: RPC,
      accounts: [PRIVATE_KEY],
    }
  }
};
