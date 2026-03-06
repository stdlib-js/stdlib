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
var state2enum = require( './state2enum.js' );


// VARIABLES //

var debug = logger( 'state:invalid_quote_end' );

// Possible transition states...
var ERROR = state2enum[ 'error' ];
var FIELD = state2enum[ 'field' ];
var INIT = state2enum[ 'init' ];


// FUNCTIONS //

/**
* Removes whitespace following a closing quote sequence.
*
* @private
* @param {Parser} parser - parser instance
* @param {NonNegativeInteger} state - next state
* @returns {void}
*/
function removeWhitespace( parser, state ) {
	// Check whether the character sequence consists only of whitespace:
	if ( parser._isWhitespace( parser._qidx+1, parser._cursor ) ) {
		// Rewind the cursor and resume normal processing:
		parser._raiseWarning( 'INVALID_CLOSING_QUOTE' )
			._rewind( parser._cursor-parser._qidx )
			._changeState( state );
		return;
	}
	// Non-whitespace characters came after a closing quote, leaving us in an ambiguous state: was the closing quote intended and we're missing a delimiter/newline, or was the closing quote a mistake and should have been escaped? We don't know, and so we must raise an exception:
	debug( 'Error.' );
	parser._setErrorState( 'INVALID_CLOSING_QUOTE' )._changeState( ERROR );
}


// MAIN //

/**
* Returns a function for processing field characters after an ending quote sequence.
*
* @private
* @param {Parser} parser - parser instance
* @returns {Function} processing function
*/
function processor( parser ) {
	var delimiterLastIndex;
	var newlineLastIndex;
	var delimiter;
	var newline;

	delimiterLastIndex = parser._delimiterLastIndex;
	delimiter = parser._delimiter;

	newlineLastIndex = parser._newlineLastIndex;
	newline = parser._newline;

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
		* Check for a field delimiter.
		*/
		if (
			ch === delimiter[ delimiterLastIndex ] &&
			parser._scan( delimiter, delimiterLastIndex )
		) {
			// Rewind the cursor to point to the last character before the delimiter character sequence:
			debug( 'Delimiter.' );
			parser._rewind( delimiterLastIndex );

			// Remove whitespace and resume processing:
			removeWhitespace( parser, FIELD );
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
			parser._rewind( newlineLastIndex );

			// Remove whitespace and resume processing:
			removeWhitespace( parser, INIT );
			return;
		}
		// Continue processing until we can transition to a new state:
		parser._push( ch );
	}
}


// EXPORTS //

module.exports = processor;
