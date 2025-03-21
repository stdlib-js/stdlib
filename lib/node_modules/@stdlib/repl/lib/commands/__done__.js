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

// MAIN //

/**
* Returns a callback to be invoked upon calling the `__done__` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Callback invoked to confirm that a command has finished executing.
	*
	* @private
	* @param {(Error|null)} [error] - execution error
	* @param {*} [results] - command results
	* @returns {void}
	*/
	function onCommand( error, results ) {
		if ( arguments.length === 0 ) {
			return repl._done();
		}
		if ( arguments.length === 1 ) {
			return repl._done( error );
		}
		repl._done( error, results );
	}
}


// EXPORTS //

module.exports = command;
