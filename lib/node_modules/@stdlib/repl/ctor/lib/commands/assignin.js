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

var debug = logger( 'repl:command:assignin' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `assignin` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Assigns a value to a variable in a specified workspace.
	*
	* @private
	* @param {string} workspace - workspace name
	* @param {(string|symbol)} variable - variable name
	* @param {*} value - value to assign
	* @returns {void}
	*/
	function onCommand( workspace, variable, value ) {
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
			repl._context[ variable ] = value;
			return;
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

				// Check if descriptor has a setter:
				if ( typeof desc.set === 'function' ) {
					// WARNING: the `this` context is not defined, as the variable is not actually bound to a global instance!
					desc.set.call( null, value );
					return;
				}
				// Check if the variable is read-only:
				if ( typeof desc.get === 'function' || desc.writable === false ) {
					err = new Error( 'Cannot assign to read only property '+variable+' of object #<Object>' ); // Note: this mirrors the built-in environment error message
					debug( 'Error: %s', err.message );
					repl._ostream.write( 'Error: '+err.message+'\n' );
					return;
				}
				desc.value = value;
				return;
			}
		}
		// Create a workspace variable by defining a property descriptor equivalent to when a user defines a variable within a global context (e.g., `var x = 3.14`):
		list.push( variable, {
			'configurable': true,
			'enumerable': true,
			'writable': true,
			'value': value
		});
	}
}


// EXPORTS //

module.exports = command;
