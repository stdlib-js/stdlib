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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var alias2related = require( '@stdlib/namespace/alias2related' );
var indexOf = require( './../index_of.js' );
var alias2string = require( './../alias_to_string.js' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `alias2related` command.
*
* @private
* @param {REPL} repl - REPL instance
* @param {ArrayArray} cmds - REPL command list
* @returns {Function} callback
*/
function command( repl, cmds ) {
	return onCommand;

	/**
	* Returns aliases related to a provided alias.
	*
	* @private
	* @param {*} alias - alias
	* @returns {(StringArray|void)} related packages as a newline-delimited list
	*/
	function onCommand( alias ) {
		var aliases;
		var out;
		var N;
		var i;

		aliases = repl._aliases;
		N = aliases.length;

		if ( isString( alias ) ) {
			out = alias2related( alias );
		}
		// If unable to resolve related aliases, check if we were provided a reference to a REPL-specific command...
		if ( !out ) {
			for ( i = 0; i < cmds.length; i++ ) {
				if ( cmds[ i ][ 1 ] === alias ) {
					out = alias2related( cmds[ i ][ 0 ] );
				}
			}
		}
		// If provided an `alias` which is not a string or we failed to resolve related aliases based on the provided string value, we try to resolve a string alias (and subsequently related aliases) by searching the list of cached references of global variables/properties...
		if ( !out ) {
			i = indexOf( N/2, aliases, 2, 1, alias );
			if ( i >= 0 ) {
				out = alias2related( aliases[ i-1 ] );
			}
		}
		// If we failed to resolve related aliases and the provided value is an object, try finding a provided value's constructor (e.g., if provided a `Uint32Array`, try finding related aliases for `Uint32Array`)...
		if ( !out && typeof alias === 'object' && alias !== null && alias.constructor ) {
			i = indexOf( N/2, aliases, 2, 1, alias.constructor );
			if ( i >= 0 ) {
				out = alias2related( aliases[ i-1 ] );
			}
		}
		if ( out === void 0 || out === null ) {
			repl._ostream.write( 'Error: unrecognized alias. Alias: `'+alias2string( alias )+'`.\n' );
			return;
		}
		if ( out.length ) {
			return out;
		}
	}
}


// EXPORTS //

module.exports = command;
