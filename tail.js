const tail = function(arr) {
  let newArray = [...arr];
  return newArray.slice(1);
};
console.log(tail([1,2,3,4,5,6]));
