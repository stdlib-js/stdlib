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
var style2ansi = require( './style_to_ansi.js' );
var escapeCode = require( './ansi_escape_code.js' );


// VARIABLES //

var RESET = escapeCode( 'RESET' );


// MAIN //

/**
* Applies ANSI styling to a line of slide text.
*
* ## Notes
*
* -   The input line object is mutated.
*
* @private
* @param {Object} line - line
* @returns {Object} styled line
*/
function ansiStyle( line ) {
	var RE_ANSI_ESCAPE;
	var reset;
	var len;

	// Create a regular expression for matching escaped characters:
	RE_ANSI_ESCAPE = /(\\.)/g;

	// Initialize a length adjustment factor:
	len = 0;

	// If we encounter ANSI style indicators, we need to "close" the ANSI escape sequence:
	reset = '';

	// Replace ANSI style indicators with their corresponding escape sequences:
	line.text = replace( line.text, RE_ANSI_ESCAPE, replacer );

	// If we applied ANSI styling, close the ANSI escape sequence:
	line.text += reset;

	// Update the effective line length:
	line.length += len;

	// Return the styled line:
	return line;

	/**
	* Callback invoked for each match.
	*
	* @private
	* @param {string} match - matched substring
	* @param {string} p1 - first string found by a parenthesized capture group
	* @returns {string} replacement string
	*/
	function replacer( match, p1 ) {
		var ch = p1[ 1 ];
		var c;

		c = style2ansi( ch );
		if ( c ) {
			reset = RESET;
			len -= 2;
			return c;
		}
		if ( ch === 's' ) {
			len -= 2;
			return RESET;
		}
		if ( ch === '\\' ) {
			len -= 1;
			return '\\\\';
		}
		return '\\\\' + ch;
	}
}


// EXPORTS //

module.exports = ansiStyle;
