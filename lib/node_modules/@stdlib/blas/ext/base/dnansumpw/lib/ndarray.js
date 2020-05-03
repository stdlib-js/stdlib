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
var floor = require( '@stdlib/math/base/special/floor' );


// VARIABLES //

// Blocksize for pairwise summation (NOTE: decreasing the blocksize decreases rounding error as more pairs are summed, but also decreases performance. Because the inner loop is unrolled eight times, the blocksize is effectively `16`.):
var BLOCKSIZE = 128;


// MAIN //

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
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
* @param {Float64Array} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} sum
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
* var N = floor( x.length / 2 );
*
* var v = dnansumpw( N, x, 2, 1 );
* // returns 5.0
*/
function dnansumpw( N, x, stride, offset ) {
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
		if ( isnan( x[ offset ] ) ) {
			return 0.0;
		}
		return x[ offset ];
	}
	ix = offset;
	if ( N < 8 ) {
		// Use simple summation...
		s = 0.0;
		for ( i = 0; i < N; i++ ) {
			if ( isnan( x[ ix ] ) === false ) {
				s += x[ ix ];
			}
			ix += stride;
		}
		return s;
	}
	if ( N <= BLOCKSIZE ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += stride;
		s1 = ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += stride;
		s2 = ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += stride;
		s3 = ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += stride;
		s4 = ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += stride;
		s5 = ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += stride;
		s6 = ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += stride;
		s7 = ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
		ix += stride;

		M = N % 8;
		for ( i = 8; i < N-M; i += 8 ) {
			s0 += ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
			ix += stride;
			s1 += ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
			ix += stride;
			s2 += ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
			ix += stride;
			s3 += ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
			ix += stride;
			s4 += ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
			ix += stride;
			s5 += ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
			ix += stride;
			s6 += ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
			ix += stride;
			s7 += ( isnan( x[ ix ] ) ) ? 0.0 : x[ ix ];
			ix += stride;
		}
		// Pairwise sum the accumulators:
		s = ((s0+s1) + (s2+s3)) + ((s4+s5) + (s6+s7));

		// Clean-up loop...
		for ( i; i < N; i++ ) {
			if ( isnan( x[ ix ] ) === false ) {
				s += x[ ix ];
			}
			ix += stride;
		}
		return s;
	}
	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	n = floor( N/2 );
	n -= n % 8;
	return dnansumpw( n, x, stride, ix ) + dnansumpw( N-n, x, stride, ix+(n*stride) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dnansumpw;
