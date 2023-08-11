// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (item in itemsToCount && itemsToCount[item] === true) {
      results[item] = (results[item] || 0) + 1;
    }
    
  }

  return results;
};

module.exports = countOnly;