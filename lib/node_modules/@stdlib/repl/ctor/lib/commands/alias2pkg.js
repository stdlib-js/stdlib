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
var alias2pkg = require( '@stdlib/namespace/alias2pkg' );
var indexOf = require( './../index_of.js' );
var alias2string = require( './../alias_to_string.js' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `alias2pkg` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Returns the package name corresponding to a provided alias.
	*
	* @private
	* @param {*} alias - alias
	* @returns {(string|void)} package name
	*/
	function onCommand( alias ) {
		var aliases;
		var out;
		var N;
		var i;

		aliases = repl._aliases;
		N = aliases.length;

		if ( isString( alias ) ) {
			out = alias2pkg( alias );
		}
		// If provided an `alias` which is not a string or we failed to resolve a package name based on the provided string value, we try to resolve a string alias (and subsequently a corresponding package name) by searching the list of cached references of global variables/properties...
		if ( !out ) {
			i = indexOf( N/2, aliases, 2, 1, alias );
			if ( i >= 0 ) {
				out = alias2pkg( aliases[ i-1 ] );
			}
		}
		// If we failed to resolve a package name and the provided value is an object, try finding a provided value's constructor (e.g., if provided a `Uint32Array`, try finding the package name for `Uint32Array`)...
		if ( !out && typeof alias === 'object' && alias !== null && alias.constructor ) {
			i = indexOf( N/2, aliases, 2, 1, alias.constructor );
			if ( i >= 0 ) {
				out = alias2pkg( aliases[ i-1 ] );
			}
		}
		if ( out ) {
			return out;
		}
		repl._ostream.write( 'Error: unrecognized alias or alias is not associated with a package (such as a\nREPL-specific command). Alias: `'+alias2string( alias )+'`.\n' );
	}
}


// EXPORTS //

module.exports = command;
