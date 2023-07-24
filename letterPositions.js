const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(` ✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    return true;
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return false;
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {

    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }
};




const letterPositions = function(sentence) {
  let results = {};


  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags
  // first argument is what we're looking for, second argument is the replacement
  // the /g is an advanced search meaning it with look "globally" in the string rather than only the first one
  sentence = sentence.replace(/ /g, '');

  // to keep track of the position of sentence (local to the function)
  let index = 0;

  for (const letter of sentence) {

    // conditional that will ensure the code finds the letter a-z
    if (letter.match(/[a-z]/)) {

      // checks if the key letter is in the result obj
      if (letter in results) {

        // add a value to the array in a key
        results[letter].push(index);

      } else {

        // if else, create a new key and array
        results[letter] = [index];

      }


    }
    index++;
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"));

