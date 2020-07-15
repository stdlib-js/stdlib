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

// MODULES //

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var dsumpw = require( '@stdlib/blas/ext/base/dsumpw' );


// MAIN //

/**
* Computes the mean and variance of a double-precision floating-point strided array using a two-pass algorithm.
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
* @param {number} correction - degrees of freedom adjustment
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float64Array} out - output array
* @param {integer} strideOut - `out` stride length
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
* var out = new Float64Array( 2 );
*
* var v = dmeanvarpn( x.length, 1, x, 1, out, 1 );
* // returns <Float64Array>[ ~0.3333, ~4.3333 ]
*/
function dmeanvarpn( N, correction, x, strideX, out, strideOut ) {
	var mu;
	var ix;
	var io;
	var M2;
	var M;
	var d;
	var c;
	var n;
	var i;

	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideOut < 0 ) {
		io = -strideOut;
	} else {
		io = 0;
	}
	if ( N <= 0 ) {
		out[ io ] = NaN;
		out[ io+strideOut ] = NaN;
		return out;
	}
	n = N - correction;
	if ( N === 1 || strideX === 0 ) {
		out[ io ] = x[ ix ];
		if ( n <= 0.0 ) {
			out[ io+strideOut ] = NaN;
		} else {
			out[ io+strideOut ] = 0.0;
		}
		return out;
	}
	// Compute an estimate for the mean:
	mu = dsumpw( N, x, strideX ) / N;
	if ( isnan( mu ) ) {
		out[ io ] = NaN;
		out[ io+strideOut ] = NaN;
		return out;
	}
	// Compute the sum of squared differences from the mean...
	M2 = 0.0;
	M = 0.0;
	for ( i = 0; i < N; i++ ) {
		d = x[ ix ] - mu;
		M2 += d * d;
		M += d;
		ix += strideX;
	}
	// Compute an error term for the mean:
	c = M / N;

	out[ io ] = mu + c;
	if ( n <= 0.0 ) {
		out[ io+strideOut ] = NaN;
	} else {
		out[ io+strideOut ] = (M2/n) - (c*(M/n));
	}
	return out;
}


// EXPORTS //

module.exports = dmeanvarpn;
