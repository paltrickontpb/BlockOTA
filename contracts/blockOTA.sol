pragma solidity >=0.4.22 <0.6.0;

contract blockOTA{
    uint[] private incrementalVersion;
    string[] public firmwareMetadata;
    
    uint private checksumType;
    string[] private oemKey;
    string [] private firmwareIpfsAddress;
    
    address private owner;
    bool jamSig;
    
    event newFirmware(string ipfsLink);
    event oemCheckTrigger();
    
    constructor() public{
        owner = msg.sender;
    }
    
    modifier onlyAuth{
        require(msg.sender == owner);
        _;
    }
    
    modifier jamState{
        require(!jamSig);
        _;
    } 
    
    function stopContract() public onlyAuth{
        jamSig = true;
    }
    
    function resumeContract() public onlyAuth{
        jamSig = false;
    }
    
    function firmwareUpload(uint _firmwareversion, string memory _metadata, uint _checksum, string memory _oem, string memory _ipfsadd ) jamState onlyAuth
    public returns(bool, string memory){
        incrementalVersion.push(_firmwareversion);
        firmwareMetadata.push(_metadata);
        checksumType = _checksum;
        oemKey.push(_oem);
        firmwareIpfsAddress.push(_ipfsadd);
        emit newFirmware(_ipfsadd);
        if (incrementalVersion[incrementalVersion.length-1] == _firmwareversion){
            return (true, firmwareIpfsAddress[firmwareIpfsAddress.length-1]);
        } else {
            return (false, "Not Available");
        }
    }
    
    function checkVersion() jamState public view
    returns(uint){
        return incrementalVersion[incrementalVersion.length-1];
    }
    
    function pairOem(string memory _oemkey) jamState public view
    returns(bool){
        string memory currentOem = oemKey[oemKey.length-1];
        if(keccak256(abi.encodePacked((_oemkey)))==keccak256(abi.encodePacked((currentOem)))){
            return true;
        } else {
            return false;
        }
    }
    
    function getFirmware(string memory oemDev) jamState public view
    returns(string memory){
        require(keccak256(abi.encodePacked((oemDev))) == keccak256(abi.encodePacked((oemKey[oemKey.length-1]))));
        return firmwareIpfsAddress[firmwareIpfsAddress.length-1];
    }
    
}