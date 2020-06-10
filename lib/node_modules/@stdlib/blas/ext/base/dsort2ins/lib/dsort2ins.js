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
* Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array using insertion sort.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {Float64Array} x - first input array
* @param {integer} strideX - `x` index increment
* @param {Float64Array} y - second input array
* @param {integer} strideY - `y` index increment
* @returns {Float64Array} `x`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
* var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
*
* dsort2ins( x.length, 1.0, x, 1, y, 1 );
*
* console.log( x );
* // => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
*/
function dsort2ins( N, order, x, strideX, y, strideY ) {
	var flg;
	var ix;
	var jx;
	var fx;
	var lx;
	var iy;
	var jy;
	var fy;
	var ly;
	var vx;
	var vy;
	var ux;
	var i;

	if ( N <= 0 || order === 0.0 ) {
		return x;
	}
	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0 ) {
		strideX *= -1;
		strideY *= -1;
	}
	if ( strideY < 0 ) {
		fy = (1-N) * strideY;
		ly = 0;
	} else {
		fy = 0;
		ly = (N-1) * strideY;
	}
	iy = fy + strideY;

	if ( strideX < 0 ) {
		// Traverse the strided array from right-to-left...
		fx = (1-N) * strideX; // first index
		lx = 0;               // last index
		ix = fx + strideX;

		// Sort in increasing order...
		for ( i = 1; i < N; i++ ) {
			vx = x[ ix ];
			vy = y[ iy ];

			// Sort `NaN` values to the end (i.e., the left)...
			if ( isnan( vx ) ) {
				jx = ix;
				jy = iy;

				// Shift all values (including NaNs) to the left of the current element to the right...
				while ( jx > lx ) {
					x[ jx ] = x[ jx+strideX ];
					y[ jy ] = y[ jy+strideY ];
					jx += strideX;
					jy += strideY;
				}
				x[ lx ] = vx;
				y[ ly ] = vy;
			} else {
				flg = isNegativeZero( vx );
				jx = ix - strideX;
				jy = iy - strideY;

				// Shift all larger values to the right of the current element to the left...
				while ( jx <= fx ) {
					ux = x[ jx ];
					if ( ux <= vx && !(flg && ux === vx && isNegativeZero( ux ) === false) ) { // eslint-disable-line max-len
						// Note: positive zeros (and NaNs (e.g., when last element is NaN)) are sorted to the left
						break;
					}
					x[ jx+strideX ] = ux;
					y[ jy+strideY ] = y[ jy ];
					jx -= strideX;
					jy -= strideY;
				}
				x[ jx+strideX ] = vx;
				y[ jy+strideY ] = vy;
				ix += strideX;
				iy += strideY;
			}
		}
		return x;
	}
	// Traverse the strided array from left-to-right...
	fx = 0;              // first index
	lx = (N-1) * strideX; // last index
	ix = fx + strideX;

	// Sort in increasing order...
	for ( i = 1; i < N; i++ ) {
		vx = x[ ix ];
		vy = y[ iy ];

		// Sort `NaN` values to the end...
		if ( isnan( vx ) ) {
			jx = ix;
			jy = iy;

			// Shift all values (including NaNs) to the right of the current element to the left...
			while ( jx < lx ) {
				x[ jx ] = x[ jx+strideX ];
				y[ jy ] = y[ jy+strideY ];
				jx += strideX;
				jy += strideY;
			}
			x[ lx ] = vx;
			y[ ly ] = vy;
		} else {
			flg = isNegativeZero( vx );
			jx = ix - strideX;
			jy = iy - strideY;

			// Shift all larger values to the left of the current element to the right...
			while ( jx >= fx ) {
				ux = x[ jx ];
				if ( ux <= vx && !(flg && ux === vx && isNegativeZero( ux ) === false) ) { // eslint-disable-line max-len
					// Note: positive zeros (and NaNs (e.g., when first element is NaN)) are sorted to the right
					break;
				}
				x[ jx+strideX ] = ux;
				y[ jy+strideY ] = y[ jy ];
				jx -= strideX;
				jy -= strideY;
			}
			x[ jx+strideX ] = vx;
			y[ jy+strideY ] = vy;
			ix += strideX;
			iy += strideY;
		}
	}
	return x;
}


// EXPORTS //

module.exports = dsort2ins;
