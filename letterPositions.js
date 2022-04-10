const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  const sentenceTrim = sentence.replaceAll(' ', '');

  for (let i = 0; i < sentenceTrim.length; i++) {
    if (results[sentenceTrim[i]]) {
      results[sentenceTrim[i]].push(i);
    } else {
      results[sentenceTrim[i]] = [i];
    }
  }
  return results;
};

letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);// Ask mentor what this means?