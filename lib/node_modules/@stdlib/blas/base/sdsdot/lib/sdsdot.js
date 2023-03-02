/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// VARIABLES //

var M = 5;


// MAIN //

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} scalar - scalar constant to add to dot product
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @returns {number} dot product
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = sdsdot( x.length, 0.0, x, 1, y, 1 );
* // returns -5.0
*/
function sdsdot( N, scalar, x, strideX, y, strideY ) {
	var dot;
	var ix;
	var iy;
	var m;
	var i;

	dot = scalar;
	if ( N <= 0 ) {
		return float64ToFloat32( dot );
	}
	// Use unrolled loops if both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				dot += x[ i ] * y[ i ];
			}
		}
		if ( N < M ) {
			return float64ToFloat32( dot );
		}
		for ( i = m; i < N; i += M ) {
			dot += ( x[i]*y[i] ) + ( x[i+1]*y[i+1] ) + ( x[i+2]*y[i+2] ) + ( x[i+3]*y[i+3] ) + ( x[i+4]*y[i+4] ); // eslint-disable-line max-len
		}
		return float64ToFloat32( dot );
	}
	if ( strideX < 0 ) {
		ix = ( 1-N ) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = ( 1-N ) * strideY;
	} else {
		iy = 0;
	}
	for ( i = 0; i < N; i++ ) {
		dot += x[ ix ] * y[ iy ];
		ix += strideX;
		iy += strideY;
	}
	return float64ToFloat32( dot );
}


// EXPORTS //

module.exports = sdsdot;
