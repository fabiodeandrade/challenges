// Instruction:
// Very simple, given a number, find its opposite.
// Solving:
// Good challeng to training you computer logic. To solve this, i start to asking me "How can i turn a number to positive or negative?" After try several things i realize the logic. Multiply a number by 2 and substract the orignal number of result.


function opposite(number)  {
    let opoNum = 0;
    
     if (number >= 0) {
         opoNum = number - (number * 2);
         return opoNum;
     } else {
         opoNum = number - (number * 2);
         return opoNum;
     }
 }