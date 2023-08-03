// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const map = require('./map');
const filter = require('./filter');
const find = require('./find');
const flatten = require('./flatten');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const without = require('./without');
const takeUntil = require('./takeUntil');
const letterPositions = require('./letterPositions');
const findKeyValue = require('./findKeyValue');
const findKey = require('./findKey');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  map: map,
  filter: filter,
  find: find,
  flatten: flatten,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  without: without,
  takeUntil: takeUntil,
  letterPositions: letterPositions,
  findKeyValue: findKeyValue,
  findKey: findKey,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  assertArraysEqual: assertArraysEqual,
  
};
