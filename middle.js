const middle = function(array) {
  const length = array.length;
  if (length < 3) {
    return [];
  }
  
  const middleIndex = Math.floor(length / 2);
  
  if (length % 2 === 0) {
    // Array has an even number of elements, return the two middle elements.
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
  
    // Array has an odd number of elements, return the middle element.
    return array[middleIndex];
  
                                                                                                                                       
  }
};

module.exports = middle;
