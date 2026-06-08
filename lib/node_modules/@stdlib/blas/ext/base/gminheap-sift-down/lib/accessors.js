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

// MAIN //

/**
* Sifts a value down from a specified index in a strided min-heap until the heap property is restored.
*
* ## Notes
*
* -   The function assumes that the subtrees rooted at the children of `index` already satisfy the min-heap property and only the value being sifted may violate the min-heap invariant.
* -   The min-heap algorithm is sensitive to the presence of `NaN` values. Since `NaN` comparisons always return `false`, if `NaN` values are present in the input array, the results may be unpredictable.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} index - logical index at which to begin sifting
* @param {number} value - value to place into the heap
* @param {Object} x - heap storage array object
* @param {Collection} x.data - heap storage array data
* @param {Array<Function>} x.accessors - heap storage array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Object} heap storage array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* gminheapSiftDown( 5, 0, 7.0, arraylike2object( toAccessorArray( x ) ), 1, 0 );
*
* console.log( x );
* // => [ 2.0, 4.0, 3.0, 7.0, 5.0 ]
*/
function gminheapSiftDown( N, index, value, x, strideX, offsetX ) {
	var xbuf;
	var xget;
	var xset;
	var ridx;
	var cidx;
	var v;
	var j;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache references to element accessors:
	xget = x.accessors[ 0 ];
	xset = x.accessors[ 1 ];

	ridx = offsetX + ( index*strideX );
	j = ( index*2 ) + 1;
	while ( j < N ) {
		cidx = offsetX + ( j*strideX );

		// Find the smaller child...
		v = xget( xbuf, cidx );
		if ( j+1 < N && xget( xbuf, offsetX+((j+1)*strideX) ) < v ) {
			j += 1;
			cidx = offsetX + ( j*strideX );
			v = xget( xbuf, cidx );
		}
		// Stop if the value is already smaller than (or equal to) the smaller child...
		if ( v >= value ) {
			break;
		}
		// Move the child up...
		xset( xbuf, ridx, v );
		index = j;
		ridx = cidx;
		j = ( index*2 ) + 1;
	}
	xset( xbuf, ridx, value );
	return x;
}


// EXPORTS //

module.exports = gminheapSiftDown;
