/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var format = require( '@stdlib/string/format' );
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var ACTIONS = require( './../actions.js' );


// VARIABLES //

var isAction = contains( ACTIONS );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `keybindings` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Returns all (or select) keybindings.
	*
	* @private
	* @param {string} [action] - action name
	* @returns {(Object|Array<Object>)} keybindings object or a list of keybindings
	*/
	function onCommand() {
		var action;
		var nargs;

		nargs = arguments.length;
		if ( nargs === 0 ) {
			return repl.keybindings();
		}
		if ( nargs === 1 ) {
			action = arguments[ 0 ];
			if ( !isString( action ) ) {
				repl._ostream.write( format( 'Error: invalid argument. First argument must be a string. Value: `%s`.', action ) );
				return;
			}
			if ( !isAction( action ) ) {
				repl._ostream.write( format( 'Error: invalid argument. First argument must be a valid action name. Value: `%s`.', action ) );
				return;
			}
			return repl.keybindings()[ action ];
		}
	}
}


// EXPORTS //

module.exports = command;
