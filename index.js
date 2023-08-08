// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const map = require('./map');
const flatten = require('./flatten');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const without = require('./without');
const takeUntil = require('./takeUntil');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head,
  tail,
  middle,
  map,
  flatten,
  countLetters,
  countOnly,
  eqArrays,
  without,
  takeUntil,
  letterPositions,
  findKeyByValue,
  findKey,
  assertEqual,
  assertObjectsEqual,
  assertArraysEqual,
  eqObjects,
};
