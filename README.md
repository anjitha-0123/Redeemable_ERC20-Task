# 🌱 GreenToken: Upgradeable ERC20 Token

GreenToken is an upgradeable ERC20 token built with Solidity, OpenZeppelin, and the UUPS proxy pattern. It features minting, burning and a redeem function for placeholder rewards. The project uses Hardhat for development and deployment, and includes a React-based UI for user interaction.

## ✨ Features

-🔄 Upgradeable: Uses OpenZeppelin’s UUPS proxy pattern for future upgrades.
-🪙 Mint: Owner can mint new tokens.
-🔥 Burn: Any token holder can burn their tokens voluntarily.
-💸 Transfer: Standard ERC20 transfer functionality.
-🎁 Redeem: Token holders can redeem tokens for a placeholder reward 

## 🛠️ Tech Stack
⚡ Solidity: Smart contract.
🛡️ OpenZeppelin: Upgradeable ERC20, UUPS proxy, and access control modules.
🏗️ Hardhat: Development deployment framework.
🌐 Sepolia Testnet: For live contract testing.
⚛️ React: Frontend UI for interacting with the contract.

## 🚀 Getting Started
1. Clone the Repository
```
git clone git@github.com:anjitha-0123/Redeemable_ERC20-Task.git
```
2. Change Directory
```
cd Hardhat
```
3. Install Dependencies
```
npm install
```
4. Compile Contracts
```
npx hardhat compile
```
5. Deploy to Localhost
Start a local node:
```
npx hardhat node
```
Deploy:
```
npx hardhat run scripts/deploy.js --network localhost
```

6. Deploy to Sepolia Testnet
Update your hardhat.config.js with your Sepolia RPC URL and private key. Then:
```
npx hardhat run scripts/deploy.js --network sepolia
```
7. Run the React UI
```
cd ui
```
```
npm install
```
```
npm run dev
```
## 📒 Upgradeability
Note:It allows to change contract’s logic after deployment without losing user balances or data. This project uses OpenZeppelin’s UUPS proxy pattern, so the contract can be upgraded by the owner if needed. Upgrades are done safely using scripts, and only authorized accounts can perform them. This helps keep token secure and future-proof.

## 📚 Reference
https://docs.openzeppelin.com/upgrades-plugins/1.x/
https://docs.openzeppelin.com/contracts/5.x/wizard


