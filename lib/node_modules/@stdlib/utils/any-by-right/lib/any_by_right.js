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
* Tests whether at least one element in a collection passes a test implemented by a predicate function, iterating from right to left.
*
* @param {Collection} collection - input collection
* @param {Function} predicate - test function
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be a function
* @returns {boolean} boolean indicating whether at least one element passes a test
*
* @example
* function isNegative( v ) {
*     return ( v < 0 );
* }
*
* var arr = [ -1, 1, 2, 3, 4 ];
*
* var bool = anyByRight( arr, isNegative );
* // returns true
*/
function anyByRight( collection, predicate, thisArg ) {
	var out;
	var len;
	var i;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
	}
	if ( !isFunction( predicate ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+predicate+'`.' );
	}
	len = collection.length;
	for ( i = len-1; i >= 0; i-- ) {
		out = predicate.call( thisArg, collection[ i ], i, collection );
		if ( out ) {
			return true;
		}
		// Account for dynamically resizing a collection...
		if ( len !== collection.length ) {
			i += ( collection.length - len );
			len = collection.length;
		}
	}
	return false;
}


// EXPORTS //

module.exports = anyByRight;
