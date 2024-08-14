// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {RealDigital} from "./RealDigital.sol";

error Unauthorized(address you, address owner);

contract STR {
    RealDigital public realDigitalContract;
    address[] public participants;

    constructor(address _realDigital, address[] memory _participants) {
        realDigitalContract = RealDigital(_realDigital);

        for (uint256 i = 0; i < participants.length; i++) {
            participants.push(_participants[i]);
        }
    }

    modifier onlyParticipants() {
        bool isParticipant = false;
        for (uint256 i = 0; i < participants.length; i++) {
            if (msg.sender == participants[i]) {
                isParticipant = true;
                break;
            }
        }
        if (!isParticipant) {
            revert Unauthorized(msg.sender, participants[0]);
        }
        _;
    }

    function requestToMint(uint256 amount) public onlyParticipants {
        realDigitalContract.mint(msg.sender, amount);
    }

    function requestToBurn(uint256 amount) public onlyParticipants {
        realDigitalContract.burnFrom(msg.sender, amount);
    }
}
