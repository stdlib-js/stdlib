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

// MAIN //

/**
* Returns a callback to be invoked upon calling the `pager` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Enables paging for a provided string.
	*
	* @private
	* @param {string} value - input string
	*/
	function onCommand( value ) {
		var ostream = repl._ostream;

		// Check whether auto-paging is already enabled...
		if ( repl.settings( 'autoPage' ) ) {
			// Nothing needed here, as we can defer to already enabled behavior:
			ostream.write( value );
			return;
		}
		// Temporarily enable paging:
		ostream.enablePaging();

		// Write the input value:
		ostream.write( value );

		// Disable paging:
		ostream.disablePaging();
	}
}


// EXPORTS //

module.exports = command;
