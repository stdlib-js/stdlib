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
* Returns a callback to be invoked upon calling the `vars` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Returns a list of variable names in the current workspace.
	*
	* @private
	* @param {Options} [options] - function options
	* @param {RegExp} [options.include] - name inclusion filter
	* @param {RegExp} [options.exclude] - name exclusion filter
	* @param {ArrayLikeObject} [options.types] - type inclusion filter(s)
	* @param {boolean} [options.details] - boolean indicating whether to include additional variable details, such as variable type, contents, etc
	* @returns {(Array|void)} workspace variable names
	*/
	function onCommand( options ) {
		var opts;
		if ( arguments.length ) {
			opts = options;
		} else {
			opts = {};
		}
		return repl._context.varsWorkspace( repl._currentWorkspace, opts );
	}
}


// EXPORTS //

module.exports = command;
