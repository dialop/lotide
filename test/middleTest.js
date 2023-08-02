const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2, 3]), [2]);      // Output: [2]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);   // Output: [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Output: [3,4]