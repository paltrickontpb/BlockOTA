/*if(typeof web3 !== 'undefined') {
    console.log("Unlock MetaMask");
    web3 = new Web3(web3.currentProvider);
}
else {
    console.log("Install MetaMask");
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
*/

web3 = new Web3(web3.currentProvider);
web3.eth.defaultAccount=web3.eth.accounts[0];

var otaContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [],
		"name": "stopContract",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "firmwareMetadata",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_oemkey",
				"type": "string"
			}
		],
		"name": "pairOem",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "checkVersion",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_firmwareversion",
				"type": "uint256"
			},
			{
				"name": "_metadata",
				"type": "string"
			},
			{
				"name": "_checksum",
				"type": "uint256"
			},
			{
				"name": "_oem",
				"type": "string"
			},
			{
				"name": "_ipfsadd",
				"type": "string"
			}
		],
		"name": "firmwareUpload",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "resumeContract",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "oemDev",
				"type": "string"
			}
		],
		"name": "getFirmware",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "ipfsLink",
				"type": "string"
			}
		],
		"name": "newFirmware",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "oemCheckTrigger",
		"type": "event"
	}
]);

var blockOTA = otaContract.at("0x604b0de21F2E2f8628dc4f55e87F329094cdFCDf");
console.log(blockOTA);

function pushToEth(fv, meta, cs, oem, ipfs){
    blockOTA.firmwareUpload(fv, meta, cs, oem, ipfs);
}