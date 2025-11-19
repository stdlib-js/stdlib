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
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} out - output array object
* @param {Collection} out.data - output array data
* @param {Array<Function>} out.accessors - array element accessors
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
* var out = toAccessorArray( [ 0.0, 0 ] );
*
* var v = gnannsumkbn( 5, arraylike2object( x ), 2, 1, arraylike2object( out ), 1, 0 );
* // returns {...}
*/
function gnannsumkbn( N, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var obuf;
	var xbuf;
	var xget;
	var oset;
	var sum;
	var ix;
	var v;
	var t;
	var c;
	var n;
	var i;

	// Cache reference to array data:
	xbuf = x.data;
	obuf = out.data;

	// Cache reference to the element accessors:
	xget = x.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	sum = 0.0;
	ix = offsetX;
	if ( strideX === 0 ) {
		v = xget( xbuf, ix );
		if ( isnan( v ) ) {
			oset( obuf, offsetOut, sum );
			oset( obuf, offsetOut+strideOut, 0 );
			return out;
		}
		oset( obuf, offsetOut, v * N );
		oset( obuf, offsetOut+strideOut, N );
		return out;
	}
	c = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = xget( xbuf, ix );
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
	oset( obuf, offsetOut, sum + c );
	oset( obuf, offsetOut+strideOut, n );
	return out;
}


// EXPORTS //

module.exports = gnannsumkbn;
