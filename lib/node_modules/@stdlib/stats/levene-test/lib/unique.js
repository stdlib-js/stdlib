
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// FUNCTIONS //

/**
* Comparator function to sort values in ascending order.
*
* @private
* @param {number} a - first value
* @param {number} b - second value
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
}


// MAIN //

/**
* Removes duplicate values from a numeric array.
*
* @private
* @param {NumberArray} arr - array to be deduped
* @returns {NumberArray} deduped array
*/
function unique( arr ) {
	var len;
	var val;
	var i;
	var j;

	arr = arr.slice();
	arr.sort( ascending );
	len = arr.length;

	// Loop through the array, only incrementing a pointer when successive values are different. When a succeeding value is different, move the pointer and set the next value. In the trivial case where all array elements are unique, we incur a slight penalty in resetting the element value for each unique value. In other cases, we simply move a unique value to a new position in the array. The end result is a sorted array with unique values.
	for ( i = 1, j = 0; i < len; i++ ) {
		val = arr[ i ];
		if ( arr[ j ] !== val ) {
			j += 1;
			arr[ j ] = val;
		}
	}
	// Truncate the array:
	arr.length = j + 1;
	return arr;
}


// EXPORTS //

module.exports = unique;
