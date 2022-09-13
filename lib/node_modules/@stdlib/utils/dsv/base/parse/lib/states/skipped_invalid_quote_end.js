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

var debug = logger( 'state:skipped_invalid_quote_end' );

// Possible transition states...
var SKIPPED_FIELD = state2enum[ 'skipped_field' ];
var INIT = state2enum[ 'init' ];


// MAIN //

/**
* Returns a function for processing field characters after an ending quote sequence within a skipped line.
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
		// Continue processing until we can transition to a new state:
		parser._push( ch );
	}
}


// EXPORTS //

module.exports = processor;
