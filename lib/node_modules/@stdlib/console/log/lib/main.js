/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var console = require( 'console' ); // eslint-disable-line stdlib/no-redeclare


// VARIABLES //

var builtin = console.log;


// MAIN //

/**
* Outputs a message to the debugger console.
*
* @param {*} [data] - data to log
* @param {...*} [args] - additional arguments or substitution values
* @returns {void}
*
* @example
* log( 'Hello, World!' );
*
* @example
* log( 'Hello, %s!', 'World' );
*/
function log() {
	builtin.apply( console, arguments );
}


// EXPORTS //

module.exports = log;
