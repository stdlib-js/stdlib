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

var M = 8;


// MAIN //

/**
* Copies values from `x` into `y`.
*
* @param {PositiveInteger} N - number of values to copy
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - destination array
* @param {integer} strideY - `y` stride length
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
*
* scopy( x.length, x, 1, y, 1 );
* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
function scopy( N, x, strideX, y, strideY ) {
	var ix;
	var iy;
	var m;
	var i;
	if ( N <= 0 ) {
		return y;
	}
	// Use unrolled loops if both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				y[ i ] = x[ i ];
			}
		}
		if ( N < M ) {
			return y;
		}
		for ( i = m; i < N; i += M ) {
			y[ i ] = x[ i ];
			y[ i+1 ] = x[ i+1 ];
			y[ i+2 ] = x[ i+2 ];
			y[ i+3 ] = x[ i+3 ];
			y[ i+4 ] = x[ i+4 ];
			y[ i+5 ] = x[ i+5 ];
			y[ i+6 ] = x[ i+6 ];
			y[ i+7 ] = x[ i+7 ];
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
		y[ iy ] = x[ ix ];
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = scopy;
