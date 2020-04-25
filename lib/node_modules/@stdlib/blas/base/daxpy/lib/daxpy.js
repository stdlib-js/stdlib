/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var M = 4;


// MAIN //

/**
* Multiplies a vector `x` by a constant and adds the result to `y`.
*
* @param {PositiveInteger} N - number of elements
* @param {number} alpha - scalar
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - destination array
* @param {integer} strideY - `y` stride length
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var alpha = 5.0;
*
* daxpy( x.length, alpha, x, 1, y, 1 );
* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*/
function daxpy( N, alpha, x, strideX, y, strideY ) {
	var ix;
	var iy;
	var m;
	var i;
	if ( N <= 0 || alpha === 0.0 ) {
		return y;
	}
	// Use unrolled loops if both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				y[ i ] += alpha * x[ i ];
			}
		}
		if ( N < M ) {
			return y;
		}
		for ( i = m; i < N; i += M ) {
			y[ i ] += alpha * x[ i ];
			y[ i+1 ] += alpha * x[ i+1 ];
			y[ i+2 ] += alpha * x[ i+2 ];
			y[ i+3 ] += alpha * x[ i+3 ];
		}
		return y;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	for ( i = 0; i < N; i++ ) {
		y[ iy ] += alpha * x[ ix ];
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = daxpy;
