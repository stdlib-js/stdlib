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
* Tests whether all elements in a collection fail a test implemented by a predicate function.
*
* @param {Collection} collection - input collection
* @param {Function} predicate - test function
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be a function
* @returns {boolean} boolean indicating whether all elements fail a test
*
* @example
* function isPositive( v ) {
*     return ( v > 0 );
* }
*
* var arr = [ -1, -2, -3, -4 ];
*
* var bool = noneBy( arr, isPositive );
* // returns true
*/
function noneBy( collection, predicate, thisArg ) {
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
	for ( i = 0; i < len; i++ ) {
		out = predicate.call( thisArg, collection[ i ], i, collection );
		if ( out ) {
			return false;
		}
		// Account for dynamically resizing a collection:
		len = collection.length;
	}
	return true;
}


// EXPORTS //

module.exports = noneBy;
