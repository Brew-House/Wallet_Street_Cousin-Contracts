require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
//require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-verify");

module.exports = {
  solidity: {
    version: "0.8.30",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
      evmVersion: "london"
    },
  },
  networks: {
    flarescan: {
      url: "https://flare-api.flare.network/ext/C/rpc",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 14,
    },
  },
  etherscan: {
    apiKey: {
      flarescan: "flarescan", // placeholder, no real API key needed
    },
    customChains: [
      {
        network: "flarescan",
        chainId: 14,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/14/etherscan",
          browserURL: "https://flare.routescan.io",
        },
      },
    ],
  },
};
