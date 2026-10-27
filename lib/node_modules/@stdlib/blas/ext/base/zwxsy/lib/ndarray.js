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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );


// VARIABLES //

var M = 5;


// MAIN //

/**
* Subtracts elements of a double-precision complex floating-point strided array `y` from the corresponding elements of a double-precision complex floating-point strided array `x` and assigns the results to elements in a double-precision complex floating-point strided array `w` using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Complex128Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Complex128Array} w - output array
* @param {integer} strideW - `w` stride length
* @param {NonNegativeInteger} offsetW - starting `w` index
* @returns {Complex128Array} output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 1.0, 3.0, -2.0, 1.0, 3.0, 4.0 ] );
* var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zwxsy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
* // w => <Complex128Array>[ 0.0, -1.0, 5.0, 3.0, 2.0, 2.0 ]
*/
function zwxsy( N, x, strideX, offsetX, y, strideY, offsetY, w, strideW, offsetW ) { // eslint-disable-line max-len
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
				wview[ iw ] = xview[ ix ] - yview[ iy ];
				wview[ iw+1 ] = xview[ ix+1 ] - yview[ iy+1 ];
				ix += sx;
				iy += sy;
				iw += sw;
			}
		}
		if ( N < M ) {
			return w;
		}
		for ( i = m; i < N; i += M ) {
			wview[ iw ] = xview[ ix ] - yview[ iy ];
			wview[ iw+1 ] = xview[ ix+1 ] - yview[ iy+1 ];
			wview[ iw+2 ] = xview[ ix+2 ] - yview[ iy+2 ];
			wview[ iw+3 ] = xview[ ix+3 ] - yview[ iy+3 ];
			wview[ iw+4 ] = xview[ ix+4 ] - yview[ iy+4 ];
			wview[ iw+5 ] = xview[ ix+5 ] - yview[ iy+5 ];
			wview[ iw+6 ] = xview[ ix+6 ] - yview[ iy+6 ];
			wview[ iw+7 ] = xview[ ix+7 ] - yview[ iy+7 ];
			wview[ iw+8 ] = xview[ ix+8 ] - yview[ iy+8 ];
			wview[ iw+9 ] = xview[ ix+9 ] - yview[ iy+9 ];
			ix += M * 2;
			iy += M * 2;
			iw += M * 2;
		}
		return w;
	}
	for ( i = 0; i < N; i++ ) {
		wview[ iw ] = xview[ ix ] - yview[ iy ];
		wview[ iw+1 ] = xview[ ix+1 ] - yview[ iy+1 ];
		ix += sx;
		iy += sy;
		iw += sw;
	}
	return w;
}


// EXPORTS //

module.exports = zwxsy;
