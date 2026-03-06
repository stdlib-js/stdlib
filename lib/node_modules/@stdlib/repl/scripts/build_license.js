#!/usr/bin/env node

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


// VARIABLES //

var debug = logger( 'repl:license:build' );

// Output file path:
var OUTPUT_FILE = path.resolve( __dirname, '..', 'data', 'license_text.json' );


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
	var err;

	debug( 'Resolving LICENSE file.' );
	opts = {
		'dir': __dirname
	};
	fpath = resolveParentPath( 'LICENSE', opts );
	if ( fpath === null ) {
		err = new Error( 'unexpected error. Unable to resolve a LICENSE file.' );
		debug( 'Error: %s', err.message );
		console.error( 'Error: %s', err.message ); // eslint-disable-line no-console
		return;
	}
	debug( 'Successfully resolved a LICENSE file: %s', fpath );

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
	json = {
		'text': file
	};

	debug( 'Writing data to file.' );
	opts = {
		'encoding': 'utf8'
	};
	writeFile( OUTPUT_FILE, JSON.stringify( json )+'\n', opts );
}

main();
