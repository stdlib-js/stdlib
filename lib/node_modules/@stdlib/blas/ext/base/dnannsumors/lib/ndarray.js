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


// MAIN //

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - `x` starting index
* @param {Float64Array} out - output array
* @param {integer} strideOut - `out` stride length
* @param {NonNegativeInteger} offsetOut - `out` starting index
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
* var out = new Float64Array( 2 );
*
* var v = dnannsumors( 5, x, 2, 1, out, 1, 0 );
* // returns <Float64Array>[ 5.0, 4 ]
*/
function dnannsumors( N, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var sum;
	var ix;
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
	n = 0;
	for ( i = 0; i < N; i++ ) {
		if ( isnan( x[ ix ] ) === false ) {
			sum += x[ ix ];
			n += 1;
		}
		ix += strideX;
	}
	out[ offsetOut ] = sum;
	out[ offsetOut+strideOut ] = n;
	return out;
}


// EXPORTS //

module.exports = dnannsumors;
