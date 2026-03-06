/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Sorts a double-precision floating-point strided array using insertion sort.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Float64Array} input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
*
* dsortins( x.length, 1.0, x, 1, 0 );
* // x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
*/
function dsortins( N, order, x, strideX, offsetX ) {
	var flg;
	var ix;
	var jx;
	var fx;
	var lx;
	var v;
	var u;
	var i;

	if ( N <= 0 || order === 0.0 ) {
		return x;
	}
	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0 ) {
		strideX *= -1;
		offsetX -= (N-1) * strideX;
	}
	fx = offsetX;              // first index
	lx = fx + ((N-1)*strideX); // last index
	ix = fx + strideX;

	if ( strideX < 0 ) {
		// Traverse the strided array from right-to-left...

		// Sort in increasing order...
		for ( i = 1; i < N; i++ ) {
			v = x[ ix ];

			// Sort `NaN` values to the end (i.e., the left)...
			if ( isnan( v ) ) {
				jx = ix;

				// Shift all values (including NaNs) to the left of the current element to the right...
				while ( jx > lx ) {
					x[ jx ] = x[ jx+strideX ];
					jx += strideX;
				}
				x[ lx ] = v;
			} else {
				flg = isNegativeZero( v );
				jx = ix - strideX;

				// Shift all larger values to the right of the current element to the left...
				while ( jx <= fx ) {
					u = x[ jx ];
					if ( u <= v && !(flg && u === v && isNegativeZero( u ) === false) ) { // eslint-disable-line max-len
						// Note: positive zeros (and NaNs (e.g., when last element is NaN)) are sorted to the left
						break;
					}
					x[ jx+strideX ] = u;
					jx -= strideX;
				}
				x[ jx+strideX ] = v;
				ix += strideX;
			}
		}
		return x;
	}
	// Traverse the strided array from left-to-right...

	// Sort in increasing order...
	for ( i = 1; i < N; i++ ) {
		v = x[ ix ];

		// Sort `NaN` values to the end...
		if ( isnan( v ) ) {
			jx = ix;

			// Shift all values (including NaNs) to the right of the current element to the left...
			while ( jx < lx ) {
				x[ jx ] = x[ jx+strideX ];
				jx += strideX;
			}
			x[ lx ] = v;
		} else {
			flg = isNegativeZero( v );
			jx = ix - strideX;

			// Shift all larger values to the left of the current element to the right...
			while ( jx >= fx ) {
				u = x[ jx ];
				if ( u <= v && !(flg && u === v && isNegativeZero( u ) === false) ) { // eslint-disable-line max-len
					// Note: positive zeros (and NaNs (e.g., when first element is NaN)) are sorted to the right
					break;
				}
				x[ jx+strideX ] = u;
				jx -= strideX;
			}
			x[ jx+strideX ] = v;
			ix += strideX;
		}
	}
	return x;
}


// EXPORTS //

module.exports = dsortins;
