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
* Script to rename raw Spam Assassin files of the form `<number>.<hash>` by appending the extension `.txt`.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var renameSync = require( '@stdlib/fs/rename' ).sync;
var readDirSync = require( '@stdlib/fs/read-dir' ).sync;


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
	var fpath1;
	var fpath2;
	var dpath;
	var files;
	var i;
	var j;

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
				fpath1 = resolve( __dirname, '..', 'data', dirs[ i ], files[ j ] );
				fpath2 = fpath1 + '.txt';
				renameSync( fpath1, fpath2 );
			}
		}
	}
}

main();
