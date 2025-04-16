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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );


// MAIN //

/**
* Conjugates each element in a single-precision complex floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} cx - input array
* @param {integer} strideCX - `cx` stride length
* @param {NonNegativeInteger} offsetCX - starting `cx` index
* @returns {Complex64Array} input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* clacgv( 3, cx, 1, 0 );
*
* var z = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 1.0
*
* var im = imagf( z );
* // returns -2.0
*/
function clacgv( N, cx, strideCX, offsetCX ) {
	var cx32;
	var ix;
	var sx;
	var i;

	if ( N <= 0 ) {
		return cx;
	}
	// Reinterpret the input array as a real-valued array of interleaved real and imaginary components:
	cx32 = reinterpret( cx, 0 );

	// Adjust the strides and offset:
	sx = strideCX * 2;
	ix = ( offsetCX * 2 ) + 1; // index of the first imaginary component

	// Conjugate each element by negating the imaginary components...
	for ( i = 0; i < N; i++ ) {
		cx32[ ix ] = -cx32[ ix ];
		ix += sx;
	}
	return cx;
}


// EXPORTS //

module.exports = clacgv;
