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

var debug = logger( 'state:skipped_quote_end' );

// Possible transition states...
var INIT = state2enum[ 'init' ];
var SKIPPED_FIELD = state2enum[ 'skipped_field' ];
var SKIPPED_INVALID_QUOTE_END = state2enum[ 'skipped_invalid_quote_end' ];
var SKIPPED_QUOTED_FIELD = state2enum[ 'skipped_quoted_field' ];


// MAIN //

/**
* Returns a function for processing an ending quote sequence within a skipped line.
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
	var quote;
	var max;

	delimiterLastIndex = parser._delimiterLastIndex;
	delimiter = parser._delimiter;

	newlineLastIndex = parser._newlineLastIndex;
	newline = parser._newline;

	quoteLastIndex = parser._quoteLastIndex;
	quote = parser._quote;

	doublequote = parser._doublequote;

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
			debug( 'Double quote.' );
			parser._push( ch )._changeState( SKIPPED_QUOTED_FIELD );
			return;
		}
		/*
		* Check for a field delimiter.
		*/
		if (
			ch === delimiter[ delimiterLastIndex ] &&
			parser._scan( delimiter, delimiterLastIndex )
		) {
			debug( 'Delimiter.' );
			parser._push( ch )._changeState( SKIPPED_FIELD );
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
		* -   Field separators, row separators, and escaped quote sequences must immediately follow a potential closing quote sequence. At some point, we'll have processed a greater number of characters than exists in any of the special character sequences, meaning that none of those sequences immediately follow the quote sequence which led to the current state. Once this happens, we in an invalid state.
		*/
		if ( parser._cursor-parser._qidx >= max ) {
			debug( 'Invalid closing quote.' );
			parser._push( ch )._changeState( SKIPPED_INVALID_QUOTE_END );
			return;
		}
		// Continue processing until we can transition to a new state:
		parser._push( ch );
	}
}


// EXPORTS //

module.exports = processor;
