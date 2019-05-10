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

// MODULES //

var compileCode = require( './compile_code.js' );
var isSilentCommand = require( './is_silent_command.js' );
var hasAsyncDirective = require( './has_async_directive.js' );


// MAIN //

/**
* Compiles a command.
*
* @private
* @param {string} cmd - command string
* @returns {(Object|Error)} compiled command or an error
*/
function compileCommand( cmd ) {
	var out;
	var tmp;

	// Initialize a command object:
	out = {
		'cmd': cmd
	};

	// Determine whether the command is "asynchronous":
	out.async = hasAsyncDirective( cmd );

	// Attempt to compile the command...
	tmp = compileCode( cmd );
	if ( tmp instanceof Error ) {
		return tmp;
	}
	out.compiled = tmp;

	// Determine whether the command is "silent" (i.e., terminates in a semicolon):
	out.silent = isSilentCommand( cmd );

	return out;
}


// EXPORTS //

module.exports = compileCommand;
