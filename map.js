
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/* Tester Function
console.log(words.length);
console.log(words.push("Another"));
console.log(words.indexOf("tom"));
*/

module.exports = map;