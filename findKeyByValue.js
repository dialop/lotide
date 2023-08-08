const findKeyByValue = function(object, value) {

  for (let objectKey in object) {               // create a local function that will loop the keys inside of object

    if (object[objectKey] === value) {     //getting the value of the key that is being looped. The [] to look inside of an object key to retieve value
      return objectKey;
    }
  }

};

module.exports = findKeyByValue;