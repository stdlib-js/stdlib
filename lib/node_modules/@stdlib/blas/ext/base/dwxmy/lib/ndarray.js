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

// VARIABLES //

var M = 5;


// MAIN //

/**
* Multiplies elements of a double-precision floating-point strided array `x` by the corresponding elements of a double-precision floating-point strided array `y` and assigns the results to elements in a double-precision floating-point strided array `w` using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Float64Array} w - output array
* @param {integer} strideW - `w` stride length
* @param {NonNegativeInteger} offsetW - starting `w` index
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dwxmy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
* // w => <Float64Array>[ 2.0, 6.0, 12.0, 20.0, 30.0 ]
*/
function dwxmy( N, x, strideX, offsetX, y, strideY, offsetY, w, strideW, offsetW ) { // eslint-disable-line max-len
	var ix;
	var iy;
	var iw;
	var m;
	var i;

	if ( N <= 0 ) {
		return w;
	}
	ix = offsetX;
	iy = offsetY;
	iw = offsetW;

	// Use loop unrolling if all strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 && strideW === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				w[ iw ] = x[ ix ] * y[ iy ];
				ix += strideX;
				iy += strideY;
				iw += strideW;
			}
		}
		if ( N < M ) {
			return w;
		}
		for ( i = m; i < N; i += M ) {
			w[ iw ] = x[ ix ] * y[ iy ];
			w[ iw+1 ] = x[ ix+1 ] * y[ iy+1 ];
			w[ iw+2 ] = x[ ix+2 ] * y[ iy+2 ];
			w[ iw+3 ] = x[ ix+3 ] * y[ iy+3 ];
			w[ iw+4 ] = x[ ix+4 ] * y[ iy+4 ];
			ix += M;
			iy += M;
			iw += M;
		}
		return w;
	}
	for ( i = 0; i < N; i++ ) {
		w[ iw ] = x[ ix ] * y[ iy ];
		ix += strideX;
		iy += strideY;
		iw += strideW;
	}
	return w;
}


// EXPORTS //

module.exports = dwxmy;
