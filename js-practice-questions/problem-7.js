// Problem 7: Frequency Counting
// Problem Statement: Write a function to count the frequency of each element in an integer array and print the result.
// Input Data: An array of integers arr[].
// Expected Output: The frequency mapping for each element.
// Example:
// • Input: [1, 2, 2, 3, 1, 4, 2]
// • Output: 1 → 2, 2 → 3, 3 → 1, 4 → 1

const getFrequency = (arr) => {
  return arr.reduce((res, curNum) => {
    res[curNum] = !res[curNum] ? 1 : res[curNum] + 1;
    return res;
  }, {});
};

console.log(getFrequency([1, 2, 2, 3, 1, 4, 2]));
