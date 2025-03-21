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

var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var addon = require( './snanmskmin.native.js' );


// MAIN //

/**
* Computes the minimum value of a single-precision floating-point strided array according to a mask, ignoring `NaN` values.
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
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, -5.0, -6.0 ] );
* var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ] );
* var N = floor( x.length / 2 );
*
* var v = snanmskmin( N, x, 2, 1, mask, 2, 1 );
* // returns -2.0
*/
function snanmskmin( N, x, strideX, offsetX, mask, strideMask, offsetMask ) {
	var viewX;
	var viewM;
	if ( strideX < 0 ) {
		offsetX += (N-1) * strideX;
	}
	if ( strideMask < 0 ) {
		offsetMask += (N-1) * strideMask;
	}
	viewX = new Float32Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offsetX), x.length-offsetX ); // eslint-disable-line max-len
	viewM = new Uint8Array( mask.buffer, mask.byteOffset+(mask.BYTES_PER_ELEMENT*offsetMask), mask.length-offsetMask ); // eslint-disable-line max-len
	return addon( N, viewX, strideX, viewM, strideMask );
}


// EXPORTS //

module.exports = snanmskmin;
