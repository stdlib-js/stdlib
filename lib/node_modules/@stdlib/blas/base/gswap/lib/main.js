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

var M = 3;


// MAIN //

/**
* Interchanges vectors `x` and `y`.
*
* @param {PositiveInteger} N - number of values to swap
* @param {NumericArray} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NumericArray} y - second input array
* @param {integer} strideY - `y` stride length
* @returns {NumericArray} `y`
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
*
* gswap( x.length, x, 1, y, 1 );
* // x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
function gswap( N, x, strideX, y, strideY ) {
	var tmp;
	var ix;
	var iy;
	var m;
	var i;
	var j;
	if ( N <= 0 ) {
		return y;
	}
	// Use unrolled loops if both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				tmp = x[ i ];
				x[ i ] = y[ i ];
				y[ i ] = tmp;
			}
		}
		if ( N < M ) {
			return y;
		}
		for ( i = m; i < N; i += M ) {
			tmp = x[ i ];
			x[ i ] = y[ i ];
			y[ i ] = tmp;

			j = i + 1;
			tmp = x[ j ];
			x[ j ] = y[ j ];
			y[ j ] = tmp;

			j += 1;
			tmp = x[ j ];
			x[ j ] = y[ j ];
			y[ j ] = tmp;
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
		tmp = x[ ix ];
		x[ ix ] = y[ iy ];
		y[ iy ] = tmp;
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = gswap;
