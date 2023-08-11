// flatten is supposed to convert the current nested array into a single array

const flattenArray = function(arr) {
  let flattened = [];


  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let indItem of item) {
        flattened.push(indItem);
      }
    } else {
      flattened.push(item);
    }
  }
  return flattened;
};

module.exports = flattenArray;