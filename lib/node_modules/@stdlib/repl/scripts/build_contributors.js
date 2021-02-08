/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var logger = require( 'debug' );
var resolveParentPath = require( '@stdlib/fs/resolve-parent-path' ).sync;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var reEOL = require( '@stdlib/regexp/eol' );
var trim = require( '@stdlib/string/trim' );


// VARIABLES //

var debug = logger( 'repl:contributors:build' );

// Output file path:
var OUTPUT_FILE = path.resolve( __dirname, '..', 'data', 'contributor.json' );

// Regular expression to match a comment line:
var RE_COMMENT = /^#/;

// Regular expression to capture a contributor name:
var RE_CONTRIBUTOR = /^(.+)\s<.+>$/;


// MAIN //

/**
* Main execution sequence.
*
* @private
* @returns {void}
*/
function main() {
	var fpath;
	var opts;
	var file;
	var json;
	var line;
	var err;
	var m;
	var i;

	debug( 'Resolving CONTRIBUTORS file.' );
	opts = {
		'dir': __dirname
	};
	fpath = resolveParentPath( 'CONTRIBUTORS', opts );
	if ( fpath === null ) {
		err = new Error( 'unexpected error. Unable to resolve a CONTRIBUTORS file.' );
		debug( 'Error: %s', err.message );
		console.error( 'Error: %s', err.message ); // eslint-disable-line no-console
		return;
	}
	debug( 'Successfully resolved a CONTRIBUTORS file: %s', fpath );

	debug( 'Reading file.' );
	opts = {
		'encoding': 'utf8'
	};
	fpath = path.resolve( __dirname, fpath );
	file = readFile( fpath, opts );
	if ( file instanceof Error ) {
		debug( 'Error: %s', file.message );
		console.error( 'Error: %s', file.message ); // eslint-disable-line no-console
	}
	debug( 'Successfully read file.' );

	debug( 'Extracting contributors.' );
	file = file.split( reEOL.REGEXP );
	json = [];
	for ( i = 0; i < file.length; i++ ) {
		line = file[ i ];

		// Skip comment lines...
		if ( RE_COMMENT.test( line ) ) {
			continue;
		}
		// Skip empty lines...
		if ( trim( line ) === '' ) {
			continue;
		}
		// Extract contributor...
		m = line.match( RE_CONTRIBUTOR );
		if ( m ) {
			json.push( m[ 1 ] );
		} else {
			debug( 'Unable to extract contributor. Line: %s', line );
		}
	}
	debug( 'Contributor list: %s', JSON.stringify( json ) );

	debug( 'Writing to file.' );
	opts = {
		'encoding': 'utf8'
	};
	writeFile( OUTPUT_FILE, JSON.stringify( json )+'\n', opts );
}

main();
