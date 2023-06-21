const { stringLength } = require('../src/script');

// TASK 1
// Test for stringLength function
test('stringLength returns the correct length', () => {
  expect(stringLength('Hello')).toBe(5);
});

test("stringLength throws an error for invalid lengths", () => {
  expect(() => stringLength("")).toThrow("String must have at least 1 character.");
  expect(() =>
    stringLength("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
  ).toThrow("String must not exceed 10 characters.");
});