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

var closeSync = require( '@stdlib/fs/close' ).sync;
var isError = require( '@stdlib/assert/is-error' );
var open = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare

/* Sync */

var fd = open.sync( __filename, 'r+' );
// returns <number>

console.log( isError( fd ) );
// => false

closeSync( fd );

fd = open.sync( 'beepboop' );
// returns <Error>

console.log( isError( fd ) );
// => true

/* Async */

open( __filename, onOpen );
open( 'beepboop', onOpen );

function onOpen( error, fd ) {
	if ( error ) {
		if ( error.code === 'ENOENT' ) {
			console.error( 'File does not exist.' );
		} else {
			throw error;
		}
	} else {
		closeSync( fd );
	}
}
