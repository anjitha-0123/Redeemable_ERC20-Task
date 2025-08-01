require('@nomicfoundation/hardhat-toolbox');
require('@openzeppelin/hardhat-upgrades');

module.exports = {
  defaultNetwork:"sepolia",
  solidity: "0.8.27",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/X9HkJESPs40A-uHry8_ya",
      accounts:["1bf48f98ece21e4191936bb3a0f3246a77d84cbed28d0a341dad162e2193e9f8"]
    }
  },
};
