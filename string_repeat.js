// Instruction:
// Write a function called repeatStr which repeats the given string string exactly n times.
// Solving:
// I use classic "for" to resolve this problem, but problaby today i use "for of" to get the values

function repeatStr (n, s) {
  let frase = '';

  for (let i = 0; i < n; i++) {
      frase += s;
  }

  return frase;
}