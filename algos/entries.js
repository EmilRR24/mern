/* 
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
  name: "Pizza",
  calories: 9001,
};


const expected1 = [
  ["name", "Pizza"],
  ["calories", 9001],
];

const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };

// This object contains inherited key value pairs from the above proto obj.
const obj2 = Object.assign(Object.create(proto), {
  firstName: "Foo",
  lastName: "Bar",
  age: 13,
});

const expected2 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 13],
];

/**
* Returns a 2d array of key value pairs from the given obj.
* - Time: O(?).
* - Space: O(?).
* @param {Object} obj
* @typedef {Array<Array<string, any>>} output The nested array should look
*    like [key, val]
* @returns {output}
*/
function entries(obj) {
      // ITERATE THROUGH THE OBJ'S KEYS
  let answer = [];
      // for in
  // for(key in obj){ 
  //   answer.push([key, obj[key]])
  // }
  // return answer
      // CHECK TO SEE IF THE KEY BELONGS TO THE PROTO OBJECT
      // OR THE ACTUAL OBJECT ITSELF
      // hasOwnProperty(key)
    for(key in obj){ 
    if (obj.hasOwnProperty(key)) {
      answer.push([key, obj[key]])
    }
  }
  return answer
}
console.log(entries(obj2))