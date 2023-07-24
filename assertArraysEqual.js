const assertEqual = function (actual, expected) {
  if (actual === expected) {

    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }
};

const eqArrays = function (series1, series2) {
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

// 


const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(` ✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    return true;
  }
  else {
    console.log(` 🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
}

assertArraysEqual([1, 2, 3], [2, 4, 6]);

assertArraysEqual([1, 2, 3], [1, 2, 3]);