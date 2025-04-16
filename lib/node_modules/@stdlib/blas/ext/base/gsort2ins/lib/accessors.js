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
* Simultaneously sorts two strided arrays based on the sort order of the first array using insertion sort.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {Object} x - first input array object
* @param {Collection} x.data - first input array data
* @param {Array<Function>} x.accessors - first input array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} y - second input array object
* @param {Collection} y.data - second input array data
* @param {Array<Function>} y.accessors - second input array element accessors
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Object} `x`
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
* var y = [ 0.0, 1.0, 2.0, 3.0 ];
*
* gsort2ins( x.length, 1.0, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( y ) ), 1, 0 );
*
* console.log( x );
* // => [ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => [ 3.0, 1.0, 0.0, 2.0 ]
*/
function gsort2ins( N, order, x, strideX, offsetX, y, strideY, offsetY ) {
	var xbuf;
	var ybuf;
	var xget;
	var yget;
	var xset;
	var yset;
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

	// Cache reference to array data:
	xbuf = x.data;
	ybuf = y.data;

	// Cache reference to the element accessors:
	xget = x.accessors[ 0 ];
	xset = x.accessors[ 1 ];
	yget = y.accessors[ 0 ];
	yset = y.accessors[ 1 ];

	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0 ) {
		strideX *= -1;
		strideY *= -1;
		offsetX -= (N-1) * strideX;
		offsetY -= (N-1) * strideY;
	}
	fx = offsetX;              // first index
	lx = fx + ((N-1)*strideX); // last index
	ix = fx + strideX;

	fy = offsetY;              // first index
	ly = fy + ((N-1)*strideY); // last index
	iy = fy + strideY;

	if ( strideX < 0 ) {
		// Traverse the strided array from right-to-left...

		// Sort in increasing order...
		for ( i = 1; i < N; i++ ) {
			vx = xget( xbuf, ix );
			vy = yget( ybuf, iy );

			// Sort `NaN` values to the end (i.e., the left)...
			if ( isnan( vx ) ) {
				jx = ix;
				jy = iy;

				// Shift all values (including NaNs) to the left of the current element to the right...
				while ( jx > lx ) {
					xset( xbuf, jx, xget( xbuf, jx+strideX ) );
					yset( ybuf, jy, yget( ybuf, jy+strideY ) );
					jx += strideX;
					jy += strideY;
				}
				xset( xbuf, lx, vx );
				yset( ybuf, ly, vy );
			} else {
				flg = isNegativeZero( vx );
				jx = ix - strideX;
				jy = iy - strideY;

				// Shift all larger values to the right of the current element to the left...
				while ( jx <= fx ) {
					ux = xget( xbuf, jx );
					if ( ux <= vx && !(flg && ux === vx && isNegativeZero( ux ) === false) ) { // eslint-disable-line max-len
						// Note: positive zeros (and NaNs (e.g., when last element is NaN)) are sorted to the left
						break;
					}
					xset( xbuf, jx+strideX, ux );
					yset( ybuf, jy+strideY, yget( ybuf, jy ) );
					jx -= strideX;
					jy -= strideY;
				}
				xset( xbuf, jx+strideX, vx );
				yset( ybuf, jy+strideY, vy );
				ix += strideX;
				iy += strideY;
			}
		}
		return x;
	}
	// Traverse the strided array from left-to-right...

	// Sort in increasing order...
	for ( i = 1; i < N; i++ ) {
		vx = xget( xbuf, ix );
		vy = yget( ybuf, iy );

		// Sort `NaN` values to the end...
		if ( isnan( vx ) ) {
			jx = ix;
			jy = iy;

			// Shift all values (including NaNs) to the right of the current element to the left...
			while ( jx < lx ) {
				xset( xbuf, jx, xget( xbuf, jx+strideX ) );
				yset( ybuf, jy, yget( ybuf, jy+strideY ) );
				jx += strideX;
				jy += strideY;
			}
			xset( xbuf, lx, vx );
			yset( ybuf, ly, vy );
		} else {
			flg = isNegativeZero( vx );
			jx = ix - strideX;
			jy = iy - strideY;

			// Shift all larger values to the left of the current element to the right...
			while ( jx >= fx ) {
				ux = xget( xbuf, jx );
				if ( ux <= vx && !(flg && ux === vx && isNegativeZero( ux ) === false) ) { // eslint-disable-line max-len
					// Note: positive zeros (and NaNs (e.g., when first element is NaN)) are sorted to the right
					break;
				}
				xset( xbuf, jx+strideX, ux );
				yset( ybuf, jy+strideY, yget( ybuf, jy ) );
				jx -= strideX;
				jy -= strideY;
			}
			xset( xbuf, jx+strideX, vx );
			yset( ybuf, jy+strideY, vy );
			ix += strideX;
			iy += strideY;
		}
	}
	return x;
}


// EXPORTS //

module.exports = gsort2ins;
