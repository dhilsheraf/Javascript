// 1. push()
// Adds one or more elements to the end of an array.

// javascript
// Copy code
let arr = [1, 2, 3];
arr.push(4); // arr is now [1, 2, 3, 4]
// 2. pop()
// Removes the last element from an array and returns that element.

// javascript
// Copy code
let arr = [1, 2, 3, 4];
let lastElement = arr.pop(); // lastElement is 4, arr is now [1, 2, 3]
// 3. shift()
// Removes the first element from an array and returns that element.

// javascript
// Copy code
let arr = [1, 2, 3];
let firstElement = arr.shift(); // firstElement is 1, arr is now [2, 3]
// 4. unshift()
// Adds one or more elements to the beginning of an array.

// javascript
// Copy code
let arr = [2, 3, 4];
arr.unshift(1); // arr is now [1, 2, 3, 4]
// 5. splice()
// Adds or removes elements from an array at a specific index.

// javascript
// Copy code
let arr = [1, 2, 3, 4];
arr.splice(2, 1, 5); // Removes 1 element at index 2 and adds 5. arr is now [1, 2, 5, 4]
// 6. slice()
// Returns a shallow copy of a portion of an array into a new array.

// javascript
// Copy code
let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3); // newArr is [2, 3]
// 7. forEach()
// Executes a provided function once for each array element.

// javascript
// Copy code
let arr = [1, 2, 3];
arr.forEach(num => console.log(num * 2)); // Outputs 2, 4, 6
// 8. map()
// Creates a new array populated with the results of calling a provided function on every element in the calling array.

// javascript
// Copy code
let arr = [1, 2, 3];
let doubled = arr.map(num => num * 2); // doubled is [2, 4, 6]
// 9. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.

// javascript
// Copy code
let arr = [1, 2, 3, 4, 5];
let evenNumbers = arr.filter(num => num % 2 === 0); // evenNumbers is [2, 4]
// 10. reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.

// javascript
// Copy code
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, num) => acc + num, 0); // sum is 10
// 11. find()
// Returns the value of the first element in the provided array that satisfies the provided testing function.

// javascript
// Copy code
let arr = [5, 12, 8, 130, 44];
let found = arr.find(num => num > 10); // found is 12
12. some()
// Tests whether at least one element in the array passes the test implemented by the provided function.

// javascript
// Copy code
let arr = [1, 2, 3, 4];
let hasEven = arr.some(num => num % 2 === 0); // hasEven is true
// 13. every()
// Tests whether all elements in the array pass the test implemented by the provided function.

// javascript
// Copy code
let arr = [1, 2, 3, 4];
let allEven = arr.every(num => num % 2 === 0); // allEven is false
// 14. includes()
// Determines whether an array includes a certain value among its entries.

// javascript
// Copy code
let arr = [1, 2, 3];
let hasTwo = arr.includes(2); // hasTwo is true
// 15. indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// javascript
// Copy code
let arr = [1, 2, 3];
let index = arr.indexOf(2); // index is 1
// Example Usage
// You can combine these methods in various ways to manipulate arrays effectively. Here's a quick example:

// javascript
// Copy code
let arr = [1, 2, 3, 4, 5];

// Double the even numbers and find their sum
let sumOfDoubledEvens = arr
    .filter(num => num % 2 === 0) // Filter even numbers
    .map(num => num * 2) // Double them
    .reduce((acc, num) => acc + num, 0); // Sum them

console.log("Sum of doubled even numbers:", sumOfDoubledEvens); // Output: 8 (2*2 + 4*2)
// These array methods are powerful tools in JavaScript for working with arrays, allowing you to manipulate and access array data efficiently.