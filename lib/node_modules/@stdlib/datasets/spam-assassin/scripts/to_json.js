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

/*
* Script to convert text files to JSON.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readDirSync = require( '@stdlib/fs/read-dir' ).sync;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var RE_EXT = /\.txt$/;
var RE_FILENAME = /^(\d{5})\.(.*)\.txt$/;
var dirs = [
	'easy-ham-1',
	'easy-ham-2',
	'hard-ham-1',
	'spam-1',
	'spam-2'
];


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var dpath;
	var files;
	var parts;
	var opts;
	var file;
	var out;
	var i;
	var j;

	opts = {
		'encoding': 'utf8'
	};
	for ( i = 0; i < dirs.length; i++ ) {
		dpath = resolve( __dirname, '..', 'data', dirs[ i ] );
		files = readDirSync( dpath );
		if ( files instanceof Error ) {
			throw files;
		}
		for ( j = 0; j < files.length; j++ ) {
			if ( files[ j ][ 0 ] === '.' ) {
				// Skip "hidden" files...
				continue;
			}
			if ( !RE_EXT.test( files[ j ] ) ) {
				// Skip non-text files...
				continue;
			}
			fpath = resolve( __dirname, '..', 'data', dirs[ i ], files[ j ] );
			file = readFileSync( fpath, opts );
			if ( file instanceof Error ) {
				throw file;
			}
			parts = RE_FILENAME.exec( files[ j ] );
			if ( !parts ) {
				continue;
			}
			out = {};
			out.id = parts[ 1 ];
			out.group = dirs[ i ];
			out.checksum = {
				'type': 'MD5',
				'value': parts[ 2 ]
			};
			out.text = file;
			fpath = replace( fpath, RE_EXT, '.json' );
			writeFileSync( fpath, JSON.stringify( out ), opts );
		}
	}
}

main();
