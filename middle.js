const assertArraysEqual = require('./assertArraysEqual')

const middle = (arr) =>{
  //create a variable to store middle values
  let middleValues = []
  //conditional statement for array with one or two elements to return an empty array.
  if (arr.length === 1 || arr.length === 2){
    return middleValues
  }
  //create variable to store the index of the middle variable of array input.
  const middleIndex = Math.floor(arr.length / 2);
  //conditional to check the length of array and push multiple middle index values if true. 
  if (arr.length % 2 === 0){
    middleValues.push(arr[middleIndex - 1])
  }
  middleValues.push(arr[middleIndex])
  return parseInt(middleValues)
}

middle([1,2,3,4,5,])
module.exports = middle;

