const countLetters = function(word) {
  const letterCount = {};
  
  // create a for...loop
  for (const letter of word) {
  
    // set the condition using match method that retrieves the letter a-z and if they match the string
    if (letter.match(/[A-Z]||[a-z]/)) {
  
      // set a key that will add each letter if it meets the condition above
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  }
  return letterCount;
  
};

module.exports = countLetters;