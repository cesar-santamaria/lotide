/* 
The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
*/

//create function
const middle = (arr) =>{
  //create a variable to store middle values
  let middleValues = []
  //conditional statement for array with one or two elements to return an empty array.
  if (arr.length === 1 || arr.length === 2){
    return middleValues
  }
  //create variable to store the index of the middle variable of array input.
  const middleIndex = Math.floor(arr.length / 2);
  console.log(middleIndex)
  //conditional to check the length of array and push multiple middle index values if true. 
  if (arr.length % 2 === 0){
    middleValues.push(arr[middleIndex - 1])
    console.log(middleValues)
  }
  middleValues.push(arr[middleIndex])
  return middleValues

}

console.log(middle([1,2,3,4,5]))