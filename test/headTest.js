// Incorporating Mocha and Chai Test Files
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5');
});

// Old code (can be deleted)
// const head = require('../head');
// const assertEqual = require('../assertEqual');
// Test cases for head function using assertEqual
// assertEqual(head([1, 2, 3]), 1);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");