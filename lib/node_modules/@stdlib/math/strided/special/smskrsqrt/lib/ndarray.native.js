/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var addon = require( './smskrsqrt.native.js' );


// MAIN //

/**
* Computes the reciprocal square root for each element in a single-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} sx - `x` stride length
* @param {NonNegativeInteger} ox - starting `x` index
* @param {Uint8Array} m - mask array
* @param {integer} sm - `m` stride length
* @param {NonNegativeInteger} om - starting `m` index
* @param {Float32Array} y - destination array
* @param {integer} sy - `y` stride length
* @param {NonNegativeInteger} oy - starting `y` index
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Float32Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* smskrsqrt( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
* // y => <Float32Array>[ Infinity, 0.5, 0.0, ~0.289, 0.0 ]
*/
function smskrsqrt( N, x, sx, ox, m, sm, om, y, sy, oy ) {
	var viewX;
	var viewM;
	var viewY;
	if ( sx < 0 ) {
		ox += (N-1) * sx;
	}
	if ( sm < 0 ) {
		om += (N-1) * sm;
	}
	if ( sy < 0 ) {
		oy += (N-1) * sy;
	}
	viewX = new Float32Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*ox), x.length-ox ); // eslint-disable-line max-len
	viewM = new Uint8Array( m.buffer, m.byteOffset+(m.BYTES_PER_ELEMENT*om), m.length-om ); // eslint-disable-line max-len
	viewY = new Float32Array( y.buffer, y.byteOffset+(y.BYTES_PER_ELEMENT*oy), y.length-oy ); // eslint-disable-line max-len
	addon( N, viewX, sx, viewM, sm, viewY, sy );
	return y;
}


// EXPORTS //

module.exports = smskrsqrt;
