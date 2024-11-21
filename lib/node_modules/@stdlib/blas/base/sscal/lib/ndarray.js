/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Multiplies a vector `x` by a scalar `alpha`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar
* @param {Float32Array} x - input array
* @param {integer} stride - index increment
* @param {NonNegativeInteger} offset - starting index
* @returns {Float32Array} input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );
*
* sscal( 3, 5.0, x, 1, x.length-3 );
* // x => <Float32Array>[ 1.0, -2.0, 3.0, -20.0, 25.0, -30.0 ]
*/
function sscal( N, alpha, x, stride, offset ) {
	var ix;
	var m;
	var i;

	if ( N <= 0 || alpha === 1.0 ) {
		return x;
	}
	ix = offset;

	// Use loop unrolling if the stride is equal to `1`...
	if ( stride === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				x[ ix ] *= alpha;
				ix += stride;
			}
		}
		if ( N < M ) {
			return x;
		}
		for ( i = m; i < N; i += M ) {
			x[ ix ] *= alpha;
			x[ ix+1 ] *= alpha;
			x[ ix+2 ] *= alpha;
			x[ ix+3 ] *= alpha;
			x[ ix+4 ] *= alpha;
			ix += M;
		}
		return x;
	}
	for ( i = 0; i < N; i++ ) {
		x[ ix ] *= alpha;
		ix += stride;
	}
	return x;
}


// EXPORTS //

module.exports = sscal;
