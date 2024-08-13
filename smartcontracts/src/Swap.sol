// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {RealDigital} from "./RealDigital.sol";
import {RealTokenizado} from "./RealTokenizado.sol";

contract SwapOneStep {
    RealDigital public realDigital;
    RealTokenizado public realTokenizado1;
    RealTokenizado public realTokenizado2;

    address[] participants = [
        address(0x0),
        address(0x1),
        address(0x2),
        address(0x3),
        address(0x4)
    ];

    constructor() {}

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

    function swap(
        address _realDigital,
        address _realTokenizado1,
        address _client1,
        address _realTokenizado2,
        address _client2,
        uint256 amount
    ) external onlyParticipants {
        realDigital = RealDigital(_realDigital);
        realTokenizado1 = RealTokenizado(_realTokenizado1);
        realTokenizado2 = RealTokenizado(_realTokenizado2);

        //Transferir Real digital
        // Transferir Real tokenizado

        realDigital.transferSwap(
            realTokenizado1.owner(),
            realTokenizado2.owner(),
            amount
        );

        realTokenizado1.burnFrom(_client1, amount);
        realTokenizado2.mint(_client2, amount);
    }
}
