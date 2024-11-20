/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

// VARIABLES //

var SORT_OPTS = {
	'numeric': true // Use numeric collation such that "1" < "2" < "10"...
};


// FUNCTIONS //

/**
* Comparator function to sort values in ascending order.
*
* @private
* @param {*} a - first value
* @param {*} b - second value
* @returns {number} negative number if `a` comes before `b, positive if `a` comes after `b`, and `0` if they are equivalent
*/
function ascending( a, b ) {
	return String( a ).localeCompare( String( b ), void 0, SORT_OPTS );
}


// MAIN //

/**
* Returns the unique elements in an array.
*
* @private
* @param {Array} arr - input array
* @returns {Array} array of unique elements
*/
function unique( arr ) {
	var len;
	var out;
	var val;
	var i;
	var j;

	// Copy the array to avoid mutation:
	out = Array.prototype.slice.call( arr );
	len = out.length;

	// Sort array in ascending order:
	out.sort( ascending );

	// Loop through the array, only incrementing a pointer when successive values are different. When a succeeding value is different, move the pointer and set the next value. In the trivial case where all array elements are unique, we incur a slight penalty in resetting the element value for each unique value. In other cases, we simply move a unique value to a new position in the array. The end result is a sorted array with unique values.
	for ( i = 1, j = 0; i < len; i++ ) {
		val = out[ i ];
		if ( out[ j ] !== val ) {
			j += 1;
			out[ j ] = val;
		}
	}
	// Truncate the array:
	out.length = j+1;
	return out;
}


// EXPORTS //

module.exports = unique;
