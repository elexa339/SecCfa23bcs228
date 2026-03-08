module.exports = {

  add: (a, b) => a + b,

  subtract: (a, b) => a - b,

  multiply: (a, b) => a * b,

  divide: (a, b) => {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  },

  factorial: (n) => {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }

    return result;
  },

  isPrime: (n) => {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

};