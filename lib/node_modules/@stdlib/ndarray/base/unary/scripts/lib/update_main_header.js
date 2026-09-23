/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var path = require( 'path' );
var substringBefore = require( '@stdlib/string/substring-before' );
var substringAfter = require( '@stdlib/string/substring-after' );
var readFile = require( '@stdlib/fs/read-file' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var format = require( '@stdlib/string/format' );


// VARIABLES //

var FOPTS = {
	'encoding': 'utf8'
};

// Main header file:
var INCLUDE_MAIN = path.resolve( __dirname, '..', '..', 'include', 'stdlib', 'ndarray', 'base', 'unary.h' );


// MAIN //

/**
* Updates the main header file.
*
* @private
* @param {Array<string>} signatures - list of (sorted) loop signatures
* @throws {Error} unexpected error
*/
function updateMainHeader( signatures ) {
	var file;
	var list;
	var err;
	var sig;
	var ch;
	var i;

	file = readFile( INCLUDE_MAIN, FOPTS );
	if ( file instanceof Error ) {
		throw file;
	}
	list = [];
	ch = signatures[ 0 ].charAt( 0 );
	for ( i = 0; i < signatures.length; i++ ) {
		sig = signatures[ i ];
		if ( sig.charAt( 0 ) !== ch ) {
			ch = sig.charAt( 0 );
			list.push( '' );
		}
		list.push( format( '#include "unary/%s.h"', sig ) );
	}
	file = [
		substringBefore( file, '\n// BEGIN LOOPS' ),
		'// BEGIN LOOPS',
		list.join( '\n' ),
		'// END LOOPS',
		substringAfter( file, '// END LOOPS\n' )
	].join( '\n' );

	err = writeFile( INCLUDE_MAIN, file, FOPTS );
	if ( err ) {
		throw err;
	}
}


// EXPORTS //

module.exports = updateMainHeader;
