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
* Computes the range of a double-precision floating-point strided array according to a mask.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - `x` starting index
* @param {Uint8Array} mask - mask array
* @param {integer} strideMask - `mask` stride length
* @param {NonNegativeInteger} offsetMask - `mask` starting index
* @returns {number} range
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ] );
*
* var v = dmskrange( 5, x, 2, 1, mask, 2, 1 );
* // returns 6.0
*/
function dmskrange( N, x, strideX, offsetX, mask, strideMask, offsetMask ) {
	var max;
	var min;
	var ix;
	var im;
	var v;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	ix = offsetX;
	im = offsetMask;
	for ( i = 0; i < N; i++ ) {
		if ( mask[ im ] === 0 ) {
			break;
		}
		ix += strideX;
		im += strideMask;
	}
	if ( i === N ) {
		return NaN;
	}
	min = x[ ix ];
	if ( isnan( min ) ) {
		return min;
	}
	max = min;
	i += 1;
	for ( i; i < N; i++ ) {
		ix += strideX;
		im += strideMask;
		if ( mask[ im ] ) {
			continue;
		}
		v = x[ ix ];
		if ( isnan( v ) ) {
			return v;
		}
		if ( v < min ) {
			min = v;
		} else if ( v > max ) {
			max = v;
		}
	}
	return max - min;
}


// EXPORTS //

module.exports = dmskrange;
