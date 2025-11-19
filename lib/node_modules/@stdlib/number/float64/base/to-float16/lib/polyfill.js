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

var isFiniteNumber = require( '@stdlib/math/base/assert/is-finite' );
var FLOAT16_EPSILON = require( '@stdlib/constants/float16/eps' );
var FLOAT16_MAX = require( '@stdlib/constants/float16/max' );
var FLOAT16_MIN = require( '@stdlib/constants/float16/smallest-normal' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var abs = require( '@stdlib/math/base/special/abs' );


// VARIABLES //

var INVERSE_EPSILON = 1.0 / EPS;


// FUNCTIONS //

/**
* Performs banker's rounding (round-half-to-even) via floating-point arithmetic.
*
* @private
* @param {number} n - input value
* @returns {number} rounded value
*/
function roundTiesToEven( n ) {
	return ( n + INVERSE_EPSILON ) - INVERSE_EPSILON;
}


// MAIN //

/**
* Converts a double-precision floating-point number to the nearest half-precision floating-point number.
*
* @param {number} x - double-precision floating-point number
* @returns {number} nearest half-precision floating-point number
*
* @example
* var y = float64ToFloat16( 1.337 );
* // returns 1.3369140625
*/
function float64ToFloat16( x ) {
	var res;
	var mod;
	var a;
	var s;

	if ( x === 0.0 || isNaN( x ) || !isFiniteNumber( x ) ) {
		return x;
	}
	if ( x < 0.0 ) {
		s = -1.0;
	} else {
		s = 1.0;
	}
	mod = abs( x );
	if ( mod < FLOAT16_MIN ) {
		return s * roundTiesToEven( mod/FLOAT16_MIN/FLOAT16_EPSILON ) * FLOAT16_MIN * FLOAT16_EPSILON; // eslint-disable-line max-len
	}
	// Leverage Veltkamp's algorithm for splitting a number into two numbers to generate an approximation to `x` which fits in a smaller number of bits:
	a = ( 1 + ( FLOAT16_EPSILON/EPS ) ) * mod;
	res = a - ( a - mod );
	if ( res > FLOAT16_MAX || isNaN( res ) ) {
		return s * PINF;
	}
	return s * res;
}


// EXPORTS //

module.exports = float64ToFloat16;
