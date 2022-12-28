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

var SIGN_MASK = require( '@stdlib/constants/float32/sign-mask' );
var ABS_MASK = require( '@stdlib/constants/float32/abs-mask' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var toWord = require( '@stdlib/number/float32/base/to-word' );
var fromWord = require( '@stdlib/number/float32/base/from-word' );


// MAIN //

/**
* Returns a single-precision floating-point number with the magnitude of `x` and the sign of `y`.
*
* @param {number} x - number from which to derive a magnitude
* @param {number} y - number from which to derive a sign
* @returns {number} a single-precision floating-point number
*
* @example
* var z = copysignf( -3.0, 10.0 );
* // returns 3.0
*
* @example
* var z = copysignf( 3.0, -1.0 );
* // returns -3.0
*
* @example
* var z = copysignf( 1.0, -0.0 );
* // returns -1.0
*
* @example
* var z = copysignf( -3.0, -0.0 );
* // returns -3.0
*
* @example
* var z = copysignf( -0.0, 1.0 );
* // returns 0.0
*/
function copysignf( x, y ) {
	var wx;
	var wy;

	x = float64ToFloat32( x );
	y = float64ToFloat32( y );

	// Convert `x` to an unsigned integer:
	wx = toWord( x );

	// Turn off the sign bit of `x`:
	wx &= ABS_MASK;

	// Convert `y` to an unsigned integer:
	wy = toWord( y );

	// Leave only the sign bit of `y` turned on:
	wy &= SIGN_MASK;

	// Copy the sign bit of `y` to `x`:
	wx |= wy;

	// Return a new value having the same magnitude as `x`, but with the sign of `y`:
	return fromWord( wx );
}


// EXPORTS //

module.exports = copysignf;
