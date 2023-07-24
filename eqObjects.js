// eqArrays
const eqArrays = function(object1, object2) {
  if (object1.length !== object2.length) {
    return false;
  }

  let index = 0;
  for (let i of object1) {
    if (i !== object2[index]) {
      console.log(i + " " + object2[i]);
      return false;
    }
    index++;
  }

  return true;
};

// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
  
    console.log(` ✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {
  
    console.log(` 🛑 Assertion Failed: ${actual} !== ${expected}`);
  
  }
};


// eqObjects
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (const key of key1) {
    if (object1[key] !== object2[key]) {
      return false;
    } else {
      return true;
    }

    if (Array.isArray(object1) && Array.isArray(object2)) {
      if (!eqArrays(object1, object2)) {
        return false;
      }
    } else {

      if (object1 !== object2) {
        return false;
      }
    }
  }

  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
// assertEquals(eqObjects(shirtObject , anotherShirtObject), true);



const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
// assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);



































// const eqObjects = function(object1, object2) {

// for (let objectKey in object1) {

//   if (object1[objectKey] === object2){
//       return true;

//       console.log());
//   }
// }

// }

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true

// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEquals(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false

// assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);