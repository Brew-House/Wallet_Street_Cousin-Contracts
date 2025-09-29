require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    flarescan: {
     provider: () => new HDWalletProvider(
  [process.env.PRIVATE_KEY],
  "https://flare-api.flare.network/ext/C/rpc"
),
      network_id: 14,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.30+commit.73712a01",
      settings: {
        optimizer: {
          enabled: false,    // ✅ must be false
          runs: 200,
        },
        evmVersion: "Prague" // ✅ must match metadata
      },
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    flarescan: "flarescan", // placeholder, not used by Routescan
  },
  verify: {
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
