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

// MODULES //

var isCollection = require( '@stdlib/assert/is-collection' );
var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

/**
* Applies a function against an accumulator and each element in a collection and returns the accumulated result, iterating from right to left.
*
* ## Notes
*
* -   For dynamic array resizing, the only behavior made intentionally consistent with `reduce` (iterating from left to right) is when elements are pushed onto the beginning (end) of an array. In other words, for `reduce()`, `[].push()` behavior is consistent with `reduceRight()` `[].unshift()` behavior.
*
*
* @param {Collection} collection - input collection
* @param {*} initial - initial value
* @param {Function} reducer - reduction function
* @param {*} [thisArg] - reduction function execution context
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} third argument must be a function
* @returns {*} accumulated result
*
* @example
* function sum( acc, value, index ) {
*     console.log( '%s: %d', index, value );
*     return acc + value;
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* var s = reduceRight( arr, 0, sum );
* // returns 10
*/
function reduceRight( collection, initial, reducer, thisArg ) {
	var len;
	var acc;
	var i;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
	}
	if ( !isFunction( reducer ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a function. Value:`'+reducer+'`.' );
	}
	len = collection.length;
	acc = initial;
	for ( i = len-1; i >= 0; i-- ) {
		acc = reducer.call( thisArg, acc, collection[ i ], i, collection );

		// Account for dynamically resizing a collection...
		if ( len !== collection.length ) {
			i += ( collection.length - len );
			len = collection.length;
		}
	}
	return acc;
}


// EXPORTS //

module.exports = reduceRight;
