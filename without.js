// FUNCTION COPIED OVER FROM assertArraysEqual.js
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// FUNCTION COPIED OVER FROM eqArrays.js
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
    

const without = (source, itemsToRemove) => {
  let arrayDuplicate = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) arrayDuplicate.push(source[i]);
  }
  return arrayDuplicate;
};

//TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]