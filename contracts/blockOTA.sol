pragma solidity >=0.4.22 <0.6.0;

contract blockOTA{
    uint[] public incrementalVersion;
    string[] public firmwareMetadata;
    
    uint[] public checksumType;
    string[] private oemKey;
    string [] public firmwareIpfsAddress;
    
    address owner;
    
    event newFirmware(string ipfsLink);
    event oemCheckTrigger();
    
    constructor() public{
        owner = msg.sender;
    }
    
    function firmwareUpload(uint _firmwareversion, string memory _metadata, uint _checksum, string memory _oem, string memory _ipfsadd ) 
    public returns(bool, string memory){
        require(owner==msg.sender);
        incrementalVersion.push(_firmwareversion);
        firmwareMetadata.push(_metadata);
        checksumType.push(_checksum);
        oemKey.push(_oem);
        firmwareIpfsAddress.push(_ipfsadd);
        emit newFirmware(_ipfsadd);
        if (incrementalVersion[incrementalVersion.length-1] == _firmwareversion){
            return (true, firmwareIpfsAddress[firmwareIpfsAddress.length-1]);
        } else {
            return (false, "Not Available");
        }
    }
    
    function checkVersion() public view
    returns(uint){
        return incrementalVersion[incrementalVersion.length-1];
    }
    
    function pairOem(string memory _oemkey) public
    returns(bool){
        emit oemCheckTrigger();
        string memory currentOem = oemKey[oemKey.length-2];
        if(keccak256(abi.encodePacked((_oemkey)))==keccak256(abi.encodePacked((currentOem)))){
            return true;
        } else {
            return false;
        }
    }
    
    
}