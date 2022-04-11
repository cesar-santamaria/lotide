const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
// if the lengths of both arr1 and arr2 dont match return
  if (arr1.length !== arr2.length) return false;
  // if lengths do match then have to create a loop to compare each individual value in arrays.
  for (let i = 0; i < arr1.length; i++) {
    // if arr1 at index value does not match arr2 at index value then return false
    if (arr1[i] !== arr2[i]) return false;
  }
  // Otherwise return true
  return true;
};

module.exports = eqArrays;
