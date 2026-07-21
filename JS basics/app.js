let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];

// Write JavaScript code to fetch the first item in the grocery items list.
console.log(shoppingList[0]);

// Write JavaScript code to add "Carrots" to the end of the grocery items list. Log the updated grocery items list.
shoppingList.push("Carrots");

// Write JavaScript code to remove the last item from the grocery items list.
// Log the updated grocery items list before and after the removal.
console.log(shoppingList);
shoppingList.pop();
console.log(shoppingList);

//Write JavaScript code to remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers"
// in their place. Log the updated grocery items list before and after the splice operation.
console.log(shoppingList);
shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");
console.log(shoppingList);

let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "India",
  },
};

// Write JavaScript code to fetch the student's name.
console.log(student.name);

// Write JavaScript code to add a new property phone with the value "123-456-7890" to the student object.
// Log the updated student object.
student.phone = "123-456-7890";
console.log(student);

// Write JavaScript code to remove the grade property from the student object.
// Log the updated student object before and after the removal.
delete student.grade;
console.log(student);

// Write JavaScript code to modify the student's age to 21. Log the updated student object.
student.age = 21;
console.log(student);

// Conditionals assignment

// - **Task 1: Understanding `if` Statements:**
//     - Write a JavaScript function that takes a number as input and returns "Positive" if the number is greater than 0,
//  "Negative" if it's less than 0, and "Zero" if it's equal to 0.

function isPositive(num) {
  if (num > 0) return "Positive";
  if (num < 0) return "Negative";
  return "Zero";
}

// - **Task 2: Implementing `else if` Statements:**
//     - Create a JavaScript program that evaluates a student's grade based on their score.
// The program should output "A" if the score is between 90 and 100,
// "B" if it's between 80 and 89, "C" if it's between 70 and 79, "D" if it's between 60 and 69, and "F" if it's below 60.

function gradeStudent(score) {
  if (score >= 90 && score <= 100) console.log("A");
  else if (score >= 80 && score <= 89) console.log("B");
  else if (score >= 70 && score <= 79) console.log("C");
  else if (score >= 60 && score <= 69) console.log("D");
  else if (score < 60) console.log("F");
}

// - **Task 3: Exploring Truthy/Falsy Concepts:**
//     - Write a JavaScript function that takes a string as input and returns "Truthy" if the string is not empty,
// "Falsy" otherwise.

function isTruthyFalsy(string) {
  return string !== "" ? "Truthy" : "Falsy";
}
