# Wallet Street Cousin — Contracts

This repository contains the smart contract sources and verification files for the **Wallet Street Cousin (WSC)** token, deployed on the Flare Network.  

---

## Contract Summary

- **Name:** Wallet Street Cousin  
- **Symbol:** WSC  
- **Decimals:** 18  
- **Type:** ERC-20 (OpenZeppelin implementation)  
- **Constructor:**  
  ```solidity
  constructor(uint256 initialSupply)
Example at deployment:
8230000000 → 8.23 billion tokens (18 decimals applied in contract) 1 per Cousin at time of launch
Deployed Address:
0x37E43D91180171211b207670420824369DA80176

Verification
Flarescan: https://flarescan.com/token/0x37E43D91180171211b207670420824369DA80176/contract/code?type=erc20&chainid=14 

Sourcify: https://sourcify.dev/#/lookup/0x37E43D91180171211b207670420824369DA80176 

Routescan: https://routescan.io/address/0x37E43D91180171211b207670420824369DA80176/contract/14/code


Flattened source files used for verification are included in this repo for transparency.

Repository Contents
contracts/ — Original Solidity sources
flattened_*.sol — Flattened files used for verification
build/contracts/ — Compiled artifacts (ABI, bytecode)
Config files: hardhat.config.js, truffle-config.js
.gitignore, package.json, etc.

Notes
Minimal ERC-20 contract with no added mechanics (no fees, no ownership).

Tokenomics, treasury allocations, and project details are documented separately.
https://github.com/Brew-House/Wallet_Street_Cousin

This repo exists for transparency of the on-chain contract and its verification files.
