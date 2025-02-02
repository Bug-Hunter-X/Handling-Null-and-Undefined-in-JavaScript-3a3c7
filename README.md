# Handling Null and Undefined in JavaScript

This repository demonstrates a common error in JavaScript: attempting to perform operations on null or undefined values without proper handling.  The `bug.js` file showcases the problem, and `bugSolution.js` provides the corrected code.

This is a crucial concept in robust JavaScript programming.  Failure to handle null or undefined values can lead to unexpected behavior, crashes, and difficult-to-debug errors. The example highlights a simple yet effective solution to address this common issue.

## Problem

Many JavaScript functions implicitly assume inputs are defined and non-null.  However, in real-world scenarios, variables might be null or undefined, causing unexpected errors or undefined behavior.  The `bug.js` file showcases a function susceptible to this problem.

## Solution

The provided solution in `bugSolution.js` demonstrates how to explicitly check for null and undefined values before performing any operation on the input.  This prevents the function from throwing errors and produces a more predictable and reliable result.