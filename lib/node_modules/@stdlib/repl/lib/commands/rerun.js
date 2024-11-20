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

'use strict';

/* eslint-disable no-underscore-dangle */

// MODULES //

var logger = require( 'debug' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isRegExp = require( '@stdlib/assert/is-regexp' );
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' ).primitives;
var format = require( '@stdlib/string/format' );
var displayPrompt = require( './../display_prompt.js' );


// VARIABLES //

var debug = logger( 'repl:command:rerun' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `rerun` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Reruns previous commands.
	*
	* @private
	* @param {(string|RegExp|NonNegativeInteger|NonNegativeIntegerArray)} [arg=1] - filter
	* @returns {void}
	*/
	function onCommand( arg ) {
		var nargs;
		var len;
		var FLG;
		var err;

		len = repl._history.length;
		if ( len === 0 ) {
			repl._ostream.write( 'History is empty. No commands to run.\n' );
			return;
		}
		nargs = arguments.length;
		if ( nargs > 0 ) {
			if ( isString( arg ) ) {
				FLG = 1;
			} else if ( isNonNegativeInteger( arg ) ) {
				FLG = 2;
			} else if ( isRegExp( arg ) ) {
				FLG = 3;
			} else if ( isNonNegativeIntegerArray( arg ) ) {
				FLG = 4;
			} else {
				err = new TypeError( format( 'invalid argument. Must provide a string, regular expression, nonnegative integer, or an array of nonnegative integers. Value: `%s`.', arg ) );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
		}
		// Why defer? In order to allow the `rerun()` command to finish before actually evaluating the commands to rerun, thus ensuring that commands are run as if a user manually enters them...
		repl.once( 'drain', onFinish );

		/**
		* Callback invoked once the `rerun()` command finishes.
		*
		* @private
		* @param {string} cmd - command
		* @param {boolean} success - boolean indicating whether the command successfully executed
		* @returns {void}
		*/
		function onFinish() {
			var n;
			var i;
			var j;

			if ( nargs === 0 ) {
				// Evaluate the last command...
				repl._rli.write( repl._history[ len-2 ]+'\n' );
				return;
			}
			if ( FLG === 1 ) {
				// TODO: subsequence string parsing (use an iterator!!!)
				return;
			}
			if ( FLG === 2 ) {
				i = len - (3*arg);
				if ( i < 0 ) {
					n = len / 3;
					i = 0;
				} else {
					n = arg;
				}
				// Evaluate the most recent `n` commands...
				i += 1;
				j = 0;
				for ( ; i < len; i += 3 ) {
					repl._rli.write( repl._history[ i ]+'\n' );
					if ( j < n-1 ) {
						displayPrompt( repl, false );
					}
					j += 1;
				}
				return;
			}
			if ( FLG === 3 ) {
				// Scan the history for the most recent command matching the regular expression...
				for ( i = len-2; i >= 0; i -= 3 ) {
					if ( arg.test( repl._history[ i ] ) ) {
						repl._rli.write( repl._history[ i ]+'\n' );
						return;
					}
				}
				return;
			}
			// Case: FLG === 4
			n = arg.length;
			for ( i = 0; i < n; i++ ) {
				// Scan the history for the command identifier...
				for ( j = 0; j < len; j += 3 ) {
					if ( arg[ i ] === repl._history[ j ] ) {
						repl._rli.write( repl._history[ j+1 ]+'\n' );
						if ( i < n-1 ) {
							displayPrompt( repl, false );
						}
						break;
					}
				}
			}
		}
	}
}


// EXPORTS //

module.exports = command;
