// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract RealDigital is ERC20 {
    address str;
    address swap;

    event Swap(address indexed from, address indexed to, uint256 amount);

    constructor(address _str, address _swap) ERC20("RealDigital", "RD") {
        str = _str;
        swap = _swap;
    }

    modifier onlySTR() {
        require(msg.sender == str, "Unauthorized");
        _;
    }

    modifier onlySwap() {
        require(msg.sender == swap, "Unauthorized");
        _;
    }

    function mint(address participant, uint256 amount) public onlySTR {
        _mint(participant, amount);
    }

    function burnFrom(address participant, uint256 amount) public onlySTR {
        _burn(participant, amount);
    }

    function transferSwap(
        address from,
        address to,
        uint256 amount
    ) external onlySwap {
        _transfer(from, to, amount);
        emit Swap(from, to, amount);
    }
}
