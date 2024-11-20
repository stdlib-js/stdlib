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

var readDir = require( './../lib' );

/* Sync */

var out = readDir.sync( __dirname );
// returns <Array>

console.log( out instanceof Error );
// => false

out = readDir.sync( 'beepboop' );
// returns <Error>

console.log( out instanceof Error );
// => true

/* Async */

readDir( __dirname, onRead );
readDir( 'beepboop', onRead );

function onRead( error, data ) {
	if ( error ) {
		if ( error.code === 'ENOENT' ) {
			console.error( 'Directory does not exist.' );
		} else {
			throw error;
		}
	} else {
		console.log( data );
	}
}
