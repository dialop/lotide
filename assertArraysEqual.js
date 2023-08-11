const eqArrays = require('./eqArrays');

// assertArraysEqual will check if two arrays are the same
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(` ✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    return true;
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};

module.exports = assertArraysEqual;