const letterPositions = function(sentence) {
  let results = {};


  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags
  // first argument is what we're looking for, second argument is the replacement
  // the /g is an advanced search meaning it with look "globally" in the string rather than only the first one
  // sentence = sentence.replace(/ /g, '');

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

console.log(letterPositions("Lighthouse in the house"));

