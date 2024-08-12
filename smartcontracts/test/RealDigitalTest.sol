// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {RealDigital} from "../src/RealDigital.sol";
import {BaseSetup} from "./BaseSetup.t.sol";

contract RealDigitalTest is BaseSetup {
    function setUp() public override {
        BaseSetup.setUp();
    }

    function test_verify_balance_of_deployer() public {
        uint256 balance = realDigital.balanceOf(controller);
        assertEq(balance, 1000 * 100);
    }
}
