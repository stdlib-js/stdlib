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
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var copy = require( '@stdlib/array/base/copy' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var FOPTS = {
	'encoding': 'utf8'
};

// Manifest file:
var MANIFEST = path.resolve( __dirname, '..', '..', 'manifest.json' );

// Regular expression to test for a "loop" file in the manifest.json:
var RE_MANIFEST_LOOP_FILE = /\.\/src\/[a-z]_[a-z](?:_as_[a-z]_[a-z]|)\.c$/;


// MAIN //

/**
* Updates the package manifest.
*
* @private
* @param {Array<string>} signatures - list of (sorted) loop signatures
* @throws {Error} unexpected error
*/
function updateManifest( signatures ) {
	var file;
	var list;
	var tmp;
	var err;
	var l;
	var i;
	var j;

	file = readJSON( MANIFEST, FOPTS );
	if ( file instanceof Error ) {
		throw file;
	}
	list = [];
	for ( i = 0; i < signatures.length; i++ ) {
		list.push( format( './src/%s.c', signatures[ i ] ) );
	}
	for ( j = 0; j < file.confs.length; j++ ) {
		l = copy( list );

		// Copy over non-signature source files...
		tmp = file.confs[ j ].src;
		for ( i = 0; i < tmp.length; i++ ) {
			if ( RE_MANIFEST_LOOP_FILE.test( tmp[ i ] ) === false ) {
				l.push( tmp[ i ] );
			}
		}
		// Replace the list of source files:
		file.confs[ j ].src = l;
	}
	err = writeFile( MANIFEST, JSON.stringify( file, null, 2 )+'\n', FOPTS );
	if ( err ) {
		throw err;
	}
}


// EXPORTS //

module.exports = updateManifest;
