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

var resolve = require( 'path' ).resolve;
var instanceOf = require( '@stdlib/assert/instance-of' );
var readJSON = require( './../lib' );

var file = resolve( __dirname, '..', 'package.json' );

// Synchronously read a JSON file...
var data = readJSON.sync( file, 'utf8' );
console.log( instanceOf( data, Error ) );
// => false

data = readJSON.sync( 'beepboop', {
	'encoding': 'utf8'
});
console.log( instanceOf( data, Error ) );
// => true

// Asynchronously read a JSON file...
readJSON( file, onJSON );
readJSON( 'beepboop', onJSON );

function onJSON( error, data ) {
	if ( error ) {
		if ( error.code === 'ENOENT' ) {
			console.error( 'JSON file does not exist.' );
		} else {
			throw error;
		}
	} else {
		console.log( 'Package description: %s', data.description );
	}
}
