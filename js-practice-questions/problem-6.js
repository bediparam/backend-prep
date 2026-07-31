// Problem 6: Min/Max Finding
// Problem Statement: Write a function to identify and print the maximum and minimum elements in an integer array.
// Input Data: An array of integers arr[].
// Expected Output: The maximum and minimum values.
// Example:
// • Input: [3, 5, 1, 8, 2]
// • Output: Max = 8, Min = 1

const printMinMax = (arr) => {
  //   const min = arr.reduce((res, curNum) => {
  //     return res < curNum ? res : curNum;
  //   }, arr[0]);

  //   const max = arr.reduce((res, curNum) => {
  //     return res > curNum ? res : curNum;
  //   }, arr[0]);

  const { min, max } = arr.reduce(
    (res, curNum) => {
      return {
        min: res.min < curNum ? res.min : curNum,
        max: res.max > curNum ? res.max : curNum,
      };
    },
    { min: arr[0], max: arr[0] },
  );

  console.log(`Max = ${max}, Min = ${min}`);
};

printMinMax([3, 5, 1, 8, 2]);
