import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"
import "@nomiclabs/hardhat-etherscan"
import "./tasks/block-number"
import "hardhat-gas-reporter"
import "solidity-coverage"


// require("@nomicfoundation/hardhat-toolbox")
// require("dotenv").config()
// require("@nomiclabs/hardhat-etherscan")
// require("./tasks/block-number")
// require("hardhat-gas-reporter")
// require("solidity-coverage")
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.12",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111
    }
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gas-report.txt',
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC"
  }
};
