#!/usr/bin/env node

/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/**
* Script to verify the versions of packages containing distributable files.
*
* ## Usage
*
* ```bash
* $ NODE_PATH=./path/to/stdlib/lib/node_modules node /path/to/stdlib/dist/scripts/verify_versions
* ```
*/

/* eslint-disable no-console */

'use strict';

// MODULES //

var join = require( 'path' ).join;
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var bundleDirs = require( './utils/bundle_dirs.js' );
var version = require( './utils/root_pkg_version.js' );


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fopts;
	var fpath;
	var list;
	var pkg;
	var FLG;
	var v;
	var i;

	// Get the root version:
	v = version();
	if ( v instanceof Error ) {
		console.error( v.message );
		return;
	}
	// Get the list of distributable bundle package directories:
	list = bundleDirs();
	if ( list instanceof Error ) {
		console.error( list.message );
		return;
	}
	// For each package, check that the version matches the root version:
	fopts = {
		'encoding': 'utf8'
	};
	for ( i = 0; i < list.length; i++ ) {
		fpath = join( list[ i ], 'package.json' );
		pkg = readJSON( fpath, fopts );
		if ( pkg instanceof Error ) {
			console.error( pkg.message );
			return;
		}
		if ( pkg.version !== v ) {
			FLG = true;
			console.error( 'INVALID VERSION: package version does not match root package. Package: ' + pkg.name + '.' );
		}
	}
	if ( FLG ) {
		process.exitCode = 1;
	}
}

main();
