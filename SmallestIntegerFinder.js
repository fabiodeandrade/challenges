// Instruction:
// Given an array of integers your solution should find the smallest integer.
// Solving:
// In the native object of Javascript, we have one method to help us this problem.
// usingo Math.min() and spread out the array in the arguments

class SmallestIntegerFinder {
    findSmallestInt(args) {
  
           return Math.min(...args);
      
    }
  }