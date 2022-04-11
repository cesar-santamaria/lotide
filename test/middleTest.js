const assertEqualArrays = require('../assertArraysEqual');
const middle = require('../middle')

//TEST CODE
assertEqualArrays(middle([1,2,3,4,5]),[3])
assertEqualArrays(middle([1,2,3,4]),[2,3])