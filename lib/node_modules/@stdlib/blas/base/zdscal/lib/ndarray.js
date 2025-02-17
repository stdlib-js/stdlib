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
var scale = require( '@stdlib/complex/float64/base/scale' ).strided;


// MAIN //

/**
* Scales a double-precision complex floating-point vector by a double-precision floating-point constant.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} da - constant
* @param {Complex128Array} zx - input array
* @param {integer} strideZX - `zx` stride length
* @param {NonNegativeInteger} offsetZX - starting `zx` index
* @returns {Complex128Array} input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* zdscal( 3, 2.0, zx, 1, 0 );
*
* var z = zx.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 2.0
*
* var im = imag( z );
* // returns 4.0
*/
function zdscal( N, da, zx, strideZX, offsetZX ) {
	var zx64;
	var ix;
	var sx;
	var i;

	if ( N <= 0 || da === 1.0 ) {
		return zx;
	}
	// Reinterpret the input array as a real-valued array of interleaved real and imaginary components:
	zx64 = reinterpret( zx, 0 );

	// Adjust the stride and offset accordingly:
	ix = offsetZX * 2;
	sx = strideZX * 2;

	for ( i = 0; i < N; i++ ) {
		scale( da, zx64, 1, ix, zx64, 1, ix );
		ix += sx;
	}
	return zx;
}


// EXPORTS //

module.exports = zdscal;
