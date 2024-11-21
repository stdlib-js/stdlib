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

var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );


// MAIN //

/**
* Sorts a single-precision floating-point strided array using insertion sort.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {Float32Array} x - input array
* @param {integer} stride - index increment
* @returns {Float32Array} input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
*
* ssortins( x.length, 1.0, x, 1 );
* // x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
*/
function ssortins( N, order, x, stride ) {
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
		stride *= -1;
	}
	if ( stride < 0 ) {
		// Traverse the strided array from right-to-left...
		fx = (1-N) * stride; // first index
		lx = 0;              // last index
		ix = fx + stride;

		// Sort in increasing order...
		for ( i = 1; i < N; i++ ) {
			v = x[ ix ];

			// Sort `NaN` values to the end (i.e., the left)...
			if ( isnanf( v ) ) {
				jx = ix;

				// Shift all values (including NaNs) to the left of the current element to the right...
				while ( jx > lx ) {
					x[ jx ] = x[ jx+stride ];
					jx += stride;
				}
				x[ lx ] = v;
			} else {
				flg = isNegativeZerof( v );
				jx = ix - stride;

				// Shift all larger values to the right of the current element to the left...
				while ( jx <= fx ) {
					u = x[ jx ];
					if ( u <= v && !(flg && u === v && isNegativeZerof( u ) === false) ) { // eslint-disable-line max-len
						// Note: positive zeros (and NaNs (e.g., when last element is NaN)) are sorted to the left
						break;
					}
					x[ jx+stride ] = u;
					jx -= stride;
				}
				x[ jx+stride ] = v;
				ix += stride;
			}
		}
		return x;
	}
	// Traverse the strided array from left-to-right...
	fx = 0;              // first index
	lx = (N-1) * stride; // last index
	ix = fx + stride;

	// Sort in increasing order...
	for ( i = 1; i < N; i++ ) {
		v = x[ ix ];

		// Sort `NaN` values to the end...
		if ( isnanf( v ) ) {
			jx = ix;

			// Shift all values (including NaNs) to the right of the current element to the left...
			while ( jx < lx ) {
				x[ jx ] = x[ jx+stride ];
				jx += stride;
			}
			x[ lx ] = v;
		} else {
			flg = isNegativeZerof( v );
			jx = ix - stride;

			// Shift all larger values to the left of the current element to the right...
			while ( jx >= fx ) {
				u = x[ jx ];
				if ( u <= v && !(flg && u === v && isNegativeZerof( u ) === false) ) { // eslint-disable-line max-len
					// Note: positive zeros (and NaNs (e.g., when first element is NaN)) are sorted to the right
					break;
				}
				x[ jx+stride ] = u;
				jx -= stride;
			}
			x[ jx+stride ] = v;
			ix += stride;
		}
	}
	return x;
}


// EXPORTS //

module.exports = ssortins;
