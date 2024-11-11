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

var resolve = require( 'path' ).resolve;
var readNDJSON = require( './../lib' );

var file = resolve( __dirname, 'fixtures', 'file.ndjson' );

// Synchronously read a newline-delimited JSON file...
var data1 = readNDJSON.sync( file, 'utf8' );
console.log( data1 );

var data2 = readNDJSON.sync( 'beepboop', {
	'encoding': 'utf8'
});
console.log( data2 );

// Asynchronously read a newline-delimited JSON file...
readNDJSON( file, clbk );
readNDJSON( 'beepboop', clbk );

function clbk( error, data ) {
	if ( error ) {
		if ( error.code === 'ENOENT' ) {
			console.error( 'JSON file does not exist.' );
		} else {
			throw error;
		}
	} else {
		console.log( 'Package description: %s', data[2].description );
	}
}
