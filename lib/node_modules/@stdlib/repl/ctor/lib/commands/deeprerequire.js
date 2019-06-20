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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var Stack = require( '@stdlib/utils/stack' );
var objectKeys = require( '@stdlib/utils/keys' );


// VARIABLES //

var debug = logger( 'repl:command:deeprerequire' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `deeprerequire` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Reloads a previously loaded module and all its associated module dependencies.
	*
	* @private
	* @param {string} id - module id or path
	* @returns {*} resolved module
	*/
	function onCommand( id ) {
		var nodes;
		var stack;
		var err;
		var m;
		var i;
		if ( !isString( id ) ) {
			err = new TypeError( 'invalid argument. Must provide a string. Value: `'+id+'`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		// Resolve the module id to a path:
		id = repl._context.require.resolve( id );

		// Attempt to load the module (if already loaded, this is effectively a no-op; if not already loaded, loading a module does *not* guarantee that all associated module dependencies will be freshly loaded; hence, cannot just simply `require` the module id):
		repl._context.require( id );

		// Get the module object:
		m = repl._context.require.cache[ id ];

		// Perform a depth-first search to get a list of all module ids which need to be re-imported...
		stack = new Stack();
		nodes = {};

		stack.push( m ); // push the root node onto the stack
		while ( stack.length ) {
			m = stack.pop();
			if ( m && !hasOwnProp( nodes, m.id ) ) {
				nodes[ m.id ] = true;
				for ( i = 0; i < m.children.length; i++ ) {
					stack.push( m.children[ i ] );
				}
			}
		}
		// Remove each module from the `require` cache...
		nodes = objectKeys( nodes );
		for ( i = 0; i < nodes.length; i++ ) {
			delete repl._context.require.cache[ nodes[ i ] ];
		}
		// Re-require the module (and all its associated dependencies):
		return repl._context.require( id );
	}
}


// EXPORTS //

module.exports = command;
