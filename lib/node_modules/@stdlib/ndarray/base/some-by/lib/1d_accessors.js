/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// MAIN //

/**
* Tests whether at least `n` elements in an ndarray pass a test implemented by a predicate function.
*
* @private
* @param {Object} x - object containing ndarray meta data
* @param {ndarrayLike} x.ref - reference to the original ndarray-like object
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} x.accessors - data buffer accessors
* @param {PositiveInteger} n - number of elements
* @param {Function} predicate - predicate function
* @param {*} thisArg - predicate function execution context
* @returns {boolean} boolean indicating whether at least `n` elements pass a test
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var accessors = require( '@stdlib/array/base/accessors' );
*
* function predicate( value ) {
*    return value > 0.0;
* }
*
* // Create a data buffer:
* var xbuf = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 4 ];
*
* // Define the array strides:
* var sx = [ 2 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create the input ndarray-like object:
* var x = {
*     'ref': null,
*     'dtype': 'generic',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': accessors( xbuf ).accessors
* };
*
* // Test elements:
* var out = some1d( x, 4, predicate, {} );
* // returns true
*/
function some1d( x, n, predicate, thisArg ) {
	var count;
	var xbuf;
	var get;
	var dx0;
	var S0;
	var ix;
	var i0;

	// Note on variable naming convention: S#, dx#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables: dimensions and loop offset (pointer) increments...
	S0 = x.shape[ 0 ];
	dx0 = x.strides[ 0 ];

	// Set a pointer to the first indexed element:
	ix = x.offset;

	// Cache a reference to the input ndarray buffer:
	xbuf = x.data;

	// Cache accessor:
	get = x.accessors[ 0 ];

	// Initialize a counter:
	count = 0;

	// Iterate over the ndarray dimensions...
	for ( i0 = 0; i0 < S0; i0++ ) {
		if ( predicate.call( thisArg, get( xbuf, ix ), [ i0 ], x.ref ) ) {
			count += 1;
			if ( count === n ) {
				return true;
			}
		}
		ix += dx0;
	}
	return false;
}


// EXPORTS //

module.exports = some1d;
