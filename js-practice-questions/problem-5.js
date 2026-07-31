// Problem 5: Merging Arrays of Objects
// Problem Statement: Write a JavaScript function to merge two arrays of objects.
// If objects share the same ID, merge them by summing their value fields. Ensure the final array contains unique IDs only.
// Input Data: Two arrays of objects arr1[] and arr2[].
// Expected Output: The merged array.
// Example:
// • Input: [{ id: 1, value: 10 }, { id: 2, value: 20 }] and [{ id: 2, value: 15 }, { id: 3, value: 30 }]
// • Output: [{ id: 1, value: 10 }, { id: 2, value: 35 }, { id: 3, value: 30 }]

const mergeArrays = (a1, a2) => {
  let map = new Map();

  const processArr = (arr) => {
    for (let obj of arr) {
      if (map.has(obj.id)) {
        // id exists
        map.get(obj.id).value += obj.value;
      } else {
        // push to map
        map.set(obj.id, { ...obj });
      }
    }
  };

  processArr(a1);
  processArr(a2);

  return Array.from(map.values());
};

let arr1 = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
];
let arr2 = [
  { id: 2, value: 15 },
  { id: 3, value: 30 },
];

console.log(mergeArrays(arr1, arr2));
