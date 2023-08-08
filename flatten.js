/*
const eqArrays = function(series1, series2) {
  if (series1.length !== series2.length) {
    return false;
  }

  let index = 0;
  for (let i of series1) {
    if (i !== series2[index]) {
      return false;
    }
    index++;
  }

  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(` ✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    return true;
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};
*/

// flatten is supposed to convert the current nested array into a single array

const flattenArray = function(arr) {
  let flattened = [];


  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let indItem of item) {
        flattened.push(indItem);
      }
    } else {
      flattened.push(item);
    }
  }
  return flattened;
};

// Tester Functions
// const nestedArray = [1, 2, [3, 4], 5, [6]];
// const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray);

// assertArraysEqual(flattenedArray, [1, 2, 3, 4, 5, 6]);

module.exports = flattenArray;