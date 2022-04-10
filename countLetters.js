//COPIED FUNCTION from assertEqual.js file.
const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  if (actual !== expected) console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
};

const countLetters = (sentence) => {
  let results = {};
  let trimSentence = sentence.replaceAll(' ', '');

  for (const letter of trimSentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  console.log(results);
};

countLetters("LHL");
countLetters("Dunder Mifflin");
countLetters("GOOOOOOOOOOOOL");