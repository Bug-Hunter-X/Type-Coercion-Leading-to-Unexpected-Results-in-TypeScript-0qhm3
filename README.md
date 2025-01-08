# Type Coercion Bug in TypeScript

This repository demonstrates a common, yet subtle, bug in TypeScript related to type coercion.  The `add` function is designed to add two numbers, but due to TypeScript's leniency with type checking, it allows a string to be passed in, resulting in string concatenation instead of numerical addition. This can lead to unexpected behavior and difficult-to-debug issues in larger applications.

## How to reproduce

1. Clone this repository.
2. Run `tsc bug.ts` to compile the code.
3. Run the compiled JavaScript code. You will observe that the output is the string '12' instead of the expected number 3.

## Solution

The solution involves stricter type checking to prevent type coercion.  The `bugSolution.ts` file demonstrates how to enforce type safety using type guards or more specific type annotations.