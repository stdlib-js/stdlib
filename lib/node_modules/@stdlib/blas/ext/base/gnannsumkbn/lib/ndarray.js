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
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses an "improved Kahan–Babuška algorithm", as described by Neumaier (1974).
*
* ## References
*
* -   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106](https://doi.org/10.1002/zamm.19740540106).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NumericArray} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {NumericArray} output array
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
* var out = [ 0.0, 0 ];
*
* var v = gnannsumkbn( 5, x, 2, 1, out, 1, 0 );
* // returns [ 5.0, 4 ]
*/
function gnannsumkbn( N, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var sum;
	var ix;
	var v;
	var t;
	var c;
	var n;
	var i;

	sum = 0.0;
	if ( N <= 0 ) {
		out[ offsetOut ] = sum;
		out[ offsetOut+strideOut ] = 0;
		return out;
	}
	ix = offsetX;
	if ( strideX === 0 ) {
		if ( isnan( x[ ix ] ) ) {
			out[ offsetOut ] = sum;
			out[ offsetOut+strideOut ] = 0;
			return out;
		}
		out[ offsetOut ] = x[ ix ] * N;
		out[ offsetOut+strideOut ] = N;
		return out;
	}
	c = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( isnan( v ) === false ) {
			t = sum + v;
			if ( abs( sum ) >= abs( v ) ) {
				c += (sum-t) + v;
			} else {
				c += (v-t) + sum;
			}
			sum = t;
			n += 1;
		}
		ix += strideX;
	}
	out[ offsetOut ] = sum + c;
	out[ offsetOut+strideOut ] = n;
	return out;
}


// EXPORTS //

module.exports = gnannsumkbn;
