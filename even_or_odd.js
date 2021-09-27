// Instruction:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Solving:
// In this task you need to think how a number is even or odd essentialy. I used a logic about division. Every number divided by two and results 0 is even.

function even_or_odd(number) {
    if (number%2 === 0) {
      return "Even"
    } else {
      return "Odd"
    }
     
    }