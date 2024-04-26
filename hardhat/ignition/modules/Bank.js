const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const BankModule = buildModule("BankModule", (m) => {
  // Define the contract within the module using its artifact
  const bank = m.contract("Bank");

  // The constructor does not require any parameters
  // Ignition will deploy the Bank contract and link it to the module
  return { bank };
});

module.exports = BankModule;
