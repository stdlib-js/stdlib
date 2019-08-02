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
var log = require( './../log.js' );


// VARIABLES //

var debug = logger( 'repl:command:delete_workspace' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `deleteWorkspace` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Deletes a workspace.
	*
	* @private
	* @param {string} [name] - workspace name
	* @returns {void}
	*/
	function onCommand( name ) {
		var err;
		var ws;
		if ( arguments.length ) {
			if ( !isString( name ) ) {
				err = new TypeError( 'invalid argument. Must provide a string. Value: `' + name + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
			if ( !hasOwnProp( repl._workspaces, name ) ) {
				err = new Error( 'invalid argument. Unrecognized workspace name. Value: `' + name + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
			ws = name;
		} else {
			ws = repl._currentWorkspace;
		}
		if ( ws === 'base' ) {
			err = new Error( 'invalid operation. Cannot delete the `base` workspace.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( ws === repl._currentWorkspace ) {
			repl._context.workspace( 'base' );
		}
		delete repl._workspaces[ ws ];
		log( repl, 'Deleted \''+ws+'\' workspace.' );
		debug( 'Deleted \'%s\' workspace.', ws );
	}
}


// EXPORTS //

module.exports = command;
