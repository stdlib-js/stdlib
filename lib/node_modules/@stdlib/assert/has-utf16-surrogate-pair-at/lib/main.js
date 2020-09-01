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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// VARIABLES //

// Range for a high surrogate
var OxD800 = 0xD800|0; // 55296
var OxDBFF = 0xDBFF|0; // 56319

// Range for a low surrogate
var OxDC00 = 0xDC00|0; // 56320
var OxDFFF = 0xDFFF|0; // 57343


// MAIN //

/**
* Tests if a position in a string marks the start of a UTF-16 surrogate pair.
*
* @private
* @param {string} str - input string
* @param {NonNegativeInteger} pos - position in string
* @throws {TypeError} first argument must be a string primitive
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {RangeError} position must be a valid index in string
* @returns {boolean} boolean indicating whether the string has a surrogate pair at a position
*
* @example
* var out = hasUTF16SurrogatePairAt( '🌷', 0 );
* // returns true
*
* @example
* var out = hasUTF16SurrogatePairAt( '🌷', 1 );
* // returns false
*/
function hasUTF16SurrogatePairAt( str, pos ) {
	var ch1;
	var ch2;
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. Must provide a string. Value: `' + str + '`.' );
	}
	if ( !isNonNegativeInteger( pos ) ) {
		throw new TypeError( 'invalid argument. Must provide a valid position (nonnegative integer). Value: `' + pos + '`.' );
	}
	if ( pos >= str.length ) {
		throw new RangeError( 'invalid argument. Must provide a valid position (within string bounds). Value: `' + pos + '`.' );
	}
	ch1 = str.charCodeAt( pos );
	ch2 = str.charCodeAt( pos + 1 );
	return ch1 >= OxD800 && ch1 <= OxDBFF && ch2 >= OxDC00 && ch2 <= OxDFFF;
}


// EXPORTS //

module.exports = hasUTF16SurrogatePairAt;
