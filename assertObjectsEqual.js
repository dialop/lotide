const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected) === true) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;

  }


};

// Tester Functions
// assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 2, b: 4, c: 6 });
// assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 });

module.exports = assertObjectsEqual;