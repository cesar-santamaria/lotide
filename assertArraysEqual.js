const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false; // if the lengths of both arr1 and arr2 dont match return
  // if lengths do match then have to create a loop to compare each individual value in arrays.
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false; // if arr1 at index value does not match arr2 at index value then return false.
  }
  return true; // Otherwise return true
};

// Create function that uses eqArray function to solve whether or not arr1 & arr2 are equal.
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};
  
//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false