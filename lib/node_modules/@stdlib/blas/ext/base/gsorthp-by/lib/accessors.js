/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var floor = require( '@stdlib/math/base/special/floor' );


// MAIN //

/**
* Sorts a strided array using heapsort according to a provided callback function.
*
* ## Notes
*
* -   This implementation uses an in-place algorithm derived from the work of Floyd (1964).
*
* ## References
*
* -   Williams, John William Joseph. 1964. "Algorithm 232: Heapsort." _Communications of the ACM_ 7 (6). New York, NY, USA: Association for Computing Machinery: 347–49. doi:[10.1145/512274.512284](https://doi.org/10.1145/512274.512284).
* -   Floyd, Robert W. 1964. "Algorithm 245: Treesort." _Communications of the ACM_ 7 (12). New York, NY, USA: Association for Computing Machinery: 701. doi:[10.1145/355588.365103](https://doi.org/10.1145/355588.365103).
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @param {Callback} clbk - callback function
* @param {*} [thisArg] - execution context
* @returns {Object} `x`
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
*
* function clbk( a, b ) {
*     if ( a < b ) {
*         return -1;
*     }
*     if ( a > b ) {
*         return 1;
*     }
*     return 0;
* }
*
* gsorthpBy( x.length, arraylike2object( toAccessorArray( x ) ), 1, 0, clbk );
*
* console.log( x );
* // => [ -4.0, -2.0, 1.0, 3.0 ]
*/
function gsorthpBy( N, x, strideX, offsetX, clbk, thisArg ) {
	var parent;
	var child;
	var xbuf;
	var xget;
	var xset;
	var v1;
	var v2;
	var n;
	var t;
	var i;
	var j;
	var k;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache references to element accessors:
	xget = x.accessors[ 0 ];
	xset = x.accessors[ 1 ];

	// Set the initial heap size:
	n = N;

	// Specify an initial "parent" index for building the heap:
	parent = floor( N / 2 );

	// Continue looping until the array is sorted...
	while ( true ) {
		if ( parent > 0 ) {
			// We need to build the heap...
			parent -= 1;
			t = xget( xbuf, offsetX+(parent*strideX) );
		} else {
			// Reduce the heap size:
			n -= 1;

			// Check if the heap is empty, and, if so, we are finished sorting...
			if ( n === 0 ) {
				return x;
			}
			// Store the last heap value in a temporary variable in order to make room for the heap root being placed into its sorted position:
			i = offsetX + (n*strideX);
			t = xget( xbuf, i );

			// Move the heap root to its sorted position:
			xset( xbuf, i, xget( xbuf, offsetX ) );
		}
		// We need to "sift down", pushing `t` down the heap to in order to replace the parent and satisfy the heap property...

		// Start at the parent index:
		j = parent;

		// Get the "left" child index:
		child = (j*2) + 1;

		while ( child < n ) {
			// Find the largest child...
			k = child + 1;
			if ( k < n ) {
				v1 = xget( xbuf, offsetX+(k*strideX) );
				v2 = xget( xbuf, offsetX+(child*strideX) );

				// Check if a "right" child exists and is "bigger"...
				if ( clbk.call( thisArg, v1, v2, x ) > 0 ) {
					child += 1;
				}
			}
			// Check if the largest child is bigger than `t`...
			v1 = xget( xbuf, offsetX+(child*strideX) );
			if ( clbk.call( thisArg, v1, t, x ) > 0 ) {
				// Insert the larger child value:
				xset( xbuf, offsetX+(j*strideX), v1 );

				// Update `j` to point to the child index:
				j = child;

				// Get the "left" child index and repeat...
				child = (j*2) + 1;
			} else {
				// We've found `t`'s place in the heap...
				break;
			}
		}
		// Insert `t` into the heap:
		xset( xbuf, offsetX+(j*strideX), t );
	}
}


// EXPORTS //

module.exports = gsorthpBy;
