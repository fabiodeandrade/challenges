// Instruction:
// Simple, remove the spaces from the string, then return the resultant string.
// Solving:
// array methods, specificaly split and join, is the fastest way to solve this problems.
// using split() you'll find and cut all the spaces in the array
// using join() you'll join the rest of first output
// refatoring with arrow functions.

const noSpace = (x) => x.split(' ', 100).join('');