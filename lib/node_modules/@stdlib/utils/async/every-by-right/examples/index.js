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
var readFile = require( '@stdlib/fs/read-file' );
var everyByRightAsync = require( './../lib' );

var files = [
	resolve( __dirname, '..', 'beep.boop.md' ),
	resolve( __dirname, '..', 'package.json' ),
	resolve( __dirname, '..', 'README.md' )
];

function done( error, bool ) {
	if ( error ) {
		throw error;
	}
	if ( bool ) {
		console.log( 'Successfully read all files.' );
	} else {
		console.log( 'Was unable to read all files.' );
	}
}

function predicate( file, next ) {
	var opts = {
		'encoding': 'utf8'
	};
	readFile( file, opts, onFile );

	function onFile( error ) {
		if ( error ) {
			return next( null, false );
		}
		next( null, true );
	}
}

everyByRightAsync( files, predicate, done );
