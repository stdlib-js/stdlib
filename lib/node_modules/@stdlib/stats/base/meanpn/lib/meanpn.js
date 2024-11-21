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

var gsumpw = require( '@stdlib/blas/ext/base/gsumpw' );
var gapxsumpw = require( '@stdlib/blas/ext/base/gapxsumpw' );


// MAIN //

/**
* Computes the arithmetic mean of a strided array using a two-pass error correction algorithm.
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
* @param {NumericArray} x - input array
* @param {integer} stride - stride length
* @returns {number} arithmetic mean
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var N = x.length;
*
* var v = meanpn( N, x, 1 );
* // returns ~0.3333
*/
function meanpn( N, x, stride ) {
	var mu;
	var c;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		return x[ 0 ];
	}
	// Compute an estimate for the meanpn:
	mu = gsumpw( N, x, stride ) / N;

	// Compute an error term:
	c = gapxsumpw( N, -mu, x, stride ) / N;

	return mu + c;
}


// EXPORTS //

module.exports = meanpn;
