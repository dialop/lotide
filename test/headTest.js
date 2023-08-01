// test/assertEqualTest.js

const head = require('../head');
const assertEqual = require('./assertEqual');


// Test cases for head function using assertEqual
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");