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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var SIGN_MASK = require( '@stdlib/constants/float32/sign-mask' );
var toWord = require( '@stdlib/number/float32/base/to-word' );
var fromWord = require( '@stdlib/number/float32/base/from-word' );


// MAIN //

/**
* Returns a single-precision floating-point number with the magnitude of `x` and the sign of `x*y`.
*
* @param {number} x - number from which to derive a magnitude
* @param {number} y - number from which to derive a sign
* @returns {number} a single-precision floating-point number
*
* @example
* var z = flipsignf( -3.0, 10.0 );
* // returns -3.0
*
* @example
* var z = flipsignf( -3.0, -1.0 );
* // returns 3.0
*
* @example
* var z = flipsignf( 1.0, -0.0 );
* // returns -1.0
*
* @example
* var z = flipsignf( -3.0, -0.0 );
* // returns 3.0
*
* @example
* var z = flipsignf( -0.0, 1.0 );
* // returns -0.0
*
* @example
* var z = flipsignf( 0.0, -1.0 );
* // returns -0.0
*/
function flipsignf( x, y ) {
	var wx;
	var wy;

	x = float64ToFloat32( x );
	y = float64ToFloat32( y );

	// Convert `x` and `y` to unsigned integers:
	wx = toWord( x );
	wy = toWord( y );

	// Leave only the sign bit of `y` turned on (if on):
	wy &= SIGN_MASK;

	// Flip the sign bit of `x` only when the sign bit of `y` is on:
	wx ^= wy; // 1^1=0 (flipped), 0^1=1 (flipped), 1^0=1 (unchanged), 0^0=0 (unchanged)

	// Return a new value having the same magnitude as `x`, but with the sign of `x*y`:
	return fromWord( wx );
}


// EXPORTS //

module.exports = flipsignf;
