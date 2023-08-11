const eqObjects = require('./eqObjects');

// assertObjectsEqual will check if two objects are the same
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

module.exports = assertObjectsEqual;