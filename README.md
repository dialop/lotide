# Lotide

The lotide is a modular collection of functions that helps with practicing and creating different types of functions using JavasScript. It is considered as a clone of the [Lodash](https://lodash.com/) Library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This repository contains all the Lotide project files completed by [Diana](https://github.com/dialop/lotide) for the Lighthouse Labs Web Developnment Bootcamp.

## Usage

**Install it:**

`npm install @dialop/lotide`

**Require it:**

`const _ = require('@dialop/lotide');`

## Documentation

The following functions are currently implemented:

- [assertEqual](/assertEqual.js/) (actual, expected)
  - In this file, assertEqual is a method used to test if two values are equal using the `==` operator.
- [head](/head.js/) (array)
  - Using the assertEqual tetsing method, this challange added a array-handling function that will retrieve the first element from the array then refactor was executed.
- [tail](/tail.js/) (array)
  - Using the assertEqual tetsing method, this challange added a function that will retrieve every element except the first element of the array then refactor was executed.
- [eqArrays](/eqArrays.js) (series1, series2)
  - In this file, eqArray is used as a function that compared two arrays for a perfect match then refactor was executed.
- [assertArraysEqual](/assertArraysEqual.js) (array1, array2)
  - In this file, a function that prints an appropriate message after comparing the two arrays and then refactor was executed.
- [without](/without.js) (source, itemsToRemove)

  - In this file, a function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array was executed.

- [flatten](/flatten.js) (arr)
  - In this file, a function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array was executed.
- [middle](/middle.js) (array)
  - In this file, a function that takes in an array and returns middle most element of the array, then refactor was executed.
- [countOnly](/countOnly.js) (allItems, itemsToCount)
  - In this file, a function that takes in a collection of items and returns a specific subset of those items was executed.
- [countLetters](/countLetters.js) (word)
  - In this file, a function that takes in a sentence and returns a count of each of the letters in the sentence was executed.
- [letterPositions](/letterPositions.js) (sentence)
  - In this file, a function that takes in a string and returns all indices of letter positions in the string was executed.
- [findKeyByValue](/findKeyByValue.js) (object, value)
  - In this file, a function that takes in an object and a value and returns the first key that corresponds to that value was executed.
- [eqObjects](/assertEqual.js/) (object1, object2)
  - In this file, a function that takes in 2 objects and return true if they are equal and false otherwise was executed.
- [assertObjectEqual](/eqObjects.js/) (actual, expected)
  - In this file, a function that takes in 2 objects and returns true if they are equal and false otherwise was executed.
- [map](/map.js/) (array, callback)
  - In this file, a function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array was executed.
- [takeUntil](/takeUntil.js/) (array, callback)
  - In this file, a function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback was executed.
- [findKey](/findKey.js/) (object, callback)
  - In this file, a function that takes in an object and callback and returns the first key that meets the criteria specified in callback was executed.

###### [Lotide Project Source Link](https://flex-web.compass.lighthouselabs.ca/projects/lotide/)
