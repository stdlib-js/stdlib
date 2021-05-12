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

var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var BIAS = require( '@stdlib/constants/float32/exponent-bias' );
var pow = require( '@stdlib/math/base/special/pow' );
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var toFrac = require( './tofrac.js' );


// MAIN //

/**
* Creates a single-precision floating-point number from an IEEE 754 literal bit representation.
*
* @param {BinaryString} bstr - string which is a literal bit representation
* @throws {Error} must provide a string with a length equal to `32`
* @returns {number} single-precision floating-point number
*
* @example
* var bstr = '01000000100000000000000000000000';
* var v = fromBinaryStringf( bstr );
* // returns 4.0
*
* @example
* var bstr = '01000000010010010000111111011011';
* var v = fromBinaryStringf( bstr );
* // returns ~3.14
*
* @example
* var bstr = '11111111011011000011101000110011';
* var v = fromBinaryStringf( bstr );
* // returns ~-3.14e+38
*
* @example
* var bstr = '00000000000000000000000000000000';
* var v =  fromBinaryStringf( bstr );
* // returns 0.0
*
* @example
* var bstr = '10000000000000000000000000000000';
* var v = fromBinaryStringf( bstr );
* // returns -0.0
*/
function fromBinaryStringf( bstr ) {
	var sign;
	var frac;
	var exp;

	if ( bstr.length !== 32 ) {
		throw new Error( 'invalid argument. Input string must have a length equal to 32. Value: `'+bstr+'`.' );
	}
	// Sign bit:
	sign = ( bstr[0] === '1' ) ? -1.0 : 1.0;

	// Exponent bits:
	exp = parseInt( bstr.substring(1, 9), 2 ) - BIAS;

	// Fraction bits:
	frac = toFrac( bstr.substring( 9 ) );

	// Detect `0` (all 0s) and subnormals (exponent bits are all 0, but fraction bits are not all 0s)...
	if ( exp === -BIAS ) {
		if ( frac === 0.0 ) {
			return ( sign === 1.0 ) ? 0.0 : -0.0;
		}
		exp = -(BIAS-1); // subnormals are special in that their exponent is constant
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
	return toFloat32( sign*frac*pow(2, exp) );
}


// EXPORTS //

module.exports = fromBinaryStringf;
