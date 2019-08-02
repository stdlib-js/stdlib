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
var isRegExp = require( '@stdlib/assert/is-regexp' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var objectKeys = require( '@stdlib/utils/keys' );


// VARIABLES //

var debug = logger( 'repl:command:is_workspace' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `isWorkspace` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Returns a boolean indicating whether a specified workspace exists.
	*
	* @private
	* @param {(string|RegExp)} name - workspace name or regular expression
	* @returns {(boolean|void)} boolean indicating whether a workspace exists
	*/
	function onCommand( name ) {
		var isStr;
		var keys;
		var err;
		var i;

		isStr = isString( name );
		if ( isStr === false && !isRegExp( name ) ) {
			err = new TypeError( 'invalid argument. Must provide either a string or regular expression. Value: `'+name+'`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( isStr ) {
			return hasOwnProp( repl._workspaces, name );
		}
		keys = objectKeys( repl._workspaces );
		for ( i = 0; i < keys.length; i++ ) {
			if ( name.test( keys[ i ] ) ) {
				return true;
			}
		}
		return false;
	}
}


// EXPORTS //

module.exports = command;
