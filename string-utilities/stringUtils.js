// Converts the first letter of a string to uppercase
function capitalize(str) {
  if (!str) return ""; // handle empty string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverses the characters in a string
function reverse(str) {
  return str.split("").reverse().join("");
}

// Checks if a substring exists within a string
function contains(str, substr) {
  return str.includes(substr);
}

module.exports = {capitalize, reverse, contains};