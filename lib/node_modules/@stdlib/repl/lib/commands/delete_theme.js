/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var log = require( './../log.js' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `deleteTheme` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Deletes a syntax highlighting color theme.
	*
	* @private
	* @param {string} name - theme name
	* @returns {void}
	*/
	function onCommand( name ) {
		try {
			repl.deleteTheme( name );
		} catch ( err ) {
			repl._ostream.write( format( 'Error: %s\n', err.message ) );
			return;
		}
		log( repl, format( '\nSuccessfully deleted theme `%s`.', name ) );
	}
}


// EXPORTS //

module.exports = command;
