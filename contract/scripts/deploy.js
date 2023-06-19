

const hre = require("hardhat");

async function main() {
 

  const lock = await hre.ethers.deployContract("Lock");

  await lock.waitForDeployment();

  console.log(
    `Loc`
  );
  console.log(lock.target);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
