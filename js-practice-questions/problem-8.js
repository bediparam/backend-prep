// Problem 8: Reversing Words
// Problem Statement: Write a function to reverse the order of words in a space-separated string.
// Input Data: A string str consisting of words.
// Expected Output: The string with reversed word order.
// Example:
// • Input: "hello world from coding"
//  Output: "coding from world hello"

const reverseSentence = (str) => {
  let res = "";
  for (let st of str.split(" ")) {
    res = `${st} ${res}`;
  }
  console.log(res);
};

reverseSentence("hello world from coding");
