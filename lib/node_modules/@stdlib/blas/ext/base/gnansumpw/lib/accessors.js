/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Computes the sum of strided array elements, ignoring `NaN` values and using pairwise summation.
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
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @returns {number} sum
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = gnansumpw( 4, arraylike2object( x ), 2, 1 );
* // returns 5.0
*/
function gnansumpw( N, x, strideX, offsetX ) {
	var xbuf;
	var xget;
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
	var v;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache reference to the element accessors:
	xget = x.accessors[ 0 ];

	ix = offsetX;
	if ( strideX === 0 ) {
		v = xget( xbuf, ix );
		if ( isnan( v ) ) {
			return 0.0;
		}
		return N * v;
	}
	if ( N < 8 ) {
		// Use simple summation...
		s = 0.0;
		for ( i = 0; i < N; i++ ) {
			v = xget( xbuf, ix );
			if ( isnan( v ) === false ) {
				s += v;
			}
			ix += strideX;
		}
		return s;
	}
	if ( N <= BLOCKSIZE ) {
		// Sum a block with 8 accumulators (by loop unrolling, we lower the effective blocksize to 16)...
		v = xget( xbuf, ix );
		s0 = ( isnan( v ) ) ? 0.0 : v;
		ix += strideX;
		v = xget( xbuf, ix );
		s1 = ( isnan( v ) ) ? 0.0 : v;
		ix += strideX;
		v = xget( xbuf, ix );
		s2 = ( isnan( v ) ) ? 0.0 : v;
		ix += strideX;
		v = xget( xbuf, ix );
		s3 = ( isnan( v ) ) ? 0.0 : v;
		ix += strideX;
		v = xget( xbuf, ix );
		s4 = ( isnan( v ) ) ? 0.0 : v;
		ix += strideX;
		v = xget( xbuf, ix );
		s5 = ( isnan( v ) ) ? 0.0 : v;
		ix += strideX;
		v = xget( xbuf, ix );
		s6 = ( isnan( v ) ) ? 0.0 : v;
		ix += strideX;
		v = xget( xbuf, ix );
		s7 = ( isnan( v ) ) ? 0.0 : v;
		ix += strideX;

		M = N % 8;
		for ( i = 8; i < N-M; i += 8 ) {
			v = xget( xbuf, ix );
			s0 += ( isnan( v ) ) ? 0.0 : v;
			ix += strideX;
			v = xget( xbuf, ix );
			s1 += ( isnan( v ) ) ? 0.0 : v;
			ix += strideX;
			v = xget( xbuf, ix );
			s2 += ( isnan( v ) ) ? 0.0 : v;
			ix += strideX;
			v = xget( xbuf, ix );
			s3 += ( isnan( v ) ) ? 0.0 : v;
			ix += strideX;
			v = xget( xbuf, ix );
			s4 += ( isnan( v ) ) ? 0.0 : v;
			ix += strideX;
			v = xget( xbuf, ix );
			s5 += ( isnan( v ) ) ? 0.0 : v;
			ix += strideX;
			v = xget( xbuf, ix );
			s6 += ( isnan( v ) ) ? 0.0 : v;
			ix += strideX;
			v = xget( xbuf, ix );
			s7 += ( isnan( v ) ) ? 0.0 : v;
			ix += strideX;
		}
		// Pairwise sum the accumulators:
		s = ( (s0+s1) + (s2+s3) ) + ( (s4+s5) + (s6+s7) );

		// Clean-up loop...
		for ( i; i < N; i++ ) {
			v = xget( xbuf, ix );
			if ( isnan( v ) === false ) {
				s += v;
			}
			ix += strideX;
		}
		return s;
	}
	// Recurse by dividing by two, but avoiding non-multiples of unroll factor...
	n = floor( N/2 );
	n -= n % 8;
	return gnansumpw( n, x, strideX, ix ) + gnansumpw( N-n, x, strideX, ix+(n*strideX) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gnansumpw;
