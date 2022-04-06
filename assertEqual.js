/*
//Using console.assertion function
console.assert(1 === 1)//Prints out nothing because true
console.assert(1 === 2)//Prints out "Assertion Failed" since its false
*/

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.assert(actual === expected)
  if (actual === expected){
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`)
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);