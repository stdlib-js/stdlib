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

// MODULES //

var abs = require( '@stdlib/math/base/special/abs' );


// VARIABLES //

var M = 6;


// MAIN //

/**
* Computes the sum of absolute values.
*
* @param {PositiveInteger} N - number of values to sum
* @param {Float64Array} x - input array
* @param {PositiveInteger} stride - `x` stride length
* @returns {number} sum
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0 ] );
*
* var s = dasum( x.length, x, 1 );
* // returns 15.0
*/
function dasum( N, x, stride ) {
	var sum;
	var m;
	var i;

	sum = 0.0;
	if ( N <= 0 || stride <= 0 ) {
		return sum;
	}
	// Use unrolled loops if the stride is equal to `1`...
	if ( stride === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				sum += abs( x[i] );
			}
		}
		if ( N < M ) {
			return sum;
		}
		for ( i = m; i < N; i += M ) {
			sum += abs(x[i]) + abs(x[i+1]) + abs(x[i+2]) + abs(x[i+3]) + abs(x[i+4]) + abs(x[i+5]); // eslint-disable-line max-len
		}
		return sum;
	}
	N *= stride;
	for ( i = 0; i < N; i += stride ) {
		sum += abs( x[i] );
	}
	return sum;
}


// EXPORTS //

module.exports = dasum;
