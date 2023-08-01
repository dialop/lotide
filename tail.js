const tail = require('../tail');
const assertEqual = require('../assertEqual');

const tail = function(array) {
  const array2 = [...array];
  return array2.shift();

};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail;
