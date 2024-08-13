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

var join = require( 'path' ).join;
var appendFile = require( './../lib' );

var fpath = join( __dirname, 'fixtures', 'file.txt' );

// Synchronously appends data to a file:

var err = appendFile.sync( fpath, 'beep boop\n', 'utf8' );
// returns null

console.log( err instanceof Error );
// => false

// Asynchronously append data to a file:

appendFile( fpath, 'appended something\n', onAppend );

function onAppend( err ) {
	if ( err ) {
		console.error( 'Error: %s', err.message );
	}
	console.log( 'Success!' );
}
