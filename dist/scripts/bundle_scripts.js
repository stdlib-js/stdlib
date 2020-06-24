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
* Script to list scripts for generating bundles in distributable bundle packages.
*
* ## Usage
*
* ```bash
* $ NODE_PATH=./path/to/stdlib/lib/node_modules node /path/to/stdlib/dist/scripts/bundle_scripts.js
* ```
*/

'use strict';

// MODULES //

var join = require( 'path' ).join;
var bundleDirs = require( './utils/bundle_dirs.js' );


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var list;
	var i;

	list = bundleDirs();
	if ( list instanceof Error ) {
		console.error( list.message ); // eslint-disable-line no-console
		process.exitCode = 1;
		return;
	}
	for ( i = 0; i < list.length; i++ ) {
		// WARNING: we assume that each package adheres to the same layout and naming conventions...
		list[ i ] = join( list[ i ], 'scripts', 'build.js' );
	}
	console.log( list.join( '\n' ) ); // eslint-disable-line no-console
}

main();
