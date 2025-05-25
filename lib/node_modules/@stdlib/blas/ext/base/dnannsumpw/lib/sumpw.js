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
* Computes the sum of a double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} out - two-element output array whose first element is the accumulated sum and whose second element is the accumulated number of summed values
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
* var out = new Float64Array( [ 0.0, 0 ] );
*
* var v = sumpw( 5.0, x, 2, 1, out, 1, 0 );
* // returns <Float64Array>[ 5.0, 4 ]
*/
function sumpw( N, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var ix;
	var io;
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
	var v;
	var i;

	if ( N <= 0 ) {
		return out;
	}
	io = offsetOut;
	ix = offsetX;
	if ( strideX === 0 ) {
		if ( isnan( x[ ix ] ) ) {
			return out;
		}
		out[ io ] += x[ ix ] * N;
		out[ io+strideOut ] += N;
		return out;
	}
	// Find the first non-NaN element...
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( isnan( v ) === false ) {
			break;
		}
		ix += strideX;
	}
	// If every element was NaN, we are done...
	if ( i === N ) {
		return out;
	}
	n = 1;
	s = v;
	ix += strideX;
	i += 1;

	// In order to preserve the sign of zero which can be lost during pairwise summation below, find the first non-zero element...
	if ( s === 0.0 ) {
		for ( ; i < N; i++ ) {
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				if ( v !== 0.0 ) {
					break;
				}
				s += v;
				n += 1;
			}
			ix += strideX;
		}
	}
	// If every subsequent element was either NaN or zero, we are done...
	if ( i === N ) {
		out[ io ] += s;
		out[ io+strideOut ] += n;
		return out;
	}
	// If we are here, then we found a non-zero element and we no longer have to be concerned about preserving zero's sign...

	if ( (N-i) < 8 ) {
		// Use simple summation...
		for ( ; i < N; i++ ) {
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				s += v;
				n += 1;
			}
			ix += strideX;
		}
		out[ io ] += s;
		out[ io+strideOut ] += n;
		return out;
	}
	if ( (N-i) <= BLOCKSIZE ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = -0.0; // note: negative zero in order to ensure sign preservation if all elements are negative zero
		s1 = -0.0;
		s2 = -0.0;
		s3 = -0.0;
		s4 = -0.0;
		s5 = -0.0;
		s6 = -0.0;
		s7 = -0.0;

		M = (N-i) % 8;
		for ( ; i < N-M; i += 8 ) {
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				s0 += v;
				n += 1;
			}
			ix += strideX;
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				s1 += v;
				n += 1;
			}
			ix += strideX;
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				s2 += v;
				n += 1;
			}
			ix += strideX;
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				s3 += v;
				n += 1;
			}
			ix += strideX;
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				s4 += v;
				n += 1;
			}
			ix += strideX;
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				s5 += v;
				n += 1;
			}
			ix += strideX;
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				s6 += v;
				n += 1;
			}
			ix += strideX;
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				s7 += v;
				n += 1;
			}
			ix += strideX;
		}
		// Pairwise sum the accumulators:
		s += ( (s0+s1) + (s2+s3) ) + ( (s4+s5) + (s6+s7) );

		// Clean-up loop...
		for ( ; i < N; i++ ) {
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				s += v;
				n += 1;
			}
			ix += strideX;
		}
		out[ io ] += s;
		out[ io+strideOut ] += n;
		return out;
	}
	out[ io ] += s;
	out[ io+strideOut ] += n;

	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	n = floor( (N-i)/2 );
	n -= n % 8;
	sumpw( n, x, strideX, ix, out, strideOut, io );
	sumpw( N-i-n, x, strideX, ix+(n*strideX), out, strideOut, io );
	return out;
}


// EXPORTS //

module.exports = sumpw;
