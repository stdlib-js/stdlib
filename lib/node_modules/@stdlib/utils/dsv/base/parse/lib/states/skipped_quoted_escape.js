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

var debug = logger( 'state:skipped_quoted_escape' );

// Possible transition states...
var SKIPPED_QUOTED_FIELD = state2enum[ 'skipped_quoted_field' ];


// MAIN //

/**
* Returns a function for processing an escape sequence within a quoted field within a skipped line.
*
* ## Notes
*
* -   Within a quoted field, an escape sequence (only) escapes the quote sequence.
* -   If not immediately followed by a special character sequence, then the escape sequence has no special meaning and is considered a normal character sequence.
*
* @private
* @param {Parser} parser - parser instance
* @returns {Function} processing function
*/
function processor( parser ) {
	var quoteLastIndex;
	var quote;

	quoteLastIndex = parser._quoteLastIndex;
	quote = parser._quote;

	return next;

	/**
	* Processes a character.
	*
	* @private
	* @param {string} ch - character
	* @returns {void}
	*/
	function next( ch ) {
		var cursor = parser._cursor;
		var idx = parser._eidx; // position of last escape character
		var d = cursor - idx;

		debug( 'Char: %s', ch );

		/*
		* Check for a quote sequence.
		*/
		if (
			d === quoteLastIndex &&
			ch === quote[ quoteLastIndex ] &&
			parser._scan( quote, quoteLastIndex )
		) {
			debug( 'Quote.' );
			parser._push( ch )._changeState( SKIPPED_QUOTED_FIELD );
			return;
		}
		/*
		* Check for a non-special character sequence.
		*
		* ## Notes
		*
		* -   Quote sequences must immediately follow an escape sequence. At some point, we'll have processed a greater number of characters than exists in a quote sequence, meaning that a quote sequence does not immediately follow the escape sequence which led to the current state. Once this happens, we assume that the escape sequence is a normal character sequence.
		*/
		if ( d >= quoteLastIndex ) {
			// Return to normal field processing:
			debug( 'Escape sequence is not followed by a quote sequence.' );
			parser._push( ch )._changeState( SKIPPED_QUOTED_FIELD );
			return;
		}
		// Continue processing until we can transition to a new state:
		parser._push( ch );
	}
}


// EXPORTS //

module.exports = processor;
