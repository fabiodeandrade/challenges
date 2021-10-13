// Instruction:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// Solving:
// One more time with classic for and array methods. Shift and pop

function removeChar(str){
  let opa = [];

  for (let i = 0; i < str.length; i++) {
     opa.push(str[i]);       
   }
  opa.shift();
  opa.pop();
  
  let result = opa.join('');
      
     
  return result;
 };