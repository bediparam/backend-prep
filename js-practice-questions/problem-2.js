// Problem 2: Object Property Summation
// Problem Statement: Create a function that iterates through an array of objects to compute the total sum of the price property found in each object.
// Input Data: An array of objects products[].
// Expected Output: The numerical total of all product prices.
// Example:
// • Input: [{ price: 25 }, { price: 15 }, { price: 40 }]
// • Output: 80

const totalSum = (arr) => {
  return arr.reduce((res, curObj) => {
    return res + curObj.price;
  }, 0);
};

let ans = totalSum([{ price: 25 }, { price: 15 }, { price: 40 }]);
console.log(ans);
