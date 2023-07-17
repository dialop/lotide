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



const middle = function(array) {
  const length = array.length;
  if (length === 0) {
    return [];
  }

  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Array has an even number of elements, return the two middle elements.
    return [array[middleIndex - 1], array[middleIndex]];
  } else {

    // Array has an odd number of elements, return the middle element.
    return [array[middleIndex]];


  }
};



// TEST CODE
console.log(middle([1, 2, 3]));      // Output: [2]
console.log(middle([1, 2, 3, 4]));   // Output: [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // Output: [3,4]