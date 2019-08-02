# Avoiding Common Attacks
## Tx.origin avoided
Tx.origin has been avoided and msg.sender has been used in the contract. Contracts that authorise users using the tx.origin variable can be vulnerable to phishing attacks. Because tx.origin and msg.sender are not the same thing. So throughout the contract tx.origin has been avoided.

## Reentrancy attack
The use of call.value has been avoided in the contract. So the contract is not vulnerable to reentrancy or race conditions.

## Floating point precision and logic
No float values have been used in any calculation. So there is no possibility of miscalculation in the contract.

## Integer Overflow and Underflow
The possibilty of integers overflowing is minute for the contract as math operation are not performed, and there is no logic in the contract for a possible underflow. However, For the integer overflow and underflow problem the zeppelins safemath library can be used.

## Exposed contract
The contract functions have a check on who can access it and acts as a safegourd against exposed contract problems. The getFirmware is public so any device and person can call it and has no issues as its just a getter function.

## Miner Vulnerabilities
The contract has no logic which uses the block hash for generating a random number. There is also has been no requirement of the timestamp in the contract logic.The block hash can be manipulated by the miner and if the contract is dependent on the timestamp with short time logic, it is also vulnerable to the miner