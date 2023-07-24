

// newArray = array.map(callback(element, index, array));



const assertEqual = function(actual, expected) {
  if (actual === expected) {
  
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {
  
    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  
  }
};

  
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

console.log(words.length);
console.log(words.push("Another"));
console.log(words.indexOf("tom"));

