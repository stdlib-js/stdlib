/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// VARIABLES //

// Factors for converting individual surrogates
var Ox10000 = 0x10000|0; // 65536
var Ox400 = 0x400|0; // 1024

// Range for a high surrogate
var OxD800 = 0xD800|0; // 55296
var OxDBFF = 0xDBFF|0; // 56319

// Range for a low surrogate
var OxDC00 = 0xDC00|0; // 56320
var OxDFFF = 0xDFFF|0; // 57343


// MAIN //

/**
* Returns a Unicode code point from a string at a specified position.
*
* ## Notes
*
* -   UTF-16 encoding uses one 16-bit unit for non-surrogates (U+0000 to U+D7FF and U+E000 to U+FFFF).
* -   UTF-16 encoding uses two 16-bit units (surrogate pairs) for U+10000 to U+10FFFF and encodes U+10000-U+10FFFF by subtracting 0x10000 from the code point, expressing the result as a 20-bit binary, and splitting the 20 bits of 0x0-0xFFFFF as upper and lower 10-bits. The respective 10-bits are stored in two 16-bit words: a high and a low surrogate.
*
*
* @param {string} str - input string
* @param {NonNegativeInteger} idx - position
* @param {boolean} [backward=false] - backward iteration for low surrogates
* @throws {TypeError} first argument must be a string primitive
* @throws {TypeError} second argument must be a number primitive having a nonnegative integer
* @throws {TypeError} third argument must be a boolean primitive
* @throws {RangeError} position must be a valid index in string
* @returns {NonNegativeInteger} code point
*
* @example
* var out = codePointAt( 'last man standing', 4 );
* // returns 32
*
* @example
* var out = codePointAt( 'presidential election', 8, true );
* // returns 116
*
* @example
* var out = codePointAt( 'अनुच्छेद', 2 );
* // returns 2369
*
* @example
* var out = codePointAt( '🌷', 1, true );
* // returns 127799
*/
function codePointAt( str, idx, backward ) {
	var code;
	var FLG;
	var low;
	var hi;

	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. Must provide a string. Value: `' + str + '`.' );
	}
	if ( !isNonNegativeInteger( idx ) ) {
		throw new TypeError( 'invalid argument. Must provide a valid position (nonnegative integer). Value: `' + idx + '`.' );
	}
	if ( idx >= str.length ) {
		throw new RangeError( 'invalid argument. Must provide a valid position (within string bounds). Value: `' + idx + '`.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isBoolean( backward ) ) {
			throw new TypeError( 'invalid argument. Third argument must be a boolean. Value: `' + backward + '`.' );
		}
		FLG = backward;
	} else {
		FLG = false;
	}
	code = str.charCodeAt( idx );

	// High surrogate
	if ( code >= OxD800 && code <= OxDBFF && idx < str.length - 1 ) {
		hi = code;
		low = str.charCodeAt( idx+1 );
		if ( OxDC00 <= low && low <= OxDFFF ) {
			return ( ( hi - OxD800 ) * Ox400 ) + ( low - OxDC00 ) + Ox10000;
		}
		return hi;
	}
	// Low surrogate - support only if backward iteration is desired
	if ( FLG ) {
		if ( code >= OxDC00 && code <= OxDFFF && idx >= 1 ) {
			hi = str.charCodeAt( idx-1 );
			low = code;
			if ( OxD800 <= hi && hi <= OxDBFF ) {
				return ( ( hi - OxD800 ) * Ox400 ) + ( low - OxDC00 ) + Ox10000;
			}
			return low;
		}
	}
	return code;
}


// EXPORTS //

module.exports = codePointAt;
