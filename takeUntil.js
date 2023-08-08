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

//


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(` ✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    return true;
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};

const takeUntil = function(array, callback) {
  const result = [];
  for (const data of array) {
    if (!callback(data)) {
      result.push(data);
    } else {
      return result;
    }
  }
  return result;

};




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);