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

/* eslint-disable max-len */

'use strict';

// MODULES //

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var cmulf = require( '@stdlib/complex/float32/base/mul' ).assign;


// VARIABLES //

var M = 5;


// MAIN //

/**
* Multiplies elements of a single-precision complex floating-point strided array `x` by the corresponding elements of a single-precision complex floating-point strided array `y` and assigns the results to elements in a single-precision complex floating-point strided array `w` using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Complex64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Complex64Array} w - output array
* @param {integer} strideW - `w` stride length
* @param {NonNegativeInteger} offsetW - starting `w` index
* @returns {Complex64Array} output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
* var w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cwxmy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
* // w => <Complex64Array>[ -4.0, 7.0, -8.0, 31.0, -12.0, 71.0 ]
*/
function cwxmy( N, x, strideX, offsetX, y, strideY, offsetY, w, strideW, offsetW ) {
	var xview;
	var yview;
	var wview;
	var ix;
	var iy;
	var iw;
	var sx;
	var sy;
	var sw;
	var m;
	var i;

	if ( N <= 0 ) {
		return w;
	}

	// Reinterpret the complex input arrays as real-valued arrays:
	xview = reinterpret( x, 0 );
	yview = reinterpret( y, 0 );
	wview = reinterpret( w, 0 );

	// Adjust the strides and offsets according to the real-valued arrays:
	ix = offsetX * 2;
	iy = offsetY * 2;
	iw = offsetW * 2;
	sx = strideX * 2;
	sy = strideY * 2;
	sw = strideW * 2;

	// Use loop unrolling if all strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 && strideW === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				cmulf( xview[ ix ], xview[ ix+1 ], yview[ iy ], yview[ iy+1 ], wview, 1, iw );
				ix += sx;
				iy += sy;
				iw += sw;
			}
		}
		if ( N < M ) {
			return w;
		}
		for ( i = m; i < N; i += M ) {
			cmulf( xview[ ix ], xview[ ix+1 ], yview[ iy ], yview[ iy+1 ], wview, 1, iw );
			cmulf( xview[ ix+2 ], xview[ ix+3 ], yview[ iy+2 ], yview[ iy+3 ], wview, 1, iw+2 );
			cmulf( xview[ ix+4 ], xview[ ix+5 ], yview[ iy+4 ], yview[ iy+5 ], wview, 1, iw+4 );
			cmulf( xview[ ix+6 ], xview[ ix+7 ], yview[ iy+6 ], yview[ iy+7 ], wview, 1, iw+6 );
			cmulf( xview[ ix+8 ], xview[ ix+9 ], yview[ iy+8 ], yview[ iy+9 ], wview, 1, iw+8 );
			ix += M * 2;
			iy += M * 2;
			iw += M * 2;
		}
		return w;
	}
	for ( i = 0; i < N; i++ ) {
		cmulf( xview[ ix ], xview[ ix+1 ], yview[ iy ], yview[ iy+1 ], wview, 1, iw );
		ix += sx;
		iy += sy;
		iw += sw;
	}
	return w;
}


// EXPORTS //

module.exports = cwxmy;
