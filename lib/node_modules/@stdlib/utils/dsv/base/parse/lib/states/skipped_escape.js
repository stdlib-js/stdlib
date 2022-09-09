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

var debug = logger( 'state:skipped_escape' );

// Possible transition states...
var SKIPPED_FIELD = state2enum[ 'skipped_field' ];


// MAIN //

/**
* Returns a function for processing an escape sequence within a skipped line.
*
* ## Notes
*
* -   An escape sequence escapes the delimiter, newline, and escape sequences in **non-quoted** fields.
* -   An escape sequence escapes comment and skip sequences in **non-quoted** fields when an escape sequence occurs at the beginning of a record.
* -   If not immediately followed by a special character sequence, then the escape sequence has no special meaning and is considered a normal character sequence.
*
* @private
* @param {Parser} parser - parser instance
* @returns {Function} processing function
*/
function processor( parser ) {
	var delimiterLastIndex;
	var newlineLastIndex;
	var commentLastIndex;
	var escapeLastIndex;
	var skipLastIndex;
	var delimiter;
	var newline;
	var comment;
	var escape;
	var skip;
	var max;

	delimiterLastIndex = parser._delimiterLastIndex;
	delimiter = parser._delimiter;

	newlineLastIndex = parser._newlineLastIndex;
	newline = parser._newline;

	commentLastIndex = parser._commentLastIndex;
	comment = parser._comment;

	skipLastIndex = parser._skipLastIndex;
	skip = parser._skip;

	escapeLastIndex = parser._escapeLastIndex;
	escape = parser._escape;

	max = maximum( maximum( delimiterLastIndex, newlineLastIndex ), escapeLastIndex ); // eslint-disable-line max-len

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
		* Check for a field delimiter.
		*/
		if (
			d === delimiterLastIndex &&
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
			d === newlineLastIndex &&
			ch === newline[ newlineLastIndex ] &&
			parser._scan( newline, newlineLastIndex )
		) {
			debug( 'Newline.' );
			parser._push( ch )._changeState( SKIPPED_FIELD );
			return;
		}
		/*
		* Check for an escape sequence.
		*/
		if (
			d === escapeLastIndex &&
			ch === escape[ escapeLastIndex ] &&
			parser._scan( escape, escapeLastIndex )
		) {
			debug( 'Escape.' );
			parser._push( ch )._changeState( SKIPPED_FIELD );
			return;
		}
		/*
		* Check for a comment sequence.
		*
		* ## Notes
		*
		* -   Comment sequences only have special meaning when appearing at the beginning of a row.
		*/
		if (
			comment &&                                 // user specified a comment character sequence, so should check for comments
			cursor-commentLastIndex === 0 &&           // only search the first character(s) of the row
			ch === comment[ commentLastIndex ] &&      // we have a potential match
			parser._scan( comment, commentLastIndex )  // we found a match
		) {
			debug( 'Comment.' );
			parser._push( ch )._changeState( SKIPPED_FIELD );
			return;
		}
		/*
		* Check for a skip sequence.
		*
		* ## Notes
		*
		* -   Skip sequences only have special meaning when appearing at the beginning of a row.
		*/
		if (
			skip &&                                 // user specified a skip character sequence, so should check for a skipped line
			cursor-skipLastIndex === 0 &&           // only search the first character(s) of the row
			ch === skip[ skipLastIndex ] &&         // we have a potential match
			parser._scan( skip, skipLastIndex )     // we found a match
		) {
			debug( 'Skip.' );
			parser._push( ch )._changeState( SKIPPED_FIELD );
			return;
		}
		/*
		* Check for a non-special character sequence.
		*
		* ## Notes
		*
		* -   Field separators, row separators, and escaped sequences must immediately follow an escape sequence. At some point, we'll have processed a greater number of characters than exists in any of the special character sequences, meaning that none of those sequences immediately follow the escape sequence which led to the current state. Once this happens, we assume that the escape sequence is a normal character sequence.
		*/
		if ( d >= max ) {
			debug( 'Normal character sequence.' );
			parser._push( ch )._changeState( SKIPPED_FIELD );
			return;
		}
		// Continue processing until we can transition to a new state:
		parser._push( ch );
	}
}


// EXPORTS //

module.exports = processor;
