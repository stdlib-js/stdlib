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

var readdir = require( 'fs' ).readdir;


// MAIN //

/**
* Asynchronously reads the contents of a directory.
*
* @param {(string|Buffer)} path - directory path
* @param {Function} clbk - callback to invoke after reading directory contents
*
* @example
* function onRead( error, data ) {
*     if ( error ) {
*         console.error( error );
*     } else {
*         console.log( data );
*     }
* }
* readDir( __dirname, onRead );
*/
function readDir() {
	var args;
	var i;
	args = [];
	for ( i = 0; i < arguments.length; i++ ) {
		args.push( arguments[ i ] );
	}
	readdir.apply( null, args );
}


// EXPORTS //

module.exports = readDir;
