const assertEqual = require('./assertEqual');

const head = function(array) {
    return array[0];
  };

assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;
