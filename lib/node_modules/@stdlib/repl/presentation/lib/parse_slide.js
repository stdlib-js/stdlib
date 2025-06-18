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

var RE_EOL = require( '@stdlib/regexp/eol' ).REGEXP;
var trim = require( '@stdlib/string/trim' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var max = require( '@stdlib/math/base/special/max' );
var style = require( './style_line.js' );
var emoji = require( './emoji.js' );


// VARIABLES //

var FRAGMENT_SEP = '--';
var NOTES_SEP = '~~~';
var RE_CODE_DELIMITER = /^(\s*)```\s*([a-z]+)?$/;
var CODE_INDENTATION = '    ';

// Hash for normalizing code block languages:
var LANGS = {
	'js': 'javascript',
	'javascript': 'javascript'
};


// MAIN //

/**
* Parses raw slide text.
*
* @private
* @param {string} text - raw slide text
* @returns {Object} slide object
*/
function parseSlide( text ) {
	var CODE_BLOCK_INDENTATION;
	var CODE_BLOCK;
	var lines;
	var frags;
	var line;
	var lang;
	var out;
	var f;
	var m;
	var j;
	var k;

	out = {
		'raw': text,
		'fragments': [],
		'code': [],
		'notes': '',
		'length': 0,   // number of lines
		'maxLength': 0 // maximum line length
	};

	// Extract speaker notes (if any)...
	text = text.split( NOTES_SEP );
	if ( text.length > 1 ) {
		out.notes += trim( text.slice( 1 ).join( NOTES_SEP ) );
	}
	text = text[ 0 ];

	// Process slide fragments...
	frags = text.split( FRAGMENT_SEP );
	for ( j = 0; j < frags.length; j++ ) {
		lines = trim( frags[ j ] ).split( RE_EOL );
		if ( j === 0 ) {
			f = [];
		} else {
			f = out.fragments[ j-1 ].slice();
		}
		CODE_BLOCK = false;
		for ( k = 0; k < lines.length; k++ ) {
			line = lines[ k ];

			// Handle code blocks...
			m = line.match( RE_CODE_DELIMITER );
			if ( m ) {
				if ( CODE_BLOCK === false ) {
					// Starting code delimiter:
					CODE_BLOCK = true;
					CODE_BLOCK_INDENTATION = m[ 1 ];

					// Determine the code block language...
					if ( m[ 2 ] ) {
						if ( hasOwnProp( LANGS, m[ 2 ] ) ) { // eslint-disable-line max-depth
							lang = LANGS[ m[ 2 ] ];
						} else {
							lang = 'unknown';
						}
					} else {
						// By default, we assume JavaScript is the code block language:
						lang = 'javascript';
					}
					out.code.push({
						'lang': lang,
						'src': []
					});
				} else {
					// Ending code delimiter:
					CODE_BLOCK = false;
				}
				continue;
			}
			if ( CODE_BLOCK ) {
				line = line.slice( CODE_BLOCK_INDENTATION.length );
				out.code[ out.code.length-1 ].src.push( line );
				line = CODE_INDENTATION + line;

				// TODO: apply syntax highlighting
			}
			// Create a line object for tracking a line's effective length:
			line = {
				'text': line,
				'length': line.length
			};

			// Apply styling:
			line = style( line );

			// Apply emojis:
			line = emoji( line );

			// Append the line to the fragment:
			f.push( line );
		}
		// A fragment includes the slide text of all prior fragments:
		out.fragments.push( f );
	}
	out.length = f.length;

	// Determine the maximum slide text line length...
	for ( j = 0; j < f.length; j++ ) {
		out.maxLength = max( out.maxLength, f[ j ].length );
	}

	return out;
}


// EXPORTS //

module.exports = parseSlide;
