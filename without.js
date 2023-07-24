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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(` ✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    return true;
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};


// the challenge wants you to take a source Array, and an array of items to remove from source (without editing the original)
const without = function (source, itemsToRemove) {

  let resultArray = source.slice(); // copying the source array to a fresh array to not modify the original
  for (let i = 0; i < source.length; i++) {

    for (let item of itemsToRemove) {
      if (source[i] === item) {
        resultArray.splice(i, 1);
      }
    }

  }

  console.log(resultArray);

};

// Test Code
const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


/*
ARRAY source = ["hello", "world", "lighthouse"]

ARRAY itemsToRemove = ["world", "lighthouse"]

for loop (going through source)

hello,
world,
lighthouse

  for loop (going through lighthouse) //this will loop the entire itemsToRemove for each source element







*/