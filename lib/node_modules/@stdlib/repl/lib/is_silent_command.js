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

var RE_NON_WHITESPACE = /\S/;
var SEMICOLON = 59; // character code


// MAIN //

/**
* Asserts whether a command is "silent" (i.e., terminates in a semicolon).
*
* @private
* @param {string} code - unevaluated command
* @returns {boolean} boolean indicating whether a command is "silent"
*
* @example
* var bool = isSilentCommand( '' );
* // returns false
*
* @example
* var bool = isSilentCommand( ';' );
* // returns true
*
* @example
* var bool = isSilentCommand( 'var x = 3' );
* // returns false
*
* @example
* var bool = isSilentCommand( 'var x = 3;' );
* // returns true
*
* @example
* var bool = isSilentCommand( 'var x = 3; var y = 4' );
* // returns false
*
* @example
* var bool = isSilentCommand( 'var x = 3; var y = 4;' );
* // returns true
*
* @example
* var bool = isSilentCommand( 'var x = 3;\nvar y = 4   ' );
* // returns false
*
* @example
* var bool = isSilentCommand( 'var x = 3;\nvar y = 4;\n' );
* // returns true
*/
function isSilentCommand( code ) {
	var i;
	for ( i = code.length-1; i >= 0; i-- ) {
		if ( code.charCodeAt( i ) === SEMICOLON ) {
			return true;
		}
		if ( RE_NON_WHITESPACE.test( code[ i ] ) ) {
			return false;
		}
	}
	return false;
}


// EXPORTS //

module.exports = isSilentCommand;
