/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var proc = require( 'process' );


// MAIN //

/**
* Absolute pathname of the executable which started the current Node.js process.
*
* @constant
* @type {string}
*
* @example
* if ( EXEC_PATH ) {
*     console.log( 'Executable: %s', EXEC_PATH );
* } else {
*     console.log( 'Not running in Node.js.' );
* }
*/
var EXEC_PATH = proc.execPath;


// EXPORTS //

module.exports = EXEC_PATH;
