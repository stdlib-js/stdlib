/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var write = require( 'fs' ).writeFile;


// MAIN //

/**
* Asynchronously writes data to a file.
*
* @param {(string|Buffer|integer)} file - file path or file descriptor
* @param {(string|Buffer)} data - data to write
* @param {(Object|string)} [options] - options
* @param {Function} clbk - callback to invoke after writing data to a file
*
* @example
* function onWrite( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* writeFile( './beep/boop.txt', 'beep boop\n', onWrite );
*/
function writeFile() {
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	write.apply( null, args );
}


// EXPORTS //

module.exports = writeFile;
