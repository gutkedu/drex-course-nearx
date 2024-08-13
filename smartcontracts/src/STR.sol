// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {RealDigital} from "./RealDigital.sol";

contract STR {
    RealDigital public realDigitalContract;

    address[] public participants = [
        address(0x0),
        address(0x1),
        address(0x2),
        address(0x3),
        address(0x4)
    ];

    modifier onlyParticipants() {
        bool isParticipant = false;
        for (uint256 i = 0; i < participants.length; i++) {
            if (msg.sender == participants[i]) {
                isParticipant = true;
                break;
            }
        }
        require(isParticipant, "Unauthorized");
        _;
    }

    function requestToMint(uint256 amount) public onlyParticipants {
        realDigitalContract.mint(msg.sender, amount);
    }

    function requestToBurn(uint256 amount) public onlyParticipants {
        realDigitalContract.burnFrom(msg.sender, amount);
    }
}
