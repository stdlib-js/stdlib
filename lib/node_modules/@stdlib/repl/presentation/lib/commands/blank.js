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


// MAIN //

/**
* Returns a callback to be invoked upon calling the `blank` command.
*
* @private
* @param {Presentation} pres - presentation instance
* @returns {Function} callback
*/
function command( pres ) {
	return onCommand;

	/**
	* Prints a "blank" slide.
	*
	* @private
	*/
	function onCommand() {
		var str = repeat( pres._opts.newline, pres.height+1 );
		pres._repl._ostream.write( str );
		pres._repl.once( 'drain', onDrain );

		/**
		* Callback invoked upon a `drain` event.
		*
		* @private
		*/
		function onDrain() {
			/*
			* [ANSI escape sequences][1]:
			*
			* -   `\u001b`: ESC, the escape character
			* -   `[1T`: scroll down one line
			* -   `[1G`: move the cursor to the beginning of the line
			*
			* [1]: https://en.wikipedia.org/wiki/ANSI_escape_code
			*/
			var str = '\u001b[1T\u001b[1G';
			pres._repl._ostream.write( str );
		}
	}
}


// EXPORTS //

module.exports = command;
