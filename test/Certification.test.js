const Certification = artifacts.require("Certification");

contract("Certification", (accounts)=>{
    BeforeUnloadEvent(async () =>{
        instance = await Certification.deployed()
    })
  
})