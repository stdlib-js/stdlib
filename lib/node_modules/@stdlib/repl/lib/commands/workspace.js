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
var propertyDescriptor = require( '@stdlib/utils/property-descriptor' );
var defineProperty = require( '@stdlib/utils/define-property' );
var log = require( './../log.js' );


// VARIABLES //

var debug = logger( 'repl:command:workspace' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `workspace` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Switches to a specified workspace.
	*
	* @private
	* @param {string} name - workspace name
	* @returns {void}
	*/
	function onCommand( name ) {
		var vars;
		var curr;
		var desc;
		var err;
		var ws;
		var i;
		if ( !isString( name ) ) {
			err = new TypeError( 'invalid argument. Must provide a string. Value: `' + name + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		curr = repl._currentWorkspace;
		if ( name === curr ) {
			log( repl, 'Already in \''+name+'\' workspace.' );
			debug( 'Already in \'%s\' workspace.', name );
			return;
		}
		// Cache and delete the current workspace variables...
		vars = repl._context.varsWorkspace( curr );
		ws = repl._workspaces[ curr ];
		ws.length = 0; // reset
		for ( i = 0; i < vars.length; i++ ) {
			desc = propertyDescriptor( repl._context, vars[ i ] );
			ws.push( vars[ i ], desc );

			// WARNING: in non-sandboxed environments, we run the risk of deleting global variables which were not introduced by the REPL environment...
			if ( desc.configurable ) {
				delete repl._context[ vars[ i ] ];
			}
		}
		// Reset the REPL evaluation context (Why? Because we cannot simply delete variables as seen within the REPL environment. E.g., variables declared with `var` in the global scope are non-configurable, and, thus, cannot be deleted (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete). Hence, while we can delete a property/variable here, this deletion does not get propagated to within the REPL environment; i.e., a user can still access the deleted property as a variable within the REPL environment.):
		repl.resetContext();

		// If the destination workspace already exists, load the workspace's variables...
		if ( hasOwnProp( repl._workspaces, name ) ) {
			ws = repl._workspaces[ name ];
			for ( i = 0; i < ws.length; i += 2 ) {
				desc = propertyDescriptor( repl._context, ws[ i ] );

				// If the variable does not already exist in the current evaluation context, define a new variable...
				if ( desc === null ) {
					defineProperty( repl._context, ws[ i ], ws[ i+1 ] );
				}
				// If configurable, we can simply overwrite the existing property descriptor...
				else if ( desc.configurable ) {
					defineProperty( repl._context, ws[ i ], ws[ i+1 ] );
				}
				// Otherwise, use direct assignment if the variable is writable...
				else if ( hasOwnProp( desc, 'value' ) || hasOwnProp( desc, 'set' ) ) {
					repl._context[ ws[ i ] ] = ws[ i+1 ];
				}
				// Cannot assign to the variable as the variable is read-only...
				else {
					log( repl, 'Cannot load \''+ws[ i ]+'\' from \''+name+'\' workspace due to the presence of a non-configurable read-only variable of the same name.' );
					debug( 'Cannot load \'%s\' from \'%s\' workspace due to the presence of a non-configurable read-only variable of the same name.', ws[ i ], name );
				}
			}
			ws.length = 0; // free up memory and prevent holding on to old references
			log( repl, 'Switched to \''+name+'\' workspace.' );
			debug( 'Switched to %s workspace.', name );
		}
		// Otherwise, create a new workspace...
		else {
			repl._workspaces[ name ] = [];
			log( repl, 'Created and switched to \''+name+'\' workspace.' );
			debug( 'Created and switched to %s workspace.', name );
		}

		// Update the current workspace variable:
		repl._currentWorkspace = name; // bookkeeping
	}
}


// EXPORTS //

module.exports = command;
