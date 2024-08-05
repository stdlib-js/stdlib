// Import the necessary module
var array2iterator = require('@stdlib/array/to-iterator');

// Define the function iterCuEveryBy
function iterCuEveryBy(iterator, predicate) {
    let index = 0;  // to keep track of the iteration index
    let cumulated = true;  // to track cumulative test result

    return {
        next() {
            const nextValue = iterator.next();
            if (nextValue.done) {
                return { value: undefined, done: true };
            }

            cumulated = cumulated && predicate(nextValue.value, index++);
            return { value: cumulated, done: false };
        }
    };
}

// Export the function for use in other files
module.exports = iterCuEveryBy;
