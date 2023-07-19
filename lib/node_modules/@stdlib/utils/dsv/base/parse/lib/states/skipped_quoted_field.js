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

var debug = logger( 'state:skipped_quoted_field' );

// Possible transition states...
var SKIPPED_QUOTE_END = state2enum[ 'skipped_quote_end' ];
var SKIPPED_QUOTED_ESCAPE = state2enum[ 'skipped_quoted_escape' ];


// MAIN //

/**
* Returns a function for processing a quoted field within a skipped line.
*
* @private
* @param {Parser} parser - parser instance
* @returns {Function} processing function
*/
function processor( parser ) {
	var escapeLastIndex;
	var quoteLastIndex;
	var doublequote;
	var escape;
	var quote;

	escapeLastIndex = parser._escapeLastIndex;
	escape = parser._escape;

	quoteLastIndex = parser._quoteLastIndex;
	quote = parser._quote;

	doublequote = parser._doublequote;

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
		* Check for an escape character sequence.
		*/
		if (
			doublequote === false &&                // double quoting is disabled
			ch === escape[ escapeLastIndex ] &&     // we have a potential match
			parser._scan( escape, escapeLastIndex ) // we found a match
		) {
			debug( 'Escape.' );
			parser._push( ch )._changeState( SKIPPED_QUOTED_ESCAPE );
			return;
		}
		/*
		* Check for an ending quote character sequence.
		*/
		if (
			ch === quote[ quoteLastIndex ] &&     // we have a potential match
			parser._scan( quote, quoteLastIndex ) // we found a match
		) {
			debug( 'Quote.' );
			parser._push( ch )._changeState( SKIPPED_QUOTE_END );
			return;
		}
		// Continue processing until we can transition to a new state:
		parser._push( ch );
	}
}


// EXPORTS //

module.exports = processor;
