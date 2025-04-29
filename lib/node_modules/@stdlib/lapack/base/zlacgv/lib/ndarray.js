/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );


// MAIN //

/**
* Conjugates each element in a double-precision complex floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} zx - input array
* @param {integer} strideZX - `zx` stride length
* @param {NonNegativeInteger} offsetZX - starting `zx` index
* @returns {Complex128Array} input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* zlacgv( 3, zx, 1, 0 );
*
* var z = zx.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 1.0
*
* var im = imag( z );
* // returns -2.0
*/
function zlacgv( N, zx, strideZX, offsetZX ) {
	var zx64;
	var ix;
	var sx;
	var i;

	if ( N <= 0 ) {
		return zx;
	}
	// Reinterpret the input array as a real-valued array of interleaved real and imaginary components:
	zx64 = reinterpret( zx, 0 );

	// Adjust the strides and offset:
	sx = strideZX * 2;
	ix = ( offsetZX * 2 ) + 1; // index of the first imaginary component

	// Conjugate each element by negating the imaginary components...
	for ( i = 0; i < N; i++ ) {
		zx64[ ix ] = -zx64[ ix ];
		ix += sx;
	}
	return zx;
}


// EXPORTS //

module.exports = zlacgv;
