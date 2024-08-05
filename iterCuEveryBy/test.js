// Import the necessary modules
var array2iterator = require('@stdlib/array/to-iterator');
var iterCuEveryBy = require('./iterCuEveryBy');

// Define a predicate function
function isPositive(value) {
    return (value > 0);
}

// Convert an array to an iterator
var arr = array2iterator([1, 1, 1, 0, 1]);

// Create a cumulative test iterator
var it = iterCuEveryBy(arr, isPositive);

// Test the iterator
console.log(it.next().value);  // true
console.log(it.next().value);  // true
console.log(it.next().value);  // true
console.log(it.next().value);  // false
console.log(it.next().value);  // false
console.log(it.next().done);   // true
