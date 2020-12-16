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

var logger = require( 'debug' );
var readFile = require( '@stdlib/fs/read-file' ).sync;
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;


// VARIABLES //

var debug = logger( 'read-file-list:sync' );


// MAIN //

/**
* Synchronously reads the entire contents of each file in a file list.
*
* @param {StringArray} list - list of file paths
* @param {(Object|string)} [options] - options
* @param {(string|null)} [options.encoding] - file encoding
* @param {string} [options.flag] - file status flag
* @throws {TypeError} must provide a string array
* @returns {ObjectArray} file contents
*
* @example
* var list = [ __filename ];
* var files = readFileListSync( list );
*
* if ( files instanceof Error ) {
*     throw files;
* }
* console.dir( files );
*/
function readFileListSync( list, options ) {
	var results;
	var opts;
	var file;
	var len;
	var i;

	if ( !isStringArray( list ) ) {
		throw new TypeError( 'invalid argument. First argument must be a string array. Value: `' + list + '`.' );
	}
	if ( arguments.length > 1 ) {
		opts = options;
	} else {
		opts = {};
	}
	len = list.length;
	results = new Array( len );

	debug( 'Reading %d files...', len );
	for ( i = 0; i < len; i++ ) {
		debug( 'Reading file: %s (%d of %d).', list[ i ], i+1, len );
		file = readFile( list[ i ], opts );
		if ( file instanceof Error ) {
			debug( 'Encountered an error when reading file: %s (%d of %d). Error: %s', list[ i ], i, len, file.message );
			return file;
		}
		debug( 'Successfully read file: %s (%d of %d).', list[ i ], i, len );
		results[ i ] = {
			'file': list[ i ],
			'data': file
		};
	}
	debug( 'Finished reading files.' );
	return results;
}


// EXPORTS //

module.exports = readFileListSync;
