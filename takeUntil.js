// tried using a forEach loop but figured out you cant stop it from looping through the entire array. Used a plain loop instead.
// takeUntil Function
const takeUntil = function(array, callback) {
  // create variable results
  const results = []
  // loop through array
 for (const item of array){
   if (callback(item)){
     return results
   } else {
     results.push(item)
   }
 }
  return results
}



// test case #1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);