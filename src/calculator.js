// TASK 3
// Calculator class
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Invalid divider zero!");
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}
module.exports = Calculator;