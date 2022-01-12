import hre from "hardhat";

const main = async () => {
  // Obtain reandom SignerAddress for testing
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to", waveContract.address);
  console.log("Contract deployed by", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  const waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
  return waveCount;
};

(async () => {
  try {
    await main();
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
})();
