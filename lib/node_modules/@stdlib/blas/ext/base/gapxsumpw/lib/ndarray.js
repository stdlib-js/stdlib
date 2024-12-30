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

var floor = require( '@stdlib/math/base/special/floor' );


// VARIABLES //

// Blocksize for pairwise summation (NOTE: decreasing the blocksize decreases rounding error as more pairs are summed, but also decreases performance. Because the inner loop is unrolled eight times, the blocksize is effectively `16`.):
var BLOCKSIZE = 128;


// MAIN //

/**
* Adds a scalar constant to each strided array element and computes the sum using pairwise summation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar constant
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} sum
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var v = gapxsumpw( 4, 5.0, x, 2, 1 );
* // returns 25.0
*/
function gapxsumpw( N, alpha, x, strideX, offsetX ) {
	var ix;
	var s0;
	var s1;
	var s2;
	var s3;
	var s4;
	var s5;
	var s6;
	var s7;
	var M;
	var s;
	var n;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	if ( strideX === 0 ) {
		return N * ( alpha + x[ ix ] );
	}
	if ( N < 8 ) {
		// Use simple summation...
		s = 0.0;
		for ( i = 0; i < N; i++ ) {
			s += alpha + x[ ix ];
			ix += strideX;
		}
		return s;
	}
	if ( N <= BLOCKSIZE ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = alpha + x[ ix ];
		s1 = alpha + x[ ix+strideX ];
		s2 = alpha + x[ ix+(2*strideX) ];
		s3 = alpha + x[ ix+(3*strideX) ];
		s4 = alpha + x[ ix+(4*strideX) ];
		s5 = alpha + x[ ix+(5*strideX) ];
		s6 = alpha + x[ ix+(6*strideX) ];
		s7 = alpha + x[ ix+(7*strideX) ];
		ix += 8 * strideX;

		M = N % 8;
		for ( i = 8; i < N-M; i += 8 ) {
			s0 += alpha + x[ ix ];
			s1 += alpha + x[ ix+strideX ];
			s2 += alpha + x[ ix+(2*strideX) ];
			s3 += alpha + x[ ix+(3*strideX) ];
			s4 += alpha + x[ ix+(4*strideX) ];
			s5 += alpha + x[ ix+(5*strideX) ];
			s6 += alpha + x[ ix+(6*strideX) ];
			s7 += alpha + x[ ix+(7*strideX) ];
			ix += 8 * strideX;
		}
		// Pairwise sum the accumulators:
		s = ( (s0+s1) + (s2+s3) ) + ( (s4+s5) + (s6+s7) );

		// Clean-up loop...
		for ( i; i < N; i++ ) {
			s += alpha + x[ ix ];
			ix += strideX;
		}
		return s;
	}
	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	n = floor( N/2 );
	n -= n % 8;
	return gapxsumpw( n, alpha, x, strideX, ix ) + gapxsumpw( N-n, alpha, x, strideX, ix+(n*strideX) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gapxsumpw;
