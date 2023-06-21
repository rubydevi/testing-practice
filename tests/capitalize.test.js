const { capitalize } = require('../src/script');

// TASK 4
// Test for capitalize function
test("capitalize capitalizes the first character", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("javascript")).toBe("Javascript");
  expect(capitalize("openai")).toBe("Openai");
});