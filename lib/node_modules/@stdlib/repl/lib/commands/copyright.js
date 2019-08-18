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

'use strict';

// VARIABLES //

var INFO = '\nCopyright (c) 2016-2019 The Stdlib Authors.\n';


// MAIN //

/**
* Returns a callback to be invoked upon calling the `copyright` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Prints copyright information.
	*
	* @private
	*/
	function onCommand() {
		repl._ostream.write( INFO ); // eslint-disable-line no-underscore-dangle
	}
}


// EXPORTS //

module.exports = command;
