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

var Float64Array = require( '@stdlib/array/float64' );
var addon = require( './dsort2hp.native.js' );


// MAIN //

/**
* Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array using heapsort.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {Float64Array} x - first input array
* @param {integer} strideX - `x` index increment
* @param {NonNegativeInteger} offsetX - `x` starting index
* @param {Float64Array} y - second input array
* @param {integer} strideY - `y` index increment
* @param {NonNegativeInteger} offsetY - `y` starting index
* @returns {Float64Array} `x`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
* var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
*
* dsort2hp( x.length, 1.0, x, 1, 0, y, 1, 0 );
*
* console.log( x );
* // => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
*/
function dsort2hp( N, order, x, strideX, offsetX, y, strideY, offsetY ) {
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
	viewX = new Float64Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offsetX), x.length-offsetX ); // eslint-disable-line max-len
	viewY = new Float64Array( y.buffer, y.byteOffset+(y.BYTES_PER_ELEMENT*offsetY), y.length-offsetY ); // eslint-disable-line max-len
	addon( N, order, viewX, strideX, viewY, flg*strideY );
	return x;
}


// EXPORTS //

module.exports = dsort2hp;
