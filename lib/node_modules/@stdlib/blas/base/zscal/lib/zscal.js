/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var cmul = require( '@stdlib/complex/float64/base/mul' );


// MAIN //

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128} za - constant
* @param {Complex128Array} zx - input array
* @param {integer} strideX - `zx` stride length
* @returns {Complex128Array} input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var za = new Complex128( 2.0, 2.0 );
*
* zscal( 3, za, zx, 1 );
*
* var z = zx.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns -2.0
*
* var im = imag( z );
* // returns 6.0
*/
function zscal( N, za, zx, strideX ) {
	var ix;
	var i;

	if ( N <= 0 || strideX <= 0 ) {
		return zx;
	}
	if ( strideX === 1 ) {
		// Code for stride equal to `1`...
		for ( i = 0; i < N; i++ ) {
			zx.set( cmul( za, zx.get( i ) ), i );
		}
		return zx;
	}
	// Code for stride not equal to `1`...
	ix = 0;
	for ( i = 0; i < N; i++ ) {
		zx.set( cmul( za, zx.get( ix ) ), ix );
		ix += strideX;
	}
	return zx;
}


// EXPORTS //

module.exports = zscal;
