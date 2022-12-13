require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const provider = process.env.HTTP_PROVIDER;
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: provider,
      accounts: [`0x${privateKey}`]
    }
  },
};
