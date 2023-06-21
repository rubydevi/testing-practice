const { describe } = require('yargs');
const { Calculator } = require('../src/script');
const { beforeEach } = require('node:test');

// TASK 3
// Tests for Calculator methods
describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add()", () => {
    test("adds two positive numbers", () => {
      const result = Calculator.add(10, 20);
      assert.equal(result, 30);
    });
  
    test("adds two negative numbers", () => {
      const result = Calculator.add(-10, -20);
      assert.equal(result, -30);
    });
  
    test("adds a positive and a negative number", () => {
      const result = Calculator.add(10, -20);
      assert.equal(result, 0);
    });
  });
  
  describe("subtract()", () => {
    test("subtracts two positive numbers", () => {
      const result = Calculator.subtract(10, 20);
      assert.equal(result, -10);
    });
  
    test("subtracts two negative numbers", () => {
      const result = Calculator.subtract(-10, -20);
      assert.equal(result, 10);
    });
  
    test("subtracts a positive and a negative number", () => {
      const result = Calculator.subtract(10, -20);
      assert.equal(result, 30);
    });
  });
  
  describe("divide()", () => {
    test("divides two positive numbers", () => {
      const result = Calculator.divide(10, 2);
      assert.equal(result, 5);
    });
  
    test("divides two negative numbers", () => {
      const result = Calculator.divide(-10, -2);
      assert.equal(result, 5);
    });
  
    test("throws an error when dividing by zero", () => {
      assert.throws(() => Calculator.divide(10, 0), Error);
    });
  });
  
  describe("multiply()", () => {
    test("multiplies two positive numbers", () => {
      const result = Calculator.multiply(10, 2);
      assert.equal(result, 20);
    });
  
    test("multiplies two negative numbers", () => {
      const result = Calculator.multiply(-10, -2);
      assert.equal(result, 20);
    });
  
    test("multiplies a positive and a negative number", () => {
      const result = Calculator.multiply(10, -2);
      assert.equal(result, -20);
    });
  });
  
});