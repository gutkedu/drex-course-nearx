// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {RealDigital} from "./RealDigital.sol";
import {RealTokenizado} from "./RealTokenizado.sol";

error Unauthorized(address you, address owner);

contract SwapOneStep {
    RealDigital public realDigital;
    address[] participants;

    constructor(address _realDigital, address[] memory _participants) {
        realDigital = RealDigital(_realDigital);

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

    function swap(
        address _realTokenizado1,
        address _client1,
        address _realTokenizado2,
        address _client2,
        uint256 amount
    ) external onlyParticipants {
        RealTokenizado realTokenizado1 = RealTokenizado(_realTokenizado1);
        RealTokenizado realTokenizado2 = RealTokenizado(_realTokenizado2);

        realDigital.transferSwap(
            realTokenizado1.owner(),
            realTokenizado2.owner(),
            amount
        );

        realTokenizado1.burn(_client1, amount);
        realTokenizado2.mint(_client2, amount);
    }
}
