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

'use strict';

// MODULES //

var append = require( 'fs' ).appendFile;


// MAIN //

/**
* Asynchronously append data to a file, creating the file if it does not yet exist.
*
* @param {(string|Buffer|integer)} path - file path or file descriptor
* @param {(string|Buffer)} data - data to append
* @param {(Object|string)} [options] - options
* @param {Function} clbk - callback to invoke after appending data to the file
*
* @example
* function onAppend( err ) {
*     if ( err ) {
*         console.log( err.message );
*     }
* }
*
* appendFile( './beep/boop.txt', 'appended something\n', onAppend );
*/
function appendFile() {
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[i] );
	}
	append.apply( null, args );
}


// EXPORTS //

module.exports = appendFile;
