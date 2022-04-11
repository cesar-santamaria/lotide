const assertEqual = require('./assertEqual')

// Create a function that returns the last value in an array
const tail = (arr) => {
  return arr.slice(1);
};

module.exports = tail;
