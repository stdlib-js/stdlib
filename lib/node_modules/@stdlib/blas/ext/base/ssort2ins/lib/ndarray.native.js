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
var addon = require( './ssort2ins.native.js' );


// MAIN //

/**
* Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` index increment
* @param {NonNegativeInteger} offsetX - `x` starting index
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` index increment
* @param {NonNegativeInteger} offsetY - `y` starting index
* @returns {Float32Array} `x`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
*
* ssort2ins( x.length, 1.0, x, 1, 0, y, 1, 0 );
*
* console.log( x );
* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
*/
function ssort2ins( N, order, x, strideX, offsetX, y, strideY, offsetY ) {
	var viewX;
	var viewY;
	var flg;

	flg = 1.0;
	if ( strideX < 0 ) {
		flg *= -1.0; // reversing order
		order *= -1.0;
		strideX *= -1;
		offsetX -= (N-1) * strideX;
	}
	if ( strideY < 0 ) {
		offsetY += (N-1) * strideY;
	}
	viewX = new Float32Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offsetX), x.length-offsetX ); // eslint-disable-line max-len
	viewY = new Float32Array( y.buffer, y.byteOffset+(y.BYTES_PER_ELEMENT*offsetY), y.length-offsetY ); // eslint-disable-line max-len
	addon( N, order, viewX, strideX, viewY, flg*strideY );
	return x;
}


// EXPORTS //

module.exports = ssort2ins;
