// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Whitelist {
    
    uint8 public maxCount;
    //uint8 public count;
    uint8 public numAddressesWhitelisted;
    mapping(address => bool) public addressList;

    constructor(uint8 _maxCount){
        maxCount = _maxCount;
    } 

    function addAddressToList() public{
        require(numAddressesWhitelisted<maxCount, "Sorry, List is full :(");
        require(!addressList[msg.sender], "You're already added to the list :)");
        addressList[msg.sender] = true;
        numAddressesWhitelisted +=1;
    }
    
}


