// Problem 3: Sorting Strings
// Problem Statement: Write a JavaScript function to sort an array of strings in alphabetical (ascending) order.
// Input Data: An array of strings words[].
// Expected Output: The sorted array.
// Example:
// • Input: ["banana", "apple", "orange", "mango"]
// • Output: ["apple", "banana", "mango", "orange"]

const sortArr = (arr) => {
  return arr.sort();
};

let ans = sortArr(["banana", "apple", "orange", "mango"]);
console.log(ans);

// array.sort(compareFunction)
// array: The original array you want to sort using the sort() method.
// compareFunction (optional): A function defining the sort order.
// If omitted, elements are converted to strings and sorted based on their UTF-16 code units
// Use localeCompare for Strings: For reliably sorting strings,
//  especially with different cases or international characters,
// it's best to use a.localeCompare(b) in the compare function.
