# Design Patterns

## Circuit Breakers
Implemented circuit breaker so that the contract can be paused by some authorized person, which will stop ether inflow to the contract. When the emergency is triggered by the authorized, functions like oemPair will not respond, and return error.

## Restricting Access
Used restricting access to limit everyone for calling a function. The access restriction was used in function onlyAuth() which is used to make sure that the function is only allowed to be called by the owner

## Fail Early(Use of Require over if condition)
Require is used instead of if condition for checking any condition. To avoid failing a function without throwing is avoided by using the require statement. The require statement will check for the condition and throw if the condition is not met. Multiple parts of the code use require instead of nested loops to stop this behaviour.

## Auto depreciation - not required
Because the contract should not expire after any certain amount of time. It holds the firmware data with no expiration time in arrays.

## Mortal - not used
Not providing the access of the contract creator to kill the contract and stop OTA updates completely, but the project includes design patterns like circuit breaker

