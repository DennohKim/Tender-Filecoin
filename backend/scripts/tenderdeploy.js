const {ethers} = require("hardhat");
//1.TenderFileConContractAddress 0x05198c2783d3497361ca936a70E5643287dfD0B8
//2. TenderFileConContractAddress 0xE50A2E68f31e899D6e794314823cD2ac126BD764
//3. TenderFileConContractAddress 0x1F949e4688F0933B699899a04ad4f9E76112b560
//4. TenderFileConContractAddress 0x17cAC4066211b5FCeEDCee67c7ae18950417f4c9
//5. TenderFileConContractAddress 0x0dDCC4ccA81cF91953a6dcbf8da45C125d39A6bE
//6. TenderFileConContractAddress 0x21ba8e6B05c8020d985777Ab10457cE7C0626fa1

async function main(){
    //get the contract
    const TenderFileCoinContract = await ethers.getContractFactory("Bider");
    //deploy the contract
    const TenderFileCoinContractDeploy = await TenderFileCoinContract.deploy();
    //await deployment
    await TenderFileCoinContractDeploy.deployed();
    //console the address
    console.log("TenderFileConContractAddress", TenderFileCoinContractDeploy.address);
}
//call main
main().then(()=>
process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})