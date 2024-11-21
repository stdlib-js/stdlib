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

var M = 6;


// MAIN //

/**
* Computes the sum of strided array elements using ordinary recursive summation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} stride - stride length
* @returns {number} sum
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var N = x.length;
*
* var v = gsumors( N, x, 1 );
* // returns 1.0
*/
function gsumors( N, x, stride ) {
	var ix;
	var m;
	var s;
	var i;

	s = 0.0;
	if ( N <= 0 ) {
		return s;
	}
	if ( N === 1 || stride === 0 ) {
		return x[ 0 ];
	}
	// If the stride is equal to `1`, use unrolled loops...
	if ( stride === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				s += x[ i ];
			}
		}
		if ( N < M ) {
			return s;
		}
		for ( i = m; i < N; i += M ) {
			s += x[i] + x[i+1] + x[i+2] + x[i+3] + x[i+4] + x[i+5];
		}
		return s;
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	for ( i = 0; i < N; i++ ) {
		s += x[ ix ];
		ix += stride;
	}
	return s;
}


// EXPORTS //

module.exports = gsumors;
