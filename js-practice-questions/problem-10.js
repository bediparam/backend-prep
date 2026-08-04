// Problem 10: First Non-Repeating Character
// Problem Statement: Write a function to identify and print the first non-repeating character in a string. If no such character exists, print -1.
// Input Data: A string str of lowercase characters.
// Expected Output: The first non-repeating character or -1.
// Example:
// • Input: "swiss"
// • Output: w

const firstNonRepeatingChar = (str) => {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }

  console.log(map);

  let repeating = (char) => {
    return map.get(char) > 1 ? true : false;
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!repeating(char)) return char;
  }
  return -1;
};

console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("swwiss"));
