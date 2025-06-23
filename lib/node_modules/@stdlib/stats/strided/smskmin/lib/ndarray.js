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

var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );


// MAIN //

/**
* Computes the minimum value of a single-precision floating-point strided array according to a mask.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - `x` starting index
* @param {Uint8Array} mask - mask array
* @param {integer} strideMask - `mask` stride length
* @param {NonNegativeInteger} offsetMask - `mask` starting index
* @returns {number} minimum value
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, -5.0, -6.0 ] );
* var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ] );
*
* var v = smskmin( 5, x, 2, 1, mask, 2, 1 );
* // returns -2.0
*/
function smskmin( N, x, strideX, offsetX, mask, strideMask, offsetMask ) {
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
	if ( isnanf( min ) ) {
		return min;
	}
	i += 1;
	for ( i; i < N; i++ ) {
		ix += strideX;
		im += strideMask;
		if ( mask[ im ] ) {
			continue;
		}
		v = x[ ix ];
		if ( isnanf( v ) ) {
			return v;
		}
		if ( v < min || ( v === min && isNegativeZerof( v ) ) ) {
			min = v;
		}
	}
	return min;
}


// EXPORTS //

module.exports = smskmin;
