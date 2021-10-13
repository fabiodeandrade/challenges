// Instruction:
// Complete the solution so that it reverses the string passed into it.
// Solving:
// This time i used unshift(), array method to put a new value in the end of array.

function solution(str){

  const arr = [];

  for (let i = 0 ; i < str.length; i++) {
      arr.unshift(str[i])
  }

  

  return arr.join('');


}