// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log('actual:',actual,'expected:',expected)
  if (actual === expected) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected) return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;