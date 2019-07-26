/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var replace = require( '@stdlib/string/replace' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var table = require( '@stdlib/datasets/emoji-code-picto' );


// VARIABLES //

var TABLE = table();


// MAIN //

/**
* Replaces emoji codes with rendered emoji in a line of slide text.
*
* ## Notes
*
* -   The input line object is mutated.
*
* @private
* @param {Object} line - line
* @returns {Object} rendered line
*/
function emoji( line ) {
	var RE_EMOJI_CODE;
	var len;

	// Create a regular expression for matching emoji codes (code schema: `:<short_name>[::<modifier>[, <modifier>[, ...]]]`):
	RE_EMOJI_CODE = /:([\w+\-]+)(?::{2}([\w+\-,\s]+))?:/g; // eslint-disable-line no-useless-escape

	// Initialize a length adjustment factor:
	len = 0;

	// Replace emoji codes with rendered emojis:
	line.text = replace( line.text, RE_EMOJI_CODE, replacer );

	// Update the effective line length:
	line.length += len;

	// Return the rendered line:
	return line;

	/**
	* Callback invoked for each match.
	*
	* @private
	* @param {string} match - matched substring
	* @param {string} p1 - first string found by a parenthesized capture group
	* @param {(string|void)} p2 - second string found by a parenthesized capture group
	* @returns {string} replacement string
	*/
	function replacer( match, p1, p2 ) {
		var code;
		var out;

		// Reconstitute the emoji code in order to normalize the code string:
		code = ':' + p1 + ':';
		if ( p2 ) {
			p2 = p2.split( /,\s*/ ).join( ', ' ); // normalize any modifiers by ensuring consistent modifier spacing
			code += ':' + p2 + ':';
		}
		if ( hasOwnProp( TABLE, code ) ) {
			out = TABLE[ code ];

			// Note: we limit ourselves to emojis that are two columns wide--emoji being considered wide characters--hence, minus two. Depending on Unicode support, other emoji may not render as a single glyph.
			if ( out.length === 2 ) {
				len -= match.length - 2;
				return out;
			}
		}
		// If unable to convert an emoji code to a rendered emoji, return the matched substring unchanged:
		return match;
	}
}


// EXPORTS //

module.exports = emoji;
