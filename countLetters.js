// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {

    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }
};


const countLetters = function (word) {
  const letterCount = {};

  word = word.toLowerCase();

  // create a for...loop
  for (const letter of word) {

    // set the condition using match method that retrieves the letter a-z and if they match the string
    if (letter.match(/[a-z]/)) {

      // set a key that will add each letter if it meets the condition above
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  }
  return letterCount;

};

console.log(countLetters("Lighthouse in the house"));