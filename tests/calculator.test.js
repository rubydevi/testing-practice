const Calculator = require('../src/calculator');
describe('Calculator', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    describe('add', () => {
      test('properly adds two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(10, 13)).toBe(23);
        expect(calculator.add(0, 0)).toBe(0);
        });
    });
  
    describe('subtract', () => {
      test('properly subtracts two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(15, 10)).toBe(5);
        expect(calculator.subtract(0, 0)).toBe(0);
      });
    });
  
    describe('divide', () => {
      test('properly divides two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
      });
  
      test('throws an error when dividing by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Invalid divider zero!');
      });
    });
  
    describe('multiply', () => {
      test('properly multiplies two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });
    });
  });