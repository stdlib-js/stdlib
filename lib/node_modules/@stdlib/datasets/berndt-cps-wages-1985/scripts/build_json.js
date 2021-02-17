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

var resolve = require( 'path' ).resolve;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var reEOL = require( '@stdlib/regexp/eol' );


// MAIN //

/**
* Reads a CSV file and converts to JSON.
*
* @private
* @throws {Error} invalid file
*/
function main() {
	var headers;
	var fpath;
	var opts;
	var file;
	var tmp;
	var row;
	var i;
	var j;

	fpath = resolve( __dirname, '..', 'data', 'data.csv' );

	opts = {
		'encoding': 'utf8'
	};
	file = readFileSync( fpath, opts );
	if ( file instanceof Error ) {
		throw file;
	}
	file = file.split( reEOL.REGEXP );

	// Assume that the file ends with an empty last line:
	if ( file[ file.length-1 ] === '' ) {
		file.pop();
	}
	for ( i = 0; i < file.length; i++ ) {
		// Assume headers are the first line:
		if ( i === 0 ) {
			headers = file[ i ].split( ',' );
		} else {
			tmp = file[ i ].split( ',' );
			if ( tmp.length !== headers.length ) {
				throw new Error( 'number of columns does not match number of columns for row '+i+'.' );
			}
			row = {};
			for ( j = 0; j < headers.length; j++ ) {
				if ( tmp[ j ] === '' ) {
					row[ headers[j] ] = null;
				} else if (
					headers[j] === 'gender' ||
					headers[j] === 'race' ||
					headers[j] === 'occupation' ||
					headers[j] === 'sector'
				) {
					row[ headers[j] ] = tmp[ j ];
				} else {
					row[ headers[j] ] = parseFloat( tmp[j] );
				}
			}
			file[ i ] = row;
		}
	}
	// Remove the headers element:
	file.shift();

	// Write the JSON file:
	fpath = resolve( __dirname, '..', 'data', 'data.json' );
	writeFileSync( fpath, JSON.stringify( file )+'\n', opts );
}

main();
