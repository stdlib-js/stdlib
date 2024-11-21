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

var repeat = require( '@stdlib/string/repeat' );
var escapeCode = require( './ansi_escape_code.js' );
var fillLine = require( './fill_line.js' );


// VARIABLES //

var RESET = escapeCode( 'RESET' );
var ESC = RESET[ 0 ];
var END = RESET[ RESET.length-1 ]; // Note: last character should be the same for all ANSI escape codes
var DEFAULT_PATTERN = '-';
var RE_UTF16_HIGH_SURROGATE = /[\uD800-\uDBFF]/; // TODO: use stdlib package


// MAIN //

/**
* Generates a horizontal rule.
*
* @private
* @param {PositiveInteger} width - slide width
* @param {string} pattern - rule pattern
* @param {NonNegativeInteger} len - effective pattern length
* @param {string} fill - fill character
* @param {NonNegativeInteger} padding - padding
* @returns {string} horizontal rule
*/
function rule( width, pattern, len, fill, padding ) {
	var reset;
	var ANSI;
	var rlen;
	var left;
	var str;
	var rem;
	var ch;
	var N;
	var i;

	if ( pattern === '' ) {
		pattern = DEFAULT_PATTERN;
		len = pattern.length;
	}
	reset = '';

	// Determine the number of complete repeats:
	rlen = width - padding;
	N = ( rlen/len )|0; // Note: assume never greater than 2^31-1!

	// Generate an initial rule consisting of a whole number of repeats:
	str = repeat( pattern, N );

	// Handle whatever is remaining...
	rem = rlen - (len*N);
	if ( rem > 0 ) {
		for ( i = 0; i < pattern.length; i++ ) {
			ch = pattern[ i ];

			// Note: order matters for what follows...
			if ( ch === END ) {
				// Disable the `ANSI` flag upon closing an ANSI escape code...
				if ( ANSI ) {
					ANSI = false;
				}
				str += ch;
				continue;
			}
			// Ensure we retain ANSI escape codes...
			if ( ANSI ) {
				str += ch;
				continue;
			}
			// If we encounter an ASCI escape sequence, toggle the `ANSI` flag...
			if ( ch === ESC ) {
				str += ch;
				ANSI = true;
				reset += RESET; // ensure we reset styles in the event we cut the pattern string before it includes such a reset
				continue;
			}
			// Do not cut surrogate pairs...
			if ( RE_UTF16_HIGH_SURROGATE.test( ch ) ) {
				if ( rem <= 1 ) {
					str += fill;
					break;
				}
				str += ch;
				rem -= 1;
				continue;
			}
			// Pattern character...
			str += ch;
			rem -= 1;
			if ( rem === 0 ) {
				break;
			}
		}
	}
	left = (padding/2)|0; // Note: assume never greater than 2^31-1!
	return fillLine( str+reset, fill, left, padding-left );
}


// EXPORTS //

module.exports = rule;
