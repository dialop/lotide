
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
    return array[middleIndex];
    
    
  }
};

module.exports = middle;



// Compass: Implement middle which will take in an array and return the middle-most element(s) of the given array.
// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.