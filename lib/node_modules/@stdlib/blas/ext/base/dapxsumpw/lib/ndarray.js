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
* Adds a constant to each double-precision floating-point strided array element and computes the sum using pairwise summation.
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
* @param {number} alpha - constant
* @param {Float64Array} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} sum
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var N = floor( x.length / 2 );
*
* var v = dapxsumpw( N, 5.0, x, 2, 1 );
* // returns 25.0
*/
function dapxsumpw( N, alpha, x, stride, offset ) {
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
	if ( N === 1 || stride === 0 ) {
		return alpha + x[ offset ];
	}
	ix = offset;
	if ( N < 8 ) {
		// Use simple summation...
		s = 0.0;
		for ( i = 0; i < N; i++ ) {
			s += alpha + x[ ix ];
			ix += stride;
		}
		return s;
	}
	if ( N <= BLOCKSIZE ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = alpha + x[ ix ];
		s1 = alpha + x[ ix+stride ];
		s2 = alpha + x[ ix+(2*stride) ];
		s3 = alpha + x[ ix+(3*stride) ];
		s4 = alpha + x[ ix+(4*stride) ];
		s5 = alpha + x[ ix+(5*stride) ];
		s6 = alpha + x[ ix+(6*stride) ];
		s7 = alpha + x[ ix+(7*stride) ];
		ix += 8 * stride;

		M = N % 8;
		for ( i = 8; i < N-M; i += 8 ) {
			s0 += alpha + x[ ix ];
			s1 += alpha + x[ ix+stride ];
			s2 += alpha + x[ ix+(2*stride) ];
			s3 += alpha + x[ ix+(3*stride) ];
			s4 += alpha + x[ ix+(4*stride) ];
			s5 += alpha + x[ ix+(5*stride) ];
			s6 += alpha + x[ ix+(6*stride) ];
			s7 += alpha + x[ ix+(7*stride) ];
			ix += 8 * stride;
		}
		// Pairwise sum the accumulators:
		s = ((s0+s1) + (s2+s3)) + ((s4+s5) + (s6+s7));

		// Clean-up loop...
		for ( i; i < N; i++ ) {
			s += alpha + x[ ix ];
			ix += stride;
		}
		return s;
	}
	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	n = floor( N/2 );
	n -= n % 8;
	return dapxsumpw( n, alpha, x, stride, ix ) + dapxsumpw( N-n, alpha, x, stride, ix+(n*stride) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dapxsumpw;
