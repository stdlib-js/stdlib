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


// MAIN //

/**
* Copies values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.
*
* @param {PositiveInteger} N - number of values to copy
* @param {Complex64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Complex64Array} y - destination array
* @param {integer} strideY - `y` stride length
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
* ccopy( x.length, x, 1, y, 1 );
*
* var z = y.get( 0 );
* // returns <Complex64>
*
* var re = real( z );
* // returns 1.0
*
* var im = imag( z );
* // returns 2.0
*/
function ccopy( N, x, strideX, y, strideY ) {
	var viewX;
	var viewY;
	var sx;
	var sy;
	var ix;
	var iy;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	viewX = new Float32Array( x.buffer, x.byteOffset, x.length*2 );
	viewY = new Float32Array( y.buffer, y.byteOffset, y.length*2 );
	if ( strideX === 1 && strideY === 1 ) {
		for ( i = 0; i < N*2; i += 2 ) {
			viewY[ i ] = viewX[ i ];
			viewY[ i+1 ] = viewX[ i+1 ];
		}
		return y;
	}
	if ( strideX < 0 ) {
		ix = 2 * (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = 2 * (1-N) * strideY;
	} else {
		iy = 0;
	}
	sx = strideX * 2;
	sy = strideY * 2;
	for ( i = 0; i < N; i++ ) {
		viewY[ iy ] = viewX[ ix ];
		viewY[ iy+1 ] = viewX[ ix+1 ];
		ix += sx;
		iy += sy;
	}
	return y;
}


// EXPORTS //

module.exports = ccopy;
