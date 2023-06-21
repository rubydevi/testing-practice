// TASK 1
// stringLength function
function stringLength(string) {
  const length = string.length;

  if (length < 1) {
    throw new Error("String must have at least 1 character.");
  }

  if (length > 10) {
    throw new Error("String must not exceed 10 characters.");
  }

  return length;
}
module.exports = { stringLength };