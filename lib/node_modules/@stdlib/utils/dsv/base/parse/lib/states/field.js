/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/* eslint-disable no-underscore-dangle, max-len */

'use strict';

// MODULES //

var logger = require( 'debug' );
var state2enum = require( './state2enum.js' );


// VARIABLES //

var debug = logger( 'state:field' );

// Possible transition states...
var ESCAPE = state2enum[ 'escape' ];
var FIELD = state2enum[ 'field' ];
var INIT = state2enum[ 'init' ];
var QUOTED_FIELD = state2enum[ 'quoted_field' ];


// MAIN //

/**
* Returns a function for processing a field.
*
* @private
* @param {Parser} parser - parser instance
* @returns {Function} processing function
*/
function processor( parser ) {
	var delimiterLastIndex;
	var newlineLastIndex;
	var escapeLastIndex;
	var quoteLastIndex;
	var delimiter;
	var newline;
	var quoting;
	var escape;
	var strict;
	var quote;

	escapeLastIndex = parser._escapeLastIndex;
	escape = parser._escape;

	quoteLastIndex = parser._quoteLastIndex;
	quote = parser._quote;

	delimiterLastIndex = parser._delimiterLastIndex;
	delimiter = parser._delimiter;

	newlineLastIndex = parser._newlineLastIndex;
	newline = parser._newline;

	quoting = parser._quoting;
	strict = parser._strict;

	return next;

	/**
	* Processes a character.
	*
	* @private
	* @param {string} ch - character
	* @returns {void}
	*/
	function next( ch ) {
		var idx = parser._cursor - parser._cidx + 1;

		debug( 'Char: %s', ch );

		/*
		* Check for an escape character sequence.
		*
		* ## Notes
		*
		* -   An escape sequence escapes the delimiter, newline, and escape sequences in **non-quoted** fields.
		* -   When `doublequote` is `false`, the escape sequence escapes quote sequences within **quoted** fields.
		* -   In strict mode, if not immediately followed by a special character sequence, then the parser raises an exception.
		* -   In non-strict mode, if not immediately followed by a special character sequence, then the escape sequence has no special meaning.
		*/
		if (
			ch === escape[ escapeLastIndex ] &&     // we have a potential match
			parser._scan( escape, escapeLastIndex ) // we found a match
		) {
			debug( 'Escape.' );
			parser._push( ch )._changeState( ESCAPE );
			return;
		}
		/*
		* Check for a quote character sequence.
		*
		* ## Notes
		*
		* -   When `quoting` is `true`, in order for a field to be quoted, the quote sequence must be the first character(s) of the field.
		* -   When `quoting` is `false`, quote sequences do **not** have any special meaning, and we process quote sequences as normal field text.
		*/
		if (
			idx-quoteLastIndex === 0 &&           // only search the first character(s) of the field
			ch === quote[ quoteLastIndex ] &&     // we have a potential match
			parser._scan( quote, quoteLastIndex ) // we found a match
		) {
			if ( quoting ) {
				// Rewind the cursor to point to the last character before the quote character sequence:
				debug( 'Quote.' );
				parser._rewind( quoteLastIndex )._changeState( QUOTED_FIELD );
				return;
			}
			// Continue processing until we can transition to a new state:
			parser._push( ch );
			return;
		}
		/**
		* Check for a quote character sequence (non-strict mode).
		*
		* ## Notes
		*
		* -   In non-strict mode, a quote character sequence is allowed to start after whitespace (e.g., `a,  "b",  c`).
		* -   When `quoting` is `true`, in order for a field to be quoted, the quote sequence must be the first character(s) of the field.
		* -   When `quoting` is `false`, quote sequences do **not** have any special meaning, and we process quote sequences as normal field text.
		*/
		if (
			strict === false &&                   // non-strict mode
			ch === quote[ quoteLastIndex ] &&     // we have a potential match
			parser._scan( quote, quoteLastIndex ) // we found a match
		) {
			if ( quoting && parser._isWhitespace( parser._cidx, parser._cursor-quoteLastIndex ) ) {
				// Rewind the cursor to point to the last character of the preceding field:
				debug( 'Quote.' );
				parser._raiseWarning( 'INVALID_OPENING_QUOTE' )
					._rewind( idx )
					._changeState( QUOTED_FIELD );
				return;
			}
			// Continue processing until we can transition to a new state:
			parser._push( ch );
			return;
		}
		/*
		* Check for a field delimiter.
		*/
		if (
			ch === delimiter[ delimiterLastIndex ] &&
			parser._scan( delimiter, delimiterLastIndex )
		) {
			// Rewind the cursor to point to the last character before the delimiter character sequence:
			debug( 'Delimiter.' );
			parser._rewind( delimiterLastIndex )._changeState( FIELD );
			return;
		}
		/*
		* Check for a row separator.
		*/
		if (
			ch === newline[ newlineLastIndex ] &&
			parser._scan( newline, newlineLastIndex )
		) {
			// Rewind the cursor to point to the last character before the newline character sequence:
			debug( 'Newline.' );
			parser._rewind( newlineLastIndex )._changeState( INIT );
			return;
		}
		// Continue processing until we can transition to a new state:
		parser._push( ch );
	}
}


// EXPORTS //

module.exports = processor;
