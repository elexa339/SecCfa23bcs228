const math = require('./math');

console.log("2 + 3 =", math.add(2, 3));
console.log("5 - 1 =", math.subtract(5, 1));
console.log("4 * 6 =", math.multiply(4, 6));
console.log("10 / 2 =", math.divide(10, 2));
console.log("7 / 0 =", math.divide(7, 0));
console.log("Factorial of 5 =", math.factorial(5));
console.log("Is 17 prime?", math.isPrime(17));
console.log("Factorial of -3 =", math.factorial(-3));