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

var M = 8;


// MAIN //

/**
* Fills a single-precision floating-point strided array with a specified scalar constant.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar
* @param {Float32Array} x - input array
* @param {integer} stride - index increment
* @returns {Float32Array} input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* sfill( x.length, 5.0, x, 1 );
* // x => <Float32Array>[ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
*/
function sfill( N, alpha, x, stride ) {
	var ix;
	var i;
	var m;

	if ( N <= 0 ) {
		return x;
	}
	// Use loop unrolling if the stride is equal to `1`...
	if ( stride === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				x[ i ] = alpha;
			}
		}
		if ( N < M ) {
			return x;
		}
		for ( i = m; i < N; i += M ) {
			x[ i ] = alpha;
			x[ i+1 ] = alpha;
			x[ i+2 ] = alpha;
			x[ i+3 ] = alpha;
			x[ i+4 ] = alpha;
			x[ i+5 ] = alpha;
			x[ i+6 ] = alpha;
			x[ i+7 ] = alpha;
		}
		return x;
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	for ( i = 0; i < N; i++ ) {
		x[ ix ] = alpha;
		ix += stride;
	}
	return x;
}


// EXPORTS //

module.exports = sfill;
