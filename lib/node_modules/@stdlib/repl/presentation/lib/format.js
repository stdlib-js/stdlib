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

var startsWith = require( '@stdlib/string/starts-with' );
var align = require( './align_line.js' );
var rule = require( './horizontal_rule.js' );


// MAIN //

/**
* Formats lines of slide text.
*
* @private
* @param {PositiveInteger} width - slide width
* @param {ObjectArray} lines - lines of slide text
* @param {string} fill - fill character
* @param {NonNegativeInteger} padding - alignment padding
* @returns {ObjectArray} formatted lines
*/
function format( width, lines, fill, padding ) {
	var txt;
	var len;
	var i;

	// Format each slide line...
	lines = lines.slice();
	for ( i = 0; i < lines.length; i++ ) {
		txt = lines[ i ].text;
		len = lines[ i ].length;

		// NOTE: order matters (check first for full screen horizontal rule before regular horizontal rule)...
		if ( startsWith( txt, '//' ) ) {
			txt = rule( width, txt.substring( 2 ), len-2, fill, 0 );
		} else if ( startsWith( txt, '/' ) ) {
			txt = rule( width, txt.substring( 1 ), len-1, fill, padding );
		} else {
			txt = align( width, txt, len, fill, padding );
		}
		lines[ i ] = {
			'text': txt,
			'length': width // effective line length after alignment
		};
	}
	return lines;
}


// EXPORTS //

module.exports = format;
