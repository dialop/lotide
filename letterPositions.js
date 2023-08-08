const letterPositions = function(sentence) {
  let results = {};

  // to keep track of the position of sentence (local to the function)
  let index = 0;

  for (const letter of sentence) {

    // conditional that will ensure the code finds the letter a-z
    if (letter.match(/[A-Z]||[a-z]/)) {

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

module.exports = letterPositions;