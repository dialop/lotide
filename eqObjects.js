const eqArrays = require('./eqArrays');

// eqObjects will return true if two unsorted objects are the same (keys and values)
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);


  if (key1.length !== key2.length) {
    return false;
  }

  if (Array.isArray(object1) && Array.isArray(object2)) {
    if (!eqArrays(object1, object2)) {
      return false;
    }
  }

  for (const key of key1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
    if (!(key in object2)) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;