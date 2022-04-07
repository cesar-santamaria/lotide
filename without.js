// eqArrys Function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// assertArraysEqual Function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// without Function
const without = function(source, itemsToRemove) {
  // create new array variable to push correct values. 
  let newArr = [];
  // loop through source input
  for (let i = 0; i < source.length; i++) {
    // remove the correct inputs. 
    if (itemsToRemove.includes(source[i])) {
      continue;
    } else {
      newArr.push(source[i]); // push items into new array
    }
  }
  return newArr;
};

// test
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

console.log(without([1,2,3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));