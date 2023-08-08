const takeUntil = function(array, callback) {
  const result = [];
  for (const data of array) {
    if (!callback(data)) {
      result.push(data);
    } else {
      return result;
    }
  }
  return result;

};

module.exports = takeUntil;