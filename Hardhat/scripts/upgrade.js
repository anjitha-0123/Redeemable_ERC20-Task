const { ethers, upgrades } = require("hardhat");

async function main() {
  const GreenTokenV2 = await ethers.getContractFactory("GreenTokenV2");
  const upgraded = await upgrades.upgradeProxy("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", GreenTokenV2);
  console.log("GreenToken upgraded at:", await upgraded.getAddress());
}

main();