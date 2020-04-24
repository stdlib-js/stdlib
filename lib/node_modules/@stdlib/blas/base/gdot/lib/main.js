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

// VARIABLES //

var M = 5;


// MAIN //

/**
* Computes the dot product of `x` and `y`.
*
* @param {PositiveInteger} N - number of values over which to compute the dot product
* @param {NumericArray} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NumericArray} y - second input array
* @param {integer} strideY - `y` stride length
* @returns {number} dot product of `x` and `y`
*
* @example
* var x = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
* var y = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];

* var z = gdot( x.length, x, 1, y, 1 );
* // returns -5.0
*/
function gdot( N, x, strideX, y, strideY ) {
	var dot;
	var ix;
	var iy;
	var m;
	var i;

	dot = 0.0;
	if ( N <= 0 ) {
		return dot;
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
			return dot;
		}
		for ( i = m; i < N; i += M ) {
			dot += ( x[i]*y[i] ) + ( x[i+1]*y[i+1] ) + ( x[i+2]*y[i+2] ) + ( x[i+3]*y[i+3] ) + ( x[i+4]*y[i+4] ); // eslint-disable-line max-len
		}
		return dot;
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
		dot += ( x[ ix ] * y[ iy ] );
		ix += strideX;
		iy += strideY;
	}
	return dot;
}


// EXPORTS //

module.exports = gdot;
