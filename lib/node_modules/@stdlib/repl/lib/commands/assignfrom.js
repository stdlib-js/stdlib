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


// VARIABLES //

var debug = logger( 'repl:command:assignfrom' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `assignfrom` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Reads a value from a specified workspace.
	*
	* @private
	* @param {string} workspace - workspace name
	* @param {(string|symbol)} variable - variable name
	* @returns {*} assigned value
	*/
	function onCommand( workspace, variable ) {
		var list;
		var desc;
		var err;
		var i;
		if ( !isString( workspace ) ) {
			err = new TypeError( 'invalid argument. First argument must be a string. Value: `' + workspace + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( workspace === repl._currentWorkspace ) {
			return repl._context[ variable ];
		}
		if ( !hasOwnProp( repl._workspaces, workspace ) ) {
			err = new Error( 'invalid argument. Unrecognized workspace name. Value: `' + workspace + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		list = repl._workspaces[ workspace ];
		for ( i = 0; i < list.length; i += 2 ) {
			if ( list[ i ] === variable ) {
				desc = list[ i+1 ];

				// Check if descriptor is an accessor descriptor:
				if ( hasOwnProp( desc, 'get' ) ) {
					// WARNING: the `this` context is not defined, as the variable is not actually bound to a global instance!
					return desc.get.call( null );
				}
				// Check if the descriptor is a data descriptor:
				if ( hasOwnProp( desc, 'value' ) ) {
					return desc.value;
				}
				// Variable must be write-only:
				err = new Error( 'invalid operation. Cannot read from write-only variable `'+variable+'`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
		}
	}
}


// EXPORTS //

module.exports = command;
