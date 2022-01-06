/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable node/no-sync, no-console */

'use strict';

// MODULES //

var readFileSync = require( 'fs' ).readFileSync;
var join = require( 'path' ).join;


// MAIN //

// Path to the root directory:
var dir = join( __dirname, '..', '..' );

// File path to the root package.json file:
var fpath = join( dir, 'package.json' );

// Read the root package.json file:
var pkg = JSON.parse( readFileSync( fpath, 'utf8' ) );

// Extract list of dependencies from the root package.json file and write newline-delimited list of `@stdlib` dependencies to stdout:
var keys = Object.keys( pkg.dependencies );
var key;
var i;

for ( i = 0; i < keys.length; i++ ) {
	key = keys[ i ];
	if ( key.startsWith( '@stdlib' ) ) {
		console.log( key );
	}
}
