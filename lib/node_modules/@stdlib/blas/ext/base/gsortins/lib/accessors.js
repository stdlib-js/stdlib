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

// MODULES //

var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Sorts a strided array using insertion sort.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {Object} x - input array object
* @param {Collection} x.data - first input array data
* @param {Array<Function>} x.accessors - first input array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Object} `x`
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
*
* gsortins( x.length, 1.0, arraylike2object( toAccessorArray( x ) ), 1, 0 );
*
* console.log( x );
* // => [ -4.0, -2.0, 1.0, 3.0 ]
*/
function gsortins( N, order, x, strideX, offsetX ) {
	var xbuf;
	var xget;
	var xset;
	var flg;
	var ix;
	var jx;
	var fx;
	var lx;
	var v;
	var u;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache reference to the element accessors:
	xget = x.accessors[ 0 ];
	xset = x.accessors[ 1 ];

	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0 ) {
		strideX *= -1;
		offsetX -= (N-1) * strideX;
	}
	fx = offsetX;              // first index
	lx = fx + ( (N-1)*strideX ); // last index
	ix = fx + strideX;

	if ( strideX < 0 ) {
		// Traverse the strided array from right-to-left...

		// Sort in increasing order...
		for ( i = 1; i < N; i++ ) {
			v = xget( xbuf, ix );

			// Sort `NaN` values to the end (i.e., the left)...
			if ( isnan( v ) ) {
				jx = ix;

				// Shift all values (including NaNs) to the left of the current element to the right...
				while ( jx > lx ) {
					xset( xbuf, jx, xget( xbuf, jx+strideX ) );
					jx += strideX;
				}
				xset( xbuf, lx, v );
			} else {
				flg = isNegativeZero( v );
				jx = ix - strideX;

				// Shift all larger values to the right of the current element to the left...
				while ( jx <= fx ) {
					u = xget( xbuf, jx );
					if ( u <= v && !(flg && u === v && isNegativeZero( u ) === false) ) { // eslint-disable-line max-len
						// Note: positive zeros (and NaNs (e.g., when last element is NaN)) are sorted to the left
						break;
					}
					xset( xbuf, jx+strideX, u );
					jx -= strideX;
				}
				xset( xbuf, jx+strideX, v );
				ix += strideX;
			}
		}
		return x;
	}
	// Traverse the strided array from left-to-right...

	// Sort in increasing order...
	for ( i = 1; i < N; i++ ) {
		v = xget( xbuf, ix );

		// Sort `NaN` values to the end...
		if ( isnan( v ) ) {
			jx = ix;

			// Shift all values (including NaNs) to the right of the current element to the left...
			while ( jx < lx ) {
				xset( xbuf, jx, xget( xbuf, jx+strideX ) );
				jx += strideX;
			}
			xset( xbuf, lx, v );
		} else {
			flg = isNegativeZero( v );
			jx = ix - strideX;

			// Shift all larger values to the left of the current element to the right...
			while ( jx >= fx ) {
				u = xget( xbuf, jx );
				if ( u <= v && !(flg && u === v && isNegativeZero( u ) === false) ) { // eslint-disable-line max-len
					// Note: positive zeros (and NaNs (e.g., when first element is NaN)) are sorted to the right
					break;
				}
				xset( xbuf, jx+strideX, u );
				jx -= strideX;
			}
			xset( xbuf, jx+strideX, v );
			ix += strideX;
		}
	}
	return x;
}


// EXPORTS //

module.exports = gsortins;
