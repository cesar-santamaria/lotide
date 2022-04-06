const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // compare length of arr1 and arr2
    console.log(false);
  } else {
    for (let i = 0; i < arr1.length; i++) { // loop over both arr1 and arr2
      if (arr1[i] !== arr2[i]) { // if two values don't match break loop and return false
        console.log(false)
        return
      }
    }
    console.log(true)
    return
  }
};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false