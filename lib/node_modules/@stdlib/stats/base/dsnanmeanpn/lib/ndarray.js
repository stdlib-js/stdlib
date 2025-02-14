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

// MAIN //

/**
* Computes the arithmetic mean of a single-precision floating-point strided array, ignoring `NaN` values, using a two-pass error correction algorithm with extended accumulation, and returning an extended precision result.
*
* ## Method
*
* -   This implementation uses a two-pass approach, as suggested by Neely (1966).
*
* ## References
*
* -   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958](https://doi.org/10.1145/365719.365958).
* -   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036](https://doi.org/10.1145/3221269.3223036).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} arithmetic mean
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = dsnanmeanpn( 5, x, 2, 1 );
* // returns 1.25
*/
function dsnanmeanpn( N, x, strideX, offsetX ) {
	var ix;
	var v;
	var s;
	var t;
	var n;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || strideX === 0 ) {
		return x[ offsetX ];
	}
	ix = offsetX;

	// Compute an estimate for the mean...
	s = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( v === v ) {
			n += 1;
			s += v;
		}
		ix += strideX;
	}
	if ( n === 0 ) {
		return NaN;
	}
	s /= n;

	// Compute an error term...
	ix = offsetX;
	t = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( v === v ) {
			t += v - s;
		}
		ix += strideX;
	}
	return s + (t/n);
}


// EXPORTS //

module.exports = dsnanmeanpn;
