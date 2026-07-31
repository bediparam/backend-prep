// Problem 9: Removing Duplicates
// Problem Statement: Write a function to remove duplicate elements from an integer array and print the array.
// Input Data: An array of integers arr[].
// Expected Output: An array containing unique elements only.
// Example:
// • Input: [1, 2, 2, 3, 4, 4, 5]
// • Output: [1, 2, 3, 4, 5]

const removeDuplicates = (arr) => {
  //   let s = new Set(arr);
  //   return Array.from(s);

  let map = new Map();
  arr.forEach((num) => {
    if (!map.has(num)) map.set(num, num);
  });
  return Array.from(map.keys());
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
