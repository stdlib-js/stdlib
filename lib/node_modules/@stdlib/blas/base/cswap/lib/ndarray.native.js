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
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Interchanges two complex single-precision floating-point vectors.
*
* @param {PositiveInteger} N - number of values to swap
* @param {Complex64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Complex64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Complex64Array} `y`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var real = require( '@stdlib/complex/real' );
* var imag = require( '@stdlib/complex/imag' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* cswap( x.length, x, 1, 0, y, 1, 0 );
*
* var z = y.get( 0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 1.0
*
* var im = imag( z );
* // returns 2.0
*
* z = x.get( 0 );
* // returns <Complex64>
*
* re = real( z );
* // returns 7.0
*
* im = imag( z );
* // returns 8.0
*/
function cswap( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var viewX;
	var viewY;
	if ( strideX < 0 ) {
		offsetX += (N-1) * strideX;
	}
	if ( strideY < 0 ) {
		offsetY += (N-1) * strideY;
	}
	viewX = new Float32Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offsetX), 2*(x.length-offsetX) ); // eslint-disable-line max-len
	viewY = new Float32Array( y.buffer, y.byteOffset+(y.BYTES_PER_ELEMENT*offsetY), 2*(y.length-offsetY) ); // eslint-disable-line max-len
	addon( N, viewX, strideX, viewY, strideY );
	return y;
}


// EXPORTS //

module.exports = cswap;
