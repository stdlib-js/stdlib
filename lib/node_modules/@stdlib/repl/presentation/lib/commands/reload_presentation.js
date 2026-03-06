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

var logger = require( 'debug' );


// VARIABLES //

var debug = logger( 'repl:presentation:command:reload_presentation' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `reloadPresentation` command.
*
* @private
* @param {Presentation} pres - presentation instance
* @returns {Function} callback
*/
function command( pres ) {
	return onCommand;

	/**
	* Reloads a presentation.
	*
	* @private
	*/
	function onCommand() {
		pres._repl.once( 'drain', onDrain );

		/**
		* Callback invoked upon a `drain` event.
		*
		* @private
		*/
		function onDrain() {
			var pos;
			try {
				pres.reload().show();
			} catch ( error ) {
				debug( 'Error: %s', error.message );

				// Infer the current cursor column position based on the length of the command prompt string:
				pos = pres._repl._prompt().length; // FIXME: how to address multi-column characters?

				// FIXME: handle non-TTY output streams!

				/*
				* Print the error message on the previous line and generate the expected display prompt and cursor position.
				*
				* [ANSI escape sequences][1]:
				*
				* -   `\u001b`: ESC, the escape character
				* -   `[1A`: move cursor up one line
				* -   `[nD`: move cursor back (to the left) `n` columns (cells)
				* -   `[0J`: clear the screen beginning from the current cursor position to the end of the screen
				*
				* [1]: https://en.wikipedia.org/wiki/ANSI_escape_code
				*/
				pres._repl._ostream.write( '\u001b[1A\u001b['+pos+'DError: '+error.message+'\u001b[0J\n' );

				// Show a new display prompt:
				pres._repl._displayPrompt();
			}
		}
	}
}


// EXPORTS //

module.exports = command;
