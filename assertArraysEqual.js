const eqArrays = require('./eqArrays')

// Create function that uses eqArray function to solve whether or not arr1 & arr2 are equal.
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;
  
