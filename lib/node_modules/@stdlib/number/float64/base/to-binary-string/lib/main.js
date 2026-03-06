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

var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var BIAS = require( '@stdlib/constants/float64/exponent-bias' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var abs = require( '@stdlib/math/base/special/abs' );
var floor = require( '@stdlib/math/base/special/floor' );
var rpad = require( '@stdlib/string/right-pad' );
var lpad = require( '@stdlib/string/left-pad' );
var repeat = require( '@stdlib/string/repeat' );
var div2 = require( './div2.js' );
var mult2 = require( './mult2.js' );


// VARIABLES //

// TODO: consider moving to external constants
var NUM_EXPONENT_BITS = 11;
var NUM_SIGNIFICAND_BITS = 52;


// MAIN //

/**
* Returns a string giving the literal bit representation of a double-precision floating-point number.
*
* @param {number} x - input value
* @returns {BinaryString} bit representation
*
* @example
* var str = toBinaryString( 4.0 );
* // returns '0100000000010000000000000000000000000000000000000000000000000000'
*
* @example
* var str = toBinaryString( 3.141592653589793 );
* // returns '0100000000001001001000011111101101010100010001000010110100011000'
*
* @example
* var str = toBinaryString( -1.0e308 );
* // returns '1111111111100001110011001111001110000101111010111100100010100000'
*
* @example
* var str = toBinaryString( -3.14e-320 );
* // returns '1000000000000000000000000000000000000000000000000001100011010011'
*
* @example
* var str = toBinaryString( 5.0e-324 );
* // returns '0000000000000000000000000000000000000000000000000000000000000001'
*
* @example
* var str = toBinaryString( 0.0 );
* // returns '0000000000000000000000000000000000000000000000000000000000000000'
*
* @example
* var str = toBinaryString( -0.0 );
* // returns '1000000000000000000000000000000000000000000000000000000000000000'
*
* @example
* var str = toBinaryString( NaN );
* // returns '0111111111111000000000000000000000000000000000000000000000000000'
*
* @example
* var str = toBinaryString( Infinity );
* // returns '0111111111110000000000000000000000000000000000000000000000000000'
*
* @example
* var str = toBinaryString( -Infinity );
* // returns '1111111111110000000000000000000000000000000000000000000000000000'
*/
function toBinaryString( x ) {
	var nbits;
	var sign;
	var str;
	var exp;
	var n;
	var f;
	var i;

	// Check for a negative value or negative zero...
	if ( x < 0.0 || isNegativeZero( x ) ) {
		sign = '1';
	} else {
		sign = '0';
	}
	// Special case: +-infinity
	if ( x === PINF || x === NINF ) {
		// Based on IEEE 754-1985...
		exp = repeat( '1', NUM_EXPONENT_BITS ); // all 1s
		str = repeat( '0', NUM_SIGNIFICAND_BITS ); // all 0s
		return sign + exp + str;
	}
	// Special case: NaN
	if ( isnan( x ) ) {
		// Based on IEEE 754-1985...
		exp = repeat( '1', NUM_EXPONENT_BITS ); // all 1s
		str = '1' + repeat( '0', NUM_SIGNIFICAND_BITS-1 ); // can't be all 0s
		return sign + exp + str;
	}
	// Special case: +-0
	if ( x === 0 ) {
		// Based on IEEE 754-1985...
		exp = repeat( '0', NUM_EXPONENT_BITS ); // all 0s
		str = repeat( '0', NUM_SIGNIFICAND_BITS ); // all 0s
		return sign + exp + str;
	}
	x = abs( x );

	// Isolate the integer part (digits before the decimal):
	n = floor( x );

	// Isolate the fractional part (digits after the decimal):
	f = x - n;

	// Convert the integer and fractional parts to bit strings:
	n = div2( n );
	f = mult2( f );

	// Determine the exponent needed to normalize the integer+fractional parts...
	if ( n ) {
		// Move the decimal `d` digits to the left:
		exp = n.length - 1;
	} else {
		// Find the first '1' bit...
		for ( i = 0; i < f.length; i++ ) {
			if ( f[ i ] === '1' ) {
				nbits = i + 1;
				break;
			}
		}
		// Move the decimal `d` digits to the right:
		exp = -nbits;
	}
	// Normalize the combined integer+fractional string...
	str = n + f;
	if ( exp < 0 ) {
		// Handle subnormals...
		if ( exp <= -BIAS ) {
			// Cap the number of bits removed:
			nbits = BIAS - 1;
		}
		// Remove all leading zeros and the first '1' for normal values, and, for subnormals, remove at most BIAS-1 leading bits:
		str = str.substring( nbits );
	} else {
		// Remove the leading '1' (implicit/hidden bit):
		str = str.substring( 1 );
	}
	// Convert the exponent to a bit string:
	exp = div2( exp + BIAS );
	exp = lpad( exp, NUM_EXPONENT_BITS, '0' );

	// Fill in any trailing zeros and ensure we have only 52 fraction bits:
	str = rpad( str, NUM_SIGNIFICAND_BITS, '0' ).substring( 0, NUM_SIGNIFICAND_BITS );

	// Return a bit representation:
	return sign + exp + str;
}


// EXPORTS //

module.exports = toBinaryString;
