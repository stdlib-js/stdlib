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
var format = require( '@stdlib/string/format' );
var log = require( './../log.js' );


// VARIABLES //

var debug = logger( 'repl:command:delete_workspace' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `renameWorkspace` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Renames a workspace.
	*
	* @private
	* @param {string} oldName - name of workspace to rename
	* @param {string} newName - new workspace name
	* @returns {void}
	*/
	function onCommand( oldName, newName ) {
		var err;
		if ( !isString( oldName ) ) {
			err = new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', oldName ) );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( !isString( newName ) ) {
			err = new TypeError( format( 'invalid argument. Second argument must be a string. Value: `%s`.', newName ) );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( !hasOwnProp( repl._workspaces, oldName ) ) {
			err = new Error( format( 'invalid argument. Unrecognized workspace name. Value: `%s`.', oldName ) );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( oldName === newName ) {
			log( repl, 'Workspace is already named \''+newName+'\'.' );
			return;
		}
		if ( hasOwnProp( repl._workspaces, newName ) ) {
			err = new Error( format( 'invalid argument. Workspace name already exists. Value: `%s`.', newName ) );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( oldName === repl._currentWorkspace ) {
			if ( oldName === 'base' ) {
				repl._workspaces[ 'base' ].length = 0;
				log( repl, 'Created \''+newName+'\' workspace and cleared \'base\' workspace. Current workspace: \''+newName+'\'.' );
				debug( 'Created \'%s\' workspace and cleared \'base\' workspace. Current workspace: \'%s\'.', newName, newName );
			} else {
				delete repl._workspaces[ oldName ];
				log( repl, 'Renamed \''+oldName+'\' workspace to \''+newName+'\'. Current workspace: \''+newName+'\'.' );
				debug( 'Renamed \'%s\' workspace to \'%s\'. Current workspace: \'%s\'.', oldName, newName, newName );
			}
			repl._workspaces[ newName ] = []; // "registers" the workspace
			repl._currentWorkspace = newName; // bookkeeping
			return;
		}
		if ( oldName === 'base' ) {
			repl._workspaces[ newName ] = repl._workspaces[ 'base' ].slice();
			repl._workspaces[ 'base' ].length = 0;
			log( repl, 'Created \''+newName+'\' workspace and cleared \'base\' workspace.' );
			debug( 'Created \'%s\' workspace and cleared \'base\' workspace.', newName );
			return;
		}
		repl._workspaces[ newName ] = repl._workspaces[ oldName ];
		delete repl._workspaces[ oldName ];
		log( repl, 'Renamed \''+oldName+'\' workspace to \''+newName+'\'.' );
		debug( 'Renamed \'%s\' workspace to \'%s\'.', oldName, newName );
	}
}


// EXPORTS //

module.exports = command;
