const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying from address:", deployer.address);

  // Load contract factory
  const Waver = await ethers.getContractFactory("WalletStreetWaver");

  // Deploy with constructor arg
  const waver = await Waver.deploy("We are all Wallet Street Cousin!");

  // Wait for deployment to be mined
  await waver.waitForDeployment();

  // Log addresses and tx hash
  console.log("WalletStreetWaver deployed to:", await waver.getAddress());
  console.log("Deployment tx hash:", waver.deploymentTransaction().hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})