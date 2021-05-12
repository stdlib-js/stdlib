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
var pow = require( '@stdlib/math/base/special/pow' );
var toDouble = require( './todouble.js' );


// MAIN //

/**
* Creates a double-precision floating-point number from a literal bit representation.
*
* @param {BinaryString} bstr - string which is a literal bit representation
* @throws {Error} must provide a string with a length equal to `64`
* @returns {number} double
*
* @example
* var bstr = '0100000000010000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns 4.0
*
* @example
* var bstr = '0100000000001001001000011111101101010100010001000010110100011000';
* var val = fromBinaryString( bstr );
* // returns 3.141592653589793
*
* @example
* var bstr = '1111111111100001110011001111001110000101111010111100100010100000';
* var val = fromBinaryString( bstr );
* // returns -1.0e308
*
* @example
* var bstr = '1000000000000000000000000000000000000000000000000001100011010011';
* var val = fromBinaryString( bstr );
* // returns -3.14e-320
*
* @example
* var bstr = '0000000000000000000000000000000000000000000000000000000000000001';
* var val = fromBinaryString( bstr );
* // returns 5.0e-324
*
* @example
* var bstr = '0000000000000000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns 0.0
*
* @example
* var bstr = '1000000000000000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns -0.0
*
* @example
* var bstr = '0111111111111000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns NaN
*
* @example
* var bstr = '0111111111110000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns Infinity
*
* @example
* var bstr = '1111111111110000000000000000000000000000000000000000000000000000';
* var val = fromBinaryString( bstr );
* // returns -Infinity
*/
function fromBinaryString( bstr ) {
	var sign;
	var frac;
	var exp;

	if ( bstr.length !== 64 ) {
		throw new Error( 'invalid argument. Input string must have a length equal to 64. Value: `'+bstr+'`.' );
	}
	// Sign bit:
	sign = ( bstr[0] === '1' ) ? -1.0 : 1.0;

	// Exponent bits:
	exp = parseInt( bstr.substring(1, 12), 2 ) - BIAS;

	// Fraction bits:
	frac = toDouble( bstr.substring( 12 ) );

	// Detect `0` (all 0s) and subnormals (exponent bits are all 0, but fraction bits are not all 0s)...
	if ( exp === -BIAS ) {
		if ( frac === 0.0 ) {
			return ( sign === 1.0 ) ? 0.0 : -0.0;
		}
		exp = -1022; // (1-BIAS); subnormals are special
	}
	// Detect `+-inf` (exponent bits are all 1 and fraction is 0) and `NaN` (exponent bits are all 1 and fraction is not 0)...
	else if ( exp === BIAS+1 ) {
		if ( frac === 0.0 ) {
			return ( sign === 1.0 ) ? PINF : NINF;
		}
		return NaN;
	}
	// Normal numbers...
	else {
		// Account for hidden/implicit bit (2^0):
		frac += 1.0;
	}
	return sign * frac * pow( 2.0, exp );
}


// EXPORTS //

module.exports = fromBinaryString;
