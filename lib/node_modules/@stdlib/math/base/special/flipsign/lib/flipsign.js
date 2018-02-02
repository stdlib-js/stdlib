/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var toWords = require( '@stdlib/number/float64/base/to-words' );
var getHighWord = require( '@stdlib/number/float64/base/get-high-word' );
var fromWords = require( '@stdlib/number/float64/base/from-words' );


// VARIABLES //

// 10000000000000000000000000000000 => 2147483648 => 0x80000000
var SIGN_MASK = 0x80000000>>>0; // asm type annotation

// High/low words workspace:
var WORDS = [ 0, 0 ]; // WARNING: not thread safe


// MAIN //

/**
* Returns a double-precision floating-point number with the magnitude of `x` and the sign of `x*y`.
*
* @param {number} x - number from which to derive a magnitude
* @param {number} y - number from which to derive a sign
* @returns {number} a double-precision floating-point number
*
* @example
* var z = flipsign( -3.14, 10.0 );
* // returns -3.14
*
* @example
* var z = flipsign( -3.14, -1.0 );
* // returns 3.14
*
* @example
* var z = flipsign( 1.0, -0.0 );
* // returns -1.0
*
* @example
* var z = flipsign( -3.14, -0.0 );
* // returns 3.14
*
* @example
* var z = flipsign( -0.0, 1.0 );
* // returns -0.0
*
* @example
* var z = flipsign( 0.0, -1.0 );
* // returns -0.0
*/
function flipsign( x, y ) {
	var hx;
	var hy;

	// Split `x` into higher and lower order words:
	toWords( WORDS, x );
	hx = WORDS[ 0 ];

	// Extract the higher order word from `y`:
	hy = getHighWord( y );

	// Leave only the sign bit of `y` turned on (if on):
	hy &= SIGN_MASK;

	// Flip the sign bit of `x` only when the sign bit of `y` is on:
	hx ^= hy; // 1^1=0 (flipped), 0^1=1 (flipped), 1^0=1 (unchanged), 0^0=0 (unchanged)

	// Return a new value having the same magnitude as `x`, but with the sign of `x*y`:
	return fromWords( hx, WORDS[ 1 ] );
}


// EXPORTS //

module.exports = flipsign;
