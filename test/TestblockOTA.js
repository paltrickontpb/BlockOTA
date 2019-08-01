var blockota = artifacts.require("./blockOTA.sol");
//install chai npm package
chai = require("chai");
//install chai-as-promised
chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
expect = chai.expect;

contract("Test the contract",function(accounts){
    describe("Deploy the smart contract",function(){
        it("Catch an instance of the contract",function(){
          return blockota.new().then(function (instance) {
             otacontract=instance;
          });
        });
      });
    describe("Check function firmwareUpload",function(){
      it("Call function firmwareUpload",function(){
        return otacontract.firmwareUpload(101,"Blockchain",50,"Adafruit","12f12d4214f1d2421").then(function(res){
          expect(res).to.not.be.an("error");
        });
      });


      //create a function for displaying firmware uploaded details and check if the above firmwareUpload function worked
      //maybe push the firmwareversion

      //create a function for displaying ipfsaddress taking firmwareversion as input and replace 'functionName' to the actual name
      it("Check ipfs address",function(){
        return otacontract.getFirmware("Adafruit").then(function(res){
          expect(res).to.be.equal('12f12d4214f1d2421');
        });
      });

    });

    describe("Check pairing with OEM",function(){
        it("Call function pairOem",function(){
            return otacontract.pairOem("notAdafruit").then(function(res){
              expect(res).to.be.equal(false);
            });
          });

        //other it functions in every describe to test the function calls
    });

    describe("Check version",function(){
        it("Getter function shoudnt throw error",function(){
            return otacontract.checkVersion().then(function(res){
                expect(res).to.not.be.an("error");
            });
          });

        //other it functions in every describe to test the function calls
    });
})