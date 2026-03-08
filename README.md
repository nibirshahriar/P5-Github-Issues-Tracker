1️⃣ What is the difference between var, let, and const?
2️⃣ What is the spread operator (...)?
3️⃣ What is the difference between map(), filter(), and forEach()?
4️⃣ What is an arrow function?
5️⃣ What are template literals?

Answer All The Question Below:
1. Basically,  var, let, and const are used to declare variables, but their behaviour different according to scope,reassignment, and hoisting.

var---> It is function scoped,can be redeclared and reassigned..It is hoisted but initailized as undefined.
let--->It is block-scoped, Cannot be redeclared in the same scope but reassigned..It is hoisted but not initialized..All are in a zone called Temporal Dead Zone or TDZ.
const--->It is also block-scoped, Cannot be redeclared and cannot be reassigned..it must be initialized when declared.

2. The spread operator (...) in JavaScript is used to expand (spread) elements of an array, object..It is commonly used for copying, merging, and passing values.
Example:
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]

3. map(), filter(), and forEach() are array methods in JavaScript...

map()--->It creates a new array by transforming each element of the original array.And It returns new array..It does not modify the original array.
filter()--->filter() creates a new array with elements that pass a condition.It returns new filtered array and elements that return true are kept...
forEach()--->forEach() loops through an array and executes a function for each element.It returns undefined.

4. What is an arrow function?
An arrow function is a shorter syntax for writing functions in JavaScript, introduced in ES6 (ECMAScript 2015). It uses the => (arrow) symbol.
Example:
const add = (a, b) => {
  return a + b;
};

5. Template literals are a feature in JavaScript (ES6) that allow us to create strings with embedded expressions, variables, and multi-line text using backticks (``) instead of quotes.
Example:
const name = "Nibir";
const message = `Hello, ${name}!`;
console.log(message);