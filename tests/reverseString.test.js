const { reverseString } = require('../src/reverseString');

// TASK 2
// Test for reverseString function
test("reverseString reverses the input string", () => {
  expect(reverseString("")).toBe("");
  expect(reverseString("Ruby")).toBe("ybuR");
  expect(reverseString("My name is Ruby")).toBe("ybuR si eman yM");
});