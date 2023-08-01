const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

const eqArrays = function(series1, series2) {
  if (series1.length !== series2.length) {
    return false;
  }

  let index = 0;
  // Creating a new variable to define the staring point of "series1 and series2" to keep track of which index we are in
  /* Example:
  [1, 2, 3], [1, 2, 3]
  index 0 = 1, 1
  index 1 = 2, 2
  index 2 = 3, 3
  
  Incorrect example without using index:
  i = series1[0]: 1
  series2[i]: 2 (because we're taking the 2nd value)
  */
  for (let i of series1) {
    if (i !== series2[index]) {
      console.log(i + " " + series2[i]);
      return false;
    }
    index++;
  }

  return true;
};

//Test Code

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

/*
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false  */

module.exports = eqArrays;

