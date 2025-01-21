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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var ssumpw = require( '@stdlib/blas/ext/base/ssumpw' );


// MAIN //

/**
* Computes the variance of a single-precision floating-point strided array using a two-pass algorithm.
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
* @param {Float32Array} x - input array
* @param {integer} stride - stride length
* @returns {number} variance
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
* var N = x.length;
*
* var v = svariancepn( N, 1, x, 1 );
* // returns ~4.3333
*/
function svariancepn( N, correction, x, stride ) {
	var mu;
	var ix;
	var M2;
	var M;
	var d;
	var n;
	var i;

	n = N - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		return 0.0;
	}
	// Compute an estimate for the mean:
	mu = ssumpw( N, x, stride ) / N;

	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	// Compute the variance...
	M2 = 0.0;
	M = 0.0;
	for ( i = 0; i < N; i++ ) {
		d = float64ToFloat32( x[ ix ] - mu );
		M2 = float64ToFloat32( M2 + float64ToFloat32( d*d ) );
		M = float64ToFloat32( M + d );
		ix += stride;
	}
	return float64ToFloat32( float64ToFloat32(M2/n) - float64ToFloat32( float64ToFloat32(M/N)*float64ToFloat32(M/n) ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = svariancepn;
