// Instruction:
// You get an array of numbers, return the sum of all of the positives ones.
// Solving:
// In this case, I used a real concept of "classic for"  to read the array and put it in a condition to analyse if this number is positive and add up all 

function positiveSum(arr) {
    let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) sum += arr[i];
  }
  
  return sum;
    
  }