const ChocoCoin = artifacts.require("Choco");

module.exports = function(deployer) {
  deployer.deploy(ChocoCoin, 1000000, "Choco Coin", 6, "ChC");
};
