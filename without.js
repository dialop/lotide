// the challenge wants you to take a source Array, and an array of items to remove from source (without editing the original)
const without = function(source, itemsToRemove) {

  let resultArray = source.slice(); // copying the source array to a fresh array to not modify the original
  for (let i = 0; i < source.length; i++) {

    if (itemsToRemove.includes(source[i])) {
      resultArray.splice(i, 1);
    }
  }

 
  return resultArray;

};

module.exports = without;