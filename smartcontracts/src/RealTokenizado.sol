// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

error Unauthorized(address you, address owner);

contract RealTokenizado is ERC20 {
    address public owner;
    address public swap;

    constructor(
        address _owner,
        string memory _name,
        string memory _symbol
    ) ERC20(_name, _symbol) {
        owner = _owner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Unauthorized: caller is not the owner");
        _;
    }

    modifier onlySwapOrOwner() {
        if (msg.sender != swap && msg.sender != owner) {
            revert Unauthorized(msg.sender, owner);
        }
        _;
    }

    function setSwap(address _swap) public onlyOwner {
        swap = _swap;
    }

    function mint(address client, uint256 amount) public onlySwapOrOwner {
        _mint(client, amount);
    }

    function burn(address client, uint256 amount) public onlySwapOrOwner {
        _burn(client, amount);
    }
}
