

// eqObjects
const eqObjects = function (object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (const key of key1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
    else {
      return true;
    }

    if (Array.isArray(object1) && Array.isArray(object2)) {
      if (!eqArrays(object1, object2)) {
        return false;
      }
    } else {

      if (object1 !== object2) {
        return false;
      }
    }
  }

  return true;

  console.log();
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
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

assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 2, b: 4, c: 6 });
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 });

