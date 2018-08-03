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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;


// MAIN //

/**
* Tests whether a collection contains at least `n` elements which are truthy.
*
* @param {Collection} collection - input collection
* @param {PositiveInteger} n - number of elements
* @throws {TypeError} first argument must be a collection
* @throws {TypeError} second argument must be a positive integer
* @returns {boolean} boolean indicating whether a collection contains at least `n` elements which are truthy
*
* @example
* var arr = [ 0, 0, 1, 2, 3 ];
*
* var bool = some( arr, 3 );
* // returns true
*/
function some( collection, n ) {
	var count;
	var len;
	var i;
	if ( !isCollection( collection ) ) {
		throw new TypeError( 'invalid argument. First argument must be a collection. Value: `'+collection+'`.' );
	}
	if ( !isPositiveInteger( n ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a positive integer. Value: `'+n+'`.' );
	}
	len = collection.length;
	count = 0;
	for ( i = 0; i < len; i++ ) {
		if ( collection[ i ] ) {
			count += 1;
			if ( count === n ) {
				return true;
			}
		}
	}
	return false;
}


// EXPORTS //

module.exports = some;
