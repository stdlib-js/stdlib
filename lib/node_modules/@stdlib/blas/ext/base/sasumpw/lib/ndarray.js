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
var floor = require( '@stdlib/math/base/special/floor' );
var absf = require( '@stdlib/math/base/special/absf' );


// VARIABLES //

// Blocksize for pairwise summation (NOTE: decreasing the blocksize decreases rounding error as more pairs are summed, but also decreases performance. Because the inner loop is unrolled eight times, the blocksize is effectively `16`.):
var BLOCKSIZE = 128;


// MAIN //

/**
* Computes the sum of absolute values (L1 norm) of single-precision floating-point strided array elements using pairwise summation.
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
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} sum
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = sasumpw( 4, x, 2, 1 );
* // returns 9.0
*/
function sasumpw( N, x, strideX, offsetX ) {
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
		return float64ToFloat32( N * absf( x[ ix ] ) );
	}
	if ( N < 8 ) {
		// Use simple summation...
		s = 0.0;
		for ( i = 0; i < N; i++ ) {
			s = float64ToFloat32( s + absf( x[ ix ] ) );
			ix += strideX;
		}
		return s;
	}
	if ( N <= BLOCKSIZE ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		s0 = absf( x[ ix ] );
		s1 = absf( x[ ix+strideX ] );
		s2 = absf( x[ ix+(2*strideX) ] );
		s3 = absf( x[ ix+(3*strideX) ] );
		s4 = absf( x[ ix+(4*strideX) ] );
		s5 = absf( x[ ix+(5*strideX) ] );
		s6 = absf( x[ ix+(6*strideX) ] );
		s7 = absf( x[ ix+(7*strideX) ] );
		ix += 8 * strideX;

		M = N % 8;
		for ( i = 8; i < N-M; i += 8 ) {
			s0 = float64ToFloat32( s0 + absf( x[ ix ] ) );
			s1 = float64ToFloat32( s1 + absf( x[ ix+strideX ] ) );
			s2 = float64ToFloat32( s2 + absf( x[ ix+(2*strideX) ] ) );
			s3 = float64ToFloat32( s3 + absf( x[ ix+(3*strideX) ] ) );
			s4 = float64ToFloat32( s4 + absf( x[ ix+(4*strideX) ] ) );
			s5 = float64ToFloat32( s5 + absf( x[ ix+(5*strideX) ] ) );
			s6 = float64ToFloat32( s6 + absf( x[ ix+(6*strideX) ] ) );
			s7 = float64ToFloat32( s7 + absf( x[ ix+(7*strideX) ] ) );
			ix += 8 * strideX;
		}
		// Pairwise sum the accumulators:
		s = float64ToFloat32( float64ToFloat32( float64ToFloat32(s0+s1) + float64ToFloat32(s2+s3) ) + float64ToFloat32( float64ToFloat32(s4+s5) + float64ToFloat32(s6+s7) ) ); // eslint-disable-line max-len

		// Clean-up loop...
		for ( i; i < N; i++ ) {
			s = float64ToFloat32( s + absf( x[ ix ] ) );
			ix += strideX;
		}
		return s;
	}
	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	n = floor( N/2 );
	n -= n % 8;
	return float64ToFloat32( sasumpw( n, x, strideX, ix ) + sasumpw( N-n, x, strideX, ix+(n*strideX) ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = sasumpw;
