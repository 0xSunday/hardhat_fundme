// const { deployments } = require("chai");

const { deployments, ethers, getNamedAccounts } = require("hardhat");
const { assert, expect } = require("chai");

describe("FundMe", async function () {
  let fundMe;
  let deployer;
  let mockV3Aggregator;

  beforeEach(async function () {
    deployer = getNamedAccounts().deployer;
    await deployments.fixture(["all"]);
    fundMe = await ethers.deployContract("FundMe", deployer);
    mockV3Aggregator = await ethers.deployContract(
      "MockV3Aggregator",
      deployer
    );
  });

  // describe("constructor", async function () {
  //   it("sets the aggrigator address currectly ", async function () {
  //     const response = await fundMe.priceFeed();
  //     assert.equal(response, mockV3Aggregator.address);
  //   });
  // });

  describe("fund", async () => {
    it("fails if you don't spend enough eth", async () => {
      await expect(fundMe.fund()).to.be.revertedWith(
        "You need to send more ETH!!"
      );
    });
  });
});
