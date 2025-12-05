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

var NINF = require( '@stdlib/constants/float16/ninf' );
var PINF = require( '@stdlib/constants/float16/pinf' );
var exp2 = require( '@stdlib/math/base/special/exp2' );
var FLOAT16_EXPONENT_BIAS = require( '@stdlib/constants/float16/exponent-bias' );
var FLOAT16_SIGN_MASK = require( '@stdlib/constants/float16/sign-mask' );
var FLOAT16_EXPONENT_MASK = require( '@stdlib/constants/float16/exponent-mask' );
var FLOAT16_SIGNIFICAND_MASK = require( '@stdlib/constants/float16/significand-mask' );
var FLOAT16_NUM_SIGNIFICAND_BITS = require( '@stdlib/constants/float16/num-significand-bits' ); // eslint-disable-line id-length
var FLOAT16_NUM_EXPONENT_BITS = require( '@stdlib/constants/float16/num-exponent-bits' );


// VARIABLES //

var MAX_EXPONENT = exp2( FLOAT16_NUM_EXPONENT_BITS ) - 1; // Maximum exponent value
var SUBNORMAL_EXPONENT = 1 - FLOAT16_EXPONENT_BIAS;       // Minimum exponent for subnormal numbers


// MAIN //

/**
* Creates a half-precision floating-point number from an unsigned integer corresponding to an IEEE 754 binary representation.
*
* @param {uinteger16} word - unsigned integer
* @returns {number} half-precision floating-point number
*
* @example
* var word = 15411; // => 0 01111 0000110011
*
* var f16 = fromWord( word ); // when printed, implicitly promoted to float64
* // returns 1.0498046875
*/
function fromWord( word ) {
	var mantissa;
	var exponent;
	var sign;
	var f16;

	// Extract sign bit (bit 15):
	sign = ( word & FLOAT16_SIGN_MASK ) >>> 15;

	// Extract exponent (bits 14-10):
	exponent = ( word & FLOAT16_EXPONENT_MASK ) >>> FLOAT16_NUM_SIGNIFICAND_BITS; // eslint-disable-line max-len

	// Extract mantissa (bits 9-0):
	mantissa = word & FLOAT16_SIGNIFICAND_MASK;

	// Handle special cases...
	if ( exponent === MAX_EXPONENT ) {
		if ( mantissa === 0 ) {
			if ( sign === 1 ) {
				return NINF; // -Infinity
			}
			return PINF; // +Infinity
		}
		return NaN; // NaN
	}
	// Handle zero and subnormal numbers...
	if ( exponent === 0 ) {
		if ( mantissa === 0 ) {
			if ( sign === 1 ) {
				return -0.0;
			}
			return 0.0;
		}
		// Subnormal number: (-1)^sign × 2^(-14) × (0.mantissa)
		f16 = exp2( SUBNORMAL_EXPONENT ) * ( mantissa / 1024.0 );
		if ( sign ) {
			return -f16;
		}
		return f16;
	}
	// Normal number: (-1)^sign × 2^(exponent - 15) × (1.mantissa)
	f16 = exp2( exponent - FLOAT16_EXPONENT_BIAS ) * ( 1.0 + ( mantissa / 1024.0 ) ); // eslint-disable-line max-len
	if ( sign ) {
		return -f16;
	}
	return f16;
}


// EXPORTS //

module.exports = fromWord;
