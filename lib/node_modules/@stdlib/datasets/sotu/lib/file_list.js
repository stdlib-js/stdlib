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

// MODULES //

var fs = require( 'fs' );
var join = require( 'path' ).join;
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var extname = require( '@stdlib/utils/extname' );
var dataDir = require( './data_dir.js' );
var RE = require( './re_filename.js' );


// VARIABLES //

var list;


// FUNCTIONS //

/**
* Generates a sorted list of JSON data file filenames by reading the file system.
*
* @private
* @returns {StringArray} filenames
*/
function read() {
	var fpath;
	var files;
	var stats;
	var out;
	var f;
	var i;

	files = readDir( dataDir );
	out = [];
	for ( i = 0; i < files.length; i++ ) {
		f = files[ i ];
		if ( extname( f ) === '.json' && RE.test( f ) ) {
			fpath = join( dataDir, f );
			stats = fs.statSync( fpath ); // eslint-disable-line no-sync
			if ( stats.isFile() ) {
				out.push( f );
			}
		}
	}
	return out.sort();
}


// MAIN //

list = read();


// EXPORTS //

module.exports = list;
