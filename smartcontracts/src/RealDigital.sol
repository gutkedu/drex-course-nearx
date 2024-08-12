// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract RealDigital is ERC20 {
    constructor() ERC20("RealDigital", "RD") {
        _mint(msg.sender, 1000 * 100);
    }
}
