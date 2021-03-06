import { expect } from "chai";
import hre from "hardhat";

describe("WavePortal", function () {
  it("Should return a uint256 waveCount", async function () {
    const waveContractFactory = await hre.ethers.getContractFactory(
      "WavePortal"
    );
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    expect(await (await waveContract.getTotalWaves())._isBigNumber);
  });
});
