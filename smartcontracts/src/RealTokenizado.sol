// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract RealTokenizado is ERC20 {
    address public owner;
    address public swap;

    constructor(
        address _owner,
        address _swap,
        string memory _name,
        string memory _symbol
    ) ERC20(_name, _symbol) {
        owner = _owner;
        swap = _swap;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Unauthorized");
        _;
    }

    function mint(address client, uint256 amount) public onlyOwner {
        _mint(client, amount);
    }

    function burnFrom(address client, uint256 amount) public onlyOwner {
        _burn(client, amount);
    }
}
