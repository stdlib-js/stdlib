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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isInfinite = require( '@stdlib/math/base/assert/is-infinite' );
var normalize = require( '@stdlib/number/float64/base/normalize' );
var floatExp = require( '@stdlib/number/float64/base/exponent' );
var toWords = require( '@stdlib/number/float64/base/to-words' );
var fromWords = require( '@stdlib/number/float64/base/from-words' );


// VARIABLES //

// Exponent all 0s: 1 00000000000 11111111111111111111 => 2148532223
var CLEAR_EXP_MASK = 0x800fffff>>>0; // asm type annotation

// Exponent equal to 1022 (BIAS-1): 0 01111111110 00000000000000000000 => 1071644672
var SET_EXP_MASK = 0x3fe00000|0; // asm type annotation

// Normalization workspace:
var X = [ 0.0, 0.0 ]; // WARNING: not thread safe

// High/low words workspace:
var WORDS = [ 0, 0 ]; // WARNING: not thread safe


// MAIN //

/**
* Splits a double-precision floating-point number into a normalized fraction and an integer power of two.
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} x - input value
* @returns {(Array|TypedArray|Object)} output array
*
* @example
* var out = frexp( new Array( 2 ), 4.0 );
* // returns [ 0.5, 3 ]
*
* @example
* var out = frexp( new Array( 2 ), 0.0 );
* // returns [ 0.0, 0 ]
*
* @example
* var out = frexp( new Array( 2 ), -0.0 );
* // returns [ -0.0, 0 ]
*
* @example
* var out = frexp( new Array( 2 ), NaN );
* // returns [ NaN, 0 ]
*
* @example
* var out = frexp( new Array( 2 ), Infinity );
* // returns [ Infinity , 0 ]
*
* @example
* var out = frexp( new Array( 2 ), -Infinity );
* // returns [ -Infinity , 0 ]
*/
function frexp( out, x ) {
	var high;
	var exp;
	if (
		x === 0.0 || // handles -0
		isnan( x ) ||
		isInfinite( x )
	) {
		out[ 0 ] = x;
		out[ 1 ] = 0;
		return out;
	}
	// If `x` is subnormal, normalize it...
	normalize( X, x );

	// Extract the exponent from `x` and add the normalization exponent:
	exp = floatExp( X[0] ) + X[ 1 ] + 1;

	// Break `x` into two unsigned 32-bit integers (higher and lower order words):
	toWords( WORDS, X[ 0 ] );
	high = WORDS[ 0 ];

	// Clear the exponent bits within the higher order word:
	high &= CLEAR_EXP_MASK;

	// Set the exponent bits within the higher order word to BIAS-1 (1023-1=1022):
	high |= SET_EXP_MASK;

	// Create a new floating-point number:
	x = fromWords( high, WORDS[ 1 ] );

	out[ 0 ] = x;
	out[ 1 ] = exp;
	return out;
}


// EXPORTS //

module.exports = frexp;
