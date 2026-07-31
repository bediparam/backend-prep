// Problem 4: Object Property Count
// Problem Statement: Write a JavaScript function to count the total number of properties in an object.
// Input Data: An object person with multiple key-value pairs.
// Expected Output: The total count of properties.
// Example:
// • Input: { name: "John", age: 30, occupation: "developer" }
// • Output: 3

const countKeys = (obj) => {
  return Object.keys(obj).length;
};

console.log(countKeys({ name: "John", age: 30, occupation: "developer" }));

// Object.keys(obj): Returns an array of all the keys in the object.
// Object.values(obj): Returns an array of all the values in the object.
// Object.entries(obj): Returns an array of key-value pairs as arrays ([ [key, value], ... ]).
