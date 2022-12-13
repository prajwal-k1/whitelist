const { ethers } = require("hardhat");

async function main() {
  const constractFactory = await ethers.getContractFactory("Whitelist");
  console.log("setting up contract factory");
  const deployContract = await constractFactory.deploy(20);
  console.log("deploying contract");
  await deployContract.deployed();

  console.log("Contract deployed at : ", deployContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
