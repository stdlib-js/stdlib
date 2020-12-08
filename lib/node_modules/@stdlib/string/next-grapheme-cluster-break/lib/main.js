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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var codePointAt = require( '@stdlib/string/code-point-at' );
var hasUTF16SurrogatePairAt = require( '@stdlib/assert/has-utf16-surrogate-pair-at' );
var breakType = require( './break_type.js' );
var graphemeBreakProperty = require( './grapheme_break_property.js' );
var emojiProperty = require( './emoji_property.js' );


// MAIN //

/**
* Returns the next extended grapheme cluster break in a string after a specified position.
*
* @param {string} str - input string
* @param {integer} [fromIndex=0] - position
* @throws {TypeError} first argument must be a string primitive
* @throws {TypeError} second argument must be an integer
* @returns {NonNegativeInteger} next grapheme break position
*
* @example
* var out = nextGraphemeClusterBreak( 'last man standing', 4 );
* // returns 5
*
* @example
* var out = nextGraphemeClusterBreak( 'presidential election', 8 );
* // returns 9
*
* @example
* var out = nextGraphemeClusterBreak( 'अनुच्छेद', 1 );
* // returns 3
*
* @example
* var out = nextGraphemeClusterBreak( '🌷' );
* // returns -1
*/
function nextGraphemeClusterBreak( str, fromIndex ) {
	var breaks;
	var emoji;
	var len;
	var idx;
	var cp;
	var i;

	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. First argument must be a string. Value: `' + str + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isInteger( fromIndex ) ) {
			throw new TypeError( 'invalid argument. Second argument must be an integer. Value: `' + fromIndex + '`.' );
		}
		idx = fromIndex;
	} else {
		idx = 0;
	}
	len = str.length;
	if ( idx < 0 ) {
		idx += len;
		if ( idx < 0 ) {
			idx = 0;
		}
	}
	if ( len === 0 || idx >= len ) {
		return -1;
	}
	// Initialize caches for storing grapheme break and emoji properties:
	breaks = [];
	emoji = [];

	// Get the code point for the starting index:
	cp = codePointAt( str, idx );

	// Get the corresponding grapheme break and emoji properties:
	breaks.push( graphemeBreakProperty( cp ) );
	emoji.push( emojiProperty( cp ) );

	// Begin searching for the next grapheme cluster break...
	for ( i = idx+1; i < len; i++ ) {
		// If the current character is part of a surrogate pair, move along...
		if ( hasUTF16SurrogatePairAt( str, i-1 ) ) {
			continue;
		}
		// Get the next code point:
		cp = codePointAt( str, i );

		// Get the corresponding grapheme break and emoji properties:
		breaks.push( graphemeBreakProperty( cp ) );
		emoji.push( emojiProperty( cp ) );

		// Determine if we've encountered a grapheme cluster break...
		if ( breakType( breaks, emoji ) > 0 ) {
			// We've found a break!
			return i;
		}
	}
	// Unable to find a grapheme cluster break:
	return -1;
}


// EXPORTS //

module.exports = nextGraphemeClusterBreak;
