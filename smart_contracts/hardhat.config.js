require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.18",
  networks: {
    somnia: {
      url: process.env.SOMNIA_RPC,
      chainId: 50312,
      accounts: process.env.DEPLOYER_PRIVATE_KEY ? [process.env.DEPLOYER_PRIVATE_KEY] : [],
      timeout: 60000  // ⏳ set timeout to 60 seconds
    },

    somnia_mainnet: {
      url: process.env.SOMNIA_MAINNET_RPC,
      chainId: 5031,
      accounts: process.env.DEPLOYER_PRIVATE_KEY ? [process.env.DEPLOYER_PRIVATE_KEY] : [],
      timeout: 60000  // ⏳ set timeout to 60 seconds
    }
  }
};
