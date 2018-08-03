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
* While a test condition is true, invokes a function once for each element in a collection, iterating from right to left.
*
* ## Notes
*
* -   For dynamic array resizing, the only behavior made intentionally consistent with `whileEach` (iterating from left to right) is when elements are pushed onto the beginning (end) of an array. In other words, for `whileEach()`, `[].push()` behavior is consistent with `whileEachRight()` `[].unshift()` behavior.
*
*
* @param {Collection} collection - input collection
* @param {Function} predicate - function which indicates whether to continue iterating over a collection
* @param {Function} fcn - function to invoke
* @param {*} [thisArg] - execution context for the applied function
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be a function
* @throws {TypeError} third argument must be a function
* @returns {Collection} input collection
*
* @example
* function predicate( v, index, collection ) {
*     return ( v === v );
* }
*
* function log( v, index, collection ) {
*     console.log( '%s: %d', index, v );
* }
*
* var arr = [ 1, NaN, 2, 3, 4, 5 ];
*
* whileEachRight( arr, predicate, log );
*/
function whileEachRight( collection, predicate, fcn, thisArg ) {
	var len;
	var i;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+predicate+'`.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Third argument must be a function. Value: `'+fcn+'`.' );
	}
	len = collection.length;
	i = len - 1;
	while (
		i >= 0 &&
		predicate( collection[ i ], i, collection )
	) {
		fcn.call( thisArg, collection[ i ], i, collection );

		// Account for dynamically resizing a collection...
		if ( len !== collection.length ) {
			i += ( collection.length - len );
			len = collection.length;
		}
		i -= 1;
	}
	return collection;
}


// EXPORTS //

module.exports = whileEachRight;
