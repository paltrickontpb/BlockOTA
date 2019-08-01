import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/blockOTA.sol";

contract TestblockOTA {
  function testNumberIndex() public {
    blockOTA bOTA = blockOTA(DeployedAddresses.blockOTA());

    uint expected = 1;
    bOTA.firmwareUpload(1, "abc", 1, "oemkey", "abcd");

    Assert.equal(bOTA.checkVersion(), expected, "Version should match with it");
  }
}