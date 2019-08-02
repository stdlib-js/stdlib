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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// VARIABLES //

var debug = logger( 'repl:command:rerequire' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `rerequire` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Reloads a previously loaded module.
	*
	* @private
	* @param {string} id - module id or path
	* @returns {*} resolved module
	*/
	function onCommand( id ) {
		var err;
		if ( !isString( id ) ) {
			err = new TypeError( 'invalid argument. Must provide a string. Value: `'+id+'`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		// Resolve the module id to a path:
		id = repl._context.require.resolve( id );

		// Remove the module from the `require` cache:
		debug( 'Removing module from require cache: %s', id );
		delete repl._context.require.cache[ id ];

		// Re-require the module:
		debug( 'Re-requiring module: %s', id );
		return repl._context.require( id );
	}
}


// EXPORTS //

module.exports = command;
