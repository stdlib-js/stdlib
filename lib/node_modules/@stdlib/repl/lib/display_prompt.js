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

/* eslint-disable no-underscore-dangle */

'use strict';

// MODULES //

var repeat = require( '@stdlib/string/repeat' );
var leadingWhitespaceRegExp = require( './regexp_leading_whitespace.js' );


// MAIN //

/**
* Displays a command prompt.
*
* @private
* @param {REPL} repl - REPL instance
* @param {boolean} [preserveCursor=false] - boolean indicating whether to preserve the cursor position
* @returns {void}
*/
function displayPrompt( repl, preserveCursor ) {
	var len;
	var re;
	var ws;

	// Avoid displaying a prompt if the REPL is currently in paging mode...
	if ( repl._ostream.isPaging || repl._isCapturingKeybinding ) {
		return;
	}
	len = repl._cmd.length;
	if ( len === 0 ) {
		if ( repl._padding && repl._count >= 0 ) {
			repl._ostream.write( repeat( '\n', repl._padding ) );
		}
		repl._rli.setPrompt( repl._prompt() );
		repl._rli.prompt( preserveCursor );
		return;
	}
	repl._rli.setPrompt( '' );
	repl._rli.prompt( preserveCursor );

	// Prepend the leading whitespace of the previous line:
	re = leadingWhitespaceRegExp();
	ws = repl._cmd[ len-1 ].match( re );
	if ( ws ) {
		repl._rli.write( ws[ 0 ] );
	}
}


// EXPORTS //

module.exports = displayPrompt;
