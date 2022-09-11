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

/* eslint-disable no-underscore-dangle */

'use strict';

// MODULES //

var logger = require( 'debug' );
var maximum = require( './max.js' );
var state2enum = require( './state2enum.js' );


// VARIABLES //

var debug = logger( 'state:quote_end' );

// Possible transition states...
var ERROR = state2enum[ 'error' ];
var FIELD = state2enum[ 'field' ];
var INIT = state2enum[ 'init' ];
var INVALID_QUOTE_END = state2enum[ 'invalid_quote_end' ];
var QUOTED_FIELD = state2enum[ 'quoted_field' ];


// MAIN //

/**
* Returns a function for processing an ending quote sequence.
*
* @private
* @param {Parser} parser - parser instance
* @returns {Function} processing function
*/
function processor( parser ) {
	var delimiterLastIndex;
	var newlineLastIndex;
	var quoteLastIndex;
	var doublequote;
	var delimiter;
	var newline;
	var strict;
	var quote;
	var max;

	delimiterLastIndex = parser._delimiterLastIndex;
	delimiter = parser._delimiter;

	newlineLastIndex = parser._newlineLastIndex;
	newline = parser._newline;

	quoteLastIndex = parser._quoteLastIndex;
	quote = parser._quote;

	doublequote = parser._doublequote;
	strict = parser._strict;

	max = maximum( maximum( delimiterLastIndex, newlineLastIndex ), quoteLastIndex ); // eslint-disable-line max-len

	return next;

	/**
	* Processes a character.
	*
	* @private
	* @param {string} ch - character
	* @returns {void}
	*/
	function next( ch ) {
		debug( 'Char: %s', ch );

		/*
		* Check for a quote character sequence.
		*
		* ## Notes
		*
		* -   When `doublequote` is `true`, quote character sequences are escaped by a preceding quote character sequence.
		* -   When `doublequote` is `false`, quote character sequences must be explicitly escaped using an escape character sequence.
		*/
		if (
			doublequote &&
			ch === quote[ quoteLastIndex ] &&
			parser._scan( quote, quoteLastIndex )
		) {
			// Keep the escaped quote character sequence and transition back to a quoted field state:
			debug( 'Double quote.' );
			parser._push( ch )._changeState( QUOTED_FIELD );
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
		/*
		* Check for a non-special character sequence.
		*
		* ## Notes
		*
		* -   Field separators, row separators, and escaped quote sequences must immediately follow a potential closing quote sequence. At some point, we'll have processed a greater number of characters than exists in any of the special character sequences, meaning that none of those sequences immediately follow the quote sequence which led to the current state. Once this happens, we're in an invalid state and must raise an exception, as not clear how the parser should interpret the preceding values (e.g., was the preceding quote supposed to be escaped? was the preceding quote a mistake and should be ignored? are we missing a delimiter or newline sequence? etc.). In strict mode, we raise an exception. In non-strict mode, we only raise an exception if non-whitespace characters follow the potential closing quote sequence.
		*/
		if ( parser._cursor-parser._qidx >= max ) {
			if ( strict ) {
				debug( 'Error.' );
				parser._setErrorState( 'INVALID_CLOSING_QUOTE' )._changeState( ERROR );
				return;
			}
			debug( 'Invalid closing quote.' );
			parser._push( ch )._changeState( INVALID_QUOTE_END );
			return;
		}
		// Continue processing until we can transition to a new state:
		parser._push( ch );
	}
}


// EXPORTS //

module.exports = processor;
