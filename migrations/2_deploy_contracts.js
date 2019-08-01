const blockOTA = artifacts.require("blockOTA");

module.exports = function(deployer) {
  deployer.deploy(blockOTA);
};