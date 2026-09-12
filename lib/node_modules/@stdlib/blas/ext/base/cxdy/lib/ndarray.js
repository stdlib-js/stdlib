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
var cdivf = require( '@stdlib/complex/float32/base/div' ).assign;


// VARIABLES //

var M = 5;


// MAIN //

/**
* Divides elements of a single-precision complex floating-point strided array `x` by the corresponding elements of a single-precision complex floating-point strided array `y` and assigns the results to `y` using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Complex64Array} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Complex64Array} output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 4.0, 6.0, 12.0, 8.0, 16.0, 8.0 ] );
* var y = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 ] );
*
* cxdy( x.length, x, 1, 0, y, 1, 0 );
* // y => <Complex64Array>[ 5.0, 1.0, 5.0, -1.0, 3.0, -1.0 ]
*/
function cxdy( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var xview;
	var yview;
	var ix;
	var iy;
	var sx;
	var sy;
	var m;
	var i;

	if ( N <= 0 ) {
		return y;
	}

	// Reinterpret the complex input arrays as real-valued arrays:
	xview = reinterpret( x, 0 );
	yview = reinterpret( y, 0 );

	// Adjust the strides and offsets according to the real-valued arrays:
	ix = offsetX * 2;
	iy = offsetY * 2;
	sx = strideX * 2;
	sy = strideY * 2;

	// Use loop unrolling if both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				cdivf( xview[ ix ], xview[ ix+1 ], yview[ iy ], yview[ iy+1 ], yview, 1, iy );
				ix += sx;
				iy += sy;
			}
		}
		if ( N < M ) {
			return y;
		}
		for ( i = m; i < N; i += M ) {
			cdivf( xview[ ix ], xview[ ix+1 ], yview[ iy ], yview[ iy+1 ], yview, 1, iy );
			cdivf( xview[ ix+2 ], xview[ ix+3 ], yview[ iy+2 ], yview[ iy+3 ], yview, 1, iy+2 );
			cdivf( xview[ ix+4 ], xview[ ix+5 ], yview[ iy+4 ], yview[ iy+5 ], yview, 1, iy+4 );
			cdivf( xview[ ix+6 ], xview[ ix+7 ], yview[ iy+6 ], yview[ iy+7 ], yview, 1, iy+6 );
			cdivf( xview[ ix+8 ], xview[ ix+9 ], yview[ iy+8 ], yview[ iy+9 ], yview, 1, iy+8 );
			ix += M * 2;
			iy += M * 2;
		}
		return y;
	}
	for ( i = 0; i < N; i++ ) {
		cdivf( xview[ ix ], xview[ ix+1 ], yview[ iy ], yview[ iy+1 ], yview, 1, iy );
		ix += sx;
		iy += sy;
	}
	return y;
}


// EXPORTS //

module.exports = cxdy;
