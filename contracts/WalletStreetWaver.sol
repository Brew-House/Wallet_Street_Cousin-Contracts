// SPDX-License-Identifier: MIT
pragma solidity 0.8.30; 

// WalletStreetWaver
// Sourced from the EasyA app coursework (Flare module).
// Adapted for the Wallet Street Cousin project.

contract WalletStreetWaver {
    string public wave;

    constructor(string memory initialWave) {
        wave = initialWave;
    }

    function sendWave(string memory newWave) public {
        wave = newWave;
    }
}