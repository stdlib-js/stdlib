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
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );


// MAIN //

/**
* Computes the maximum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Uint8Array} mask - mask array
* @param {integer} strideMask - `mask` stride length
* @returns {number} maximum value
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
*
* var v = dnanmskmax( x.length, x, 1, mask, 1 );
* // returns 2.0
*/
function dnanmskmax( N, x, strideX, mask, strideMask ) {
	var max;
	var ix;
	var im;
	var v;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideMask < 0 ) {
		im = (1-N) * strideMask;
	} else {
		im = 0;
	}
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( v === v && mask[ im ] === 0 ) {
			break;
		}
		ix += strideX;
		im += strideMask;
	}
	if ( i === N ) {
		return NaN;
	}
	max = v;
	i += 1;
	for ( i; i < N; i++ ) {
		ix += strideX;
		im += strideMask;
		if ( mask[ im ] ) {
			continue;
		}
		v = x[ ix ];
		if ( isnan( v ) ) {
			continue;
		}
		if ( v > max || ( v === max && isPositiveZero( v ) ) ) {
			max = v;
		}
	}
	return max;
}


// EXPORTS //

module.exports = dnanmskmax;
