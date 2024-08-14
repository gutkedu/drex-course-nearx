const deployedContracts = {
  "31337": [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        RealDigital: {
          address: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512",
          abi: [
            { type: "constructor", inputs: [], stateMutability: "nonpayable" },
            {
              type: "function",
              name: "allowance",
              inputs: [
                { name: "owner", type: "address", internalType: "address" },
                { name: "spender", type: "address", internalType: "address" },
              ],
              outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "approve",
              inputs: [
                { name: "spender", type: "address", internalType: "address" },
                { name: "value", type: "uint256", internalType: "uint256" },
              ],
              outputs: [{ name: "", type: "bool", internalType: "bool" }],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "bacen",
              inputs: [],
              outputs: [{ name: "", type: "address", internalType: "address" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "balanceOf",
              inputs: [{ name: "account", type: "address", internalType: "address" }],
              outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "burnFrom",
              inputs: [
                { name: "participant", type: "address", internalType: "address" },
                { name: "amount", type: "uint256", internalType: "uint256" },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "decimals",
              inputs: [],
              outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "mint",
              inputs: [
                { name: "participant", type: "address", internalType: "address" },
                { name: "amount", type: "uint256", internalType: "uint256" },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "name",
              inputs: [],
              outputs: [{ name: "", type: "string", internalType: "string" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "setSTR",
              inputs: [{ name: "_str", type: "address", internalType: "address" }],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setSwap",
              inputs: [{ name: "_swap", type: "address", internalType: "address" }],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "str",
              inputs: [],
              outputs: [{ name: "", type: "address", internalType: "address" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "swap",
              inputs: [],
              outputs: [{ name: "", type: "address", internalType: "address" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "symbol",
              inputs: [],
              outputs: [{ name: "", type: "string", internalType: "string" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "totalSupply",
              inputs: [],
              outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "transfer",
              inputs: [
                { name: "to", type: "address", internalType: "address" },
                { name: "value", type: "uint256", internalType: "uint256" },
              ],
              outputs: [{ name: "", type: "bool", internalType: "bool" }],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "transferFrom",
              inputs: [
                { name: "from", type: "address", internalType: "address" },
                { name: "to", type: "address", internalType: "address" },
                { name: "value", type: "uint256", internalType: "uint256" },
              ],
              outputs: [{ name: "", type: "bool", internalType: "bool" }],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "transferSwap",
              inputs: [
                { name: "from", type: "address", internalType: "address" },
                { name: "to", type: "address", internalType: "address" },
                { name: "amount", type: "uint256", internalType: "uint256" },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "event",
              name: "Approval",
              inputs: [
                { name: "owner", type: "address", indexed: true, internalType: "address" },
                { name: "spender", type: "address", indexed: true, internalType: "address" },
                { name: "value", type: "uint256", indexed: false, internalType: "uint256" },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Swap",
              inputs: [
                { name: "from", type: "address", indexed: true, internalType: "address" },
                { name: "to", type: "address", indexed: true, internalType: "address" },
                { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Transfer",
              inputs: [
                { name: "from", type: "address", indexed: true, internalType: "address" },
                { name: "to", type: "address", indexed: true, internalType: "address" },
                { name: "value", type: "uint256", indexed: false, internalType: "uint256" },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "ERC20InsufficientAllowance",
              inputs: [
                { name: "spender", type: "address", internalType: "address" },
                { name: "allowance", type: "uint256", internalType: "uint256" },
                { name: "needed", type: "uint256", internalType: "uint256" },
              ],
            },
            {
              type: "error",
              name: "ERC20InsufficientBalance",
              inputs: [
                { name: "sender", type: "address", internalType: "address" },
                { name: "balance", type: "uint256", internalType: "uint256" },
                { name: "needed", type: "uint256", internalType: "uint256" },
              ],
            },
            {
              type: "error",
              name: "ERC20InvalidApprover",
              inputs: [{ name: "approver", type: "address", internalType: "address" }],
            },
            {
              type: "error",
              name: "ERC20InvalidReceiver",
              inputs: [{ name: "receiver", type: "address", internalType: "address" }],
            },
            {
              type: "error",
              name: "ERC20InvalidSender",
              inputs: [{ name: "sender", type: "address", internalType: "address" }],
            },
            {
              type: "error",
              name: "ERC20InvalidSpender",
              inputs: [{ name: "spender", type: "address", internalType: "address" }],
            },
            {
              type: "error",
              name: "Unauthorized",
              inputs: [
                { name: "you", type: "address", internalType: "address" },
                { name: "owner", type: "address", internalType: "address" },
              ],
            },
          ],
        },
        STR: {
          address: "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0",
          abi: [
            {
              type: "constructor",
              inputs: [
                { name: "_realDigital", type: "address", internalType: "address" },
                { name: "_participants", type: "address[]", internalType: "address[]" },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "participants",
              inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
              outputs: [{ name: "", type: "address", internalType: "address" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "realDigitalContract",
              inputs: [],
              outputs: [{ name: "", type: "address", internalType: "contract RealDigital" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "requestToBurn",
              inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "requestToMint",
              inputs: [{ name: "amount", type: "uint256", internalType: "uint256" }],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "error",
              name: "Unauthorized",
              inputs: [
                { name: "you", type: "address", internalType: "address" },
                { name: "owner", type: "address", internalType: "address" },
              ],
            },
          ],
        },
        SwapOneStep: {
          address: "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9",
          abi: [
            {
              type: "constructor",
              inputs: [
                { name: "_realDigital", type: "address", internalType: "address" },
                { name: "_participants", type: "address[]", internalType: "address[]" },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "realDigital",
              inputs: [],
              outputs: [{ name: "", type: "address", internalType: "contract RealDigital" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "swap",
              inputs: [
                { name: "_realTokenizado1", type: "address", internalType: "address" },
                { name: "_client1", type: "address", internalType: "address" },
                { name: "_realTokenizado2", type: "address", internalType: "address" },
                { name: "_client2", type: "address", internalType: "address" },
                { name: "amount", type: "uint256", internalType: "uint256" },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "error",
              name: "Unauthorized",
              inputs: [
                { name: "you", type: "address", internalType: "address" },
                { name: "owner", type: "address", internalType: "address" },
              ],
            },
          ],
        },
        RealTokenizado: {
          address: "0xa513e6e4b8f2a923d98304ec87f64353c4d5c853",
          abi: [
            {
              type: "constructor",
              inputs: [
                { name: "_owner", type: "address", internalType: "address" },
                { name: "_name", type: "string", internalType: "string" },
                { name: "_symbol", type: "string", internalType: "string" },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "allowance",
              inputs: [
                { name: "owner", type: "address", internalType: "address" },
                { name: "spender", type: "address", internalType: "address" },
              ],
              outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "approve",
              inputs: [
                { name: "spender", type: "address", internalType: "address" },
                { name: "value", type: "uint256", internalType: "uint256" },
              ],
              outputs: [{ name: "", type: "bool", internalType: "bool" }],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "balanceOf",
              inputs: [{ name: "account", type: "address", internalType: "address" }],
              outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "burn",
              inputs: [
                { name: "client", type: "address", internalType: "address" },
                { name: "amount", type: "uint256", internalType: "uint256" },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "decimals",
              inputs: [],
              outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "mint",
              inputs: [
                { name: "client", type: "address", internalType: "address" },
                { name: "amount", type: "uint256", internalType: "uint256" },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "name",
              inputs: [],
              outputs: [{ name: "", type: "string", internalType: "string" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [{ name: "", type: "address", internalType: "address" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "setSwap",
              inputs: [{ name: "_swap", type: "address", internalType: "address" }],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "swap",
              inputs: [],
              outputs: [{ name: "", type: "address", internalType: "address" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "symbol",
              inputs: [],
              outputs: [{ name: "", type: "string", internalType: "string" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "totalSupply",
              inputs: [],
              outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "transfer",
              inputs: [
                { name: "to", type: "address", internalType: "address" },
                { name: "value", type: "uint256", internalType: "uint256" },
              ],
              outputs: [{ name: "", type: "bool", internalType: "bool" }],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "transferFrom",
              inputs: [
                { name: "from", type: "address", internalType: "address" },
                { name: "to", type: "address", internalType: "address" },
                { name: "value", type: "uint256", internalType: "uint256" },
              ],
              outputs: [{ name: "", type: "bool", internalType: "bool" }],
              stateMutability: "nonpayable",
            },
            {
              type: "event",
              name: "Approval",
              inputs: [
                { name: "owner", type: "address", indexed: true, internalType: "address" },
                { name: "spender", type: "address", indexed: true, internalType: "address" },
                { name: "value", type: "uint256", indexed: false, internalType: "uint256" },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Transfer",
              inputs: [
                { name: "from", type: "address", indexed: true, internalType: "address" },
                { name: "to", type: "address", indexed: true, internalType: "address" },
                { name: "value", type: "uint256", indexed: false, internalType: "uint256" },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "ERC20InsufficientAllowance",
              inputs: [
                { name: "spender", type: "address", internalType: "address" },
                { name: "allowance", type: "uint256", internalType: "uint256" },
                { name: "needed", type: "uint256", internalType: "uint256" },
              ],
            },
            {
              type: "error",
              name: "ERC20InsufficientBalance",
              inputs: [
                { name: "sender", type: "address", internalType: "address" },
                { name: "balance", type: "uint256", internalType: "uint256" },
                { name: "needed", type: "uint256", internalType: "uint256" },
              ],
            },
            {
              type: "error",
              name: "ERC20InvalidApprover",
              inputs: [{ name: "approver", type: "address", internalType: "address" }],
            },
            {
              type: "error",
              name: "ERC20InvalidReceiver",
              inputs: [{ name: "receiver", type: "address", internalType: "address" }],
            },
            {
              type: "error",
              name: "ERC20InvalidSender",
              inputs: [{ name: "sender", type: "address", internalType: "address" }],
            },
            {
              type: "error",
              name: "ERC20InvalidSpender",
              inputs: [{ name: "spender", type: "address", internalType: "address" }],
            },
            {
              type: "error",
              name: "Unauthorized",
              inputs: [
                { name: "you", type: "address", internalType: "address" },
                { name: "owner", type: "address", internalType: "address" },
              ],
            },
          ],
        },
      },
    },
  ],
} as const;

export default deployedContracts;
