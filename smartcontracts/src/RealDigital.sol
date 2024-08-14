// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

error Unauthorized(address you, address owner);

contract RealDigital is ERC20 {
    address public str;
    address public swap;
    address public bacen;

    event Swap(address indexed from, address indexed to, uint256 amount);

    constructor() ERC20("RealDigital", "RD") {
        bacen = msg.sender;
    }

    function setSTR(address _str) public onlyBacen {
        str = _str;
    }

    function setSwap(address _swap) public onlyBacen {
        swap = _swap;
    }

    modifier onlyBacen() {
        if (msg.sender != bacen) {
            revert Unauthorized(msg.sender, bacen);
        }
        _;
    }

    modifier onlySWAP() {
        if (msg.sender != swap) {
            revert Unauthorized(msg.sender, swap);
        }
        _;
    }

    modifier onlySTR() {
        if (msg.sender != str) {
            revert Unauthorized(msg.sender, str);
        }
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
    ) external onlyBacen {
        _transfer(from, to, amount);
        emit Swap(from, to, amount);
    }
}
