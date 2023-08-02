// this code removes the first element of the array and returns the rest of the elements
const tail = function(array) {
  let array2 = [...array];

  array2.shift();

  return array2;

};

module.exports = tail;
