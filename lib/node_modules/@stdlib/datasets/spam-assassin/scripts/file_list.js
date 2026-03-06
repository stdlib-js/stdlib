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
* Script to generate a file list.
*/
'use strict';

// MAIN //

var resolve = require( 'path' ).resolve;
var readDirSync = require( '@stdlib/fs/read-dir' ).sync;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;


// VARIABLES //

var RE_EXT = /\.txt$/;
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
	var files;
	var fpath;
	var dpath;
	var opts;
	var out;
	var i;
	var j;

	out = [];
	for ( i = 0; i < dirs.length; i++ ) {
		dpath = resolve( __dirname, '..', 'data', dirs[ i ] );
		files = readDirSync( dpath );
		if ( files instanceof Error ) {
			throw files;
		}
		for ( j = 0; j < files.length; j++ ) {
			if (
				files[ j ][ 0 ] !== '.' &&
				RE_EXT.test( files[ j ] )
			) {
				out.push( dirs[ i ]+'/'+files[ j ] );
			}
		}
	}
	opts = {
		'encoding': 'utf8'
	};
	fpath = resolve( __dirname, '..', 'data', 'file_list.json' );
	writeFileSync( fpath, JSON.stringify( out, null, 2 ), opts );
}

main();
