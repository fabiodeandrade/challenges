const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filtereven = numbers.filter((item) => item % 2 === 0);

const square = filtereven.map((item) => item * item);
