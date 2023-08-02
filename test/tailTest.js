// Incorporating Mocha and Chai Test Files
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['Lighthouse, Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

});


// Old code (can be deleted)
// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const words = ["Yo Yo", "Lighthouse", "Labs"];

// tail(words); // no need to capture the return value since we are not checking it

// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail([1, 2, 3]), [2, 3]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);