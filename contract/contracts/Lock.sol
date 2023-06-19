// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint public numb;
   
   function read () public view returns(uint){
    return numb ;
   }

   function setNum(uint _num) external {
    numb = _num ;
   }
}
