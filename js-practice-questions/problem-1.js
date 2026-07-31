// Problem 1: Array Filtering and Summation
// Problem Statement: Write a function to filter an array of integers, removing any values less than 10, and then calculate the sum of the remaining elements.
// Input Data: An array of integers numbers[].
// Expected Output: The total sum of integers greater than or equal to 10.
// Example:
// • Input: [5, 12, 8, 130, 44]
// • Output: 186

const removeLessThenTenAndSum = (arr) => {
  return arr
    .filter((num) => num >= 10)
    .reduce((result, currNum) => {
      return result + currNum;
    }, 0);
};

let ans = removeLessThenTenAndSum([5, 12, 8, 130, 44]);
console.log(ans);
