const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const GreenToken = await ethers.getContractFactory("GreenToken");
  const greentoken = await upgrades.deployProxy(GreenToken, [deployer.address], {
    initializer: "initialize",
  });
  await greentoken.waitForDeployment();
  console.log("GreenToken proxy deployed at:", await greentoken.getAddress());
}

main();