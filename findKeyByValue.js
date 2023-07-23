// implement a fucntion which takes an object and value 
// the function should scan the object and return the first key that contains the given value 
// if no key is found = return undefined 

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
    if (actual === expected) {
  
      console.log(` ✅ Assertion Passed: ${actual} === ${expected}`);
  
    } else {
  
      console.log(` 🛑 Assertion Failed: ${actual} !== ${expected}`);
  
    }
};

// PLAN
// 1. create a function for findKeyByValue
// 2. Object.keys function to help you easily search through all the object keys
// 3. complete an else statement that will return undefined 

// create a function that has two parametrs (object = estTVShowsByGenre) && (value === "The Expanse")
function findKeyByValue(object, value) {


for (let objectKey in object) {               // create a local function that will loop the keys inside of object

    if (object[objectKey] === value){     //getting the value of the key that is being looped. The [] to look inside of an object key to retieve value 
        return objectKey;
    }
}

}

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);