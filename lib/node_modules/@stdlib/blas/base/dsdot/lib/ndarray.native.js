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
var addon = require( './dsdot.native.js' );


// MAIN //

/**
* Computes the dot product of `x` and `y` with extended accumulation and result.
*
* @param {integer} N - number of values over which to compute the dot product
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {number} dot product of `x` and `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = dsdot( x.length, x, 1, 0, y, 1, 0 );
* // returns -5.0
*/
function dsdot( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var viewX;
	var viewY;
	if ( strideX < 0 ) {
		offsetX += (N-1) * strideX;
	}
	if ( strideY < 0 ) {
		offsetY += (N-1) * strideY;
	}
	viewX = new Float32Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offsetX), x.length-offsetX ); // eslint-disable-line max-len
	viewY = new Float32Array( y.buffer, y.byteOffset+(y.BYTES_PER_ELEMENT*offsetY), y.length-offsetY ); // eslint-disable-line max-len
	return addon( N, viewX, strideX, viewY, strideY );
}


// EXPORTS //

module.exports = dsdot;
