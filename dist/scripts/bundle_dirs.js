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
* Script to list distributable bundle packages.
*
* ## Usage
*
* ```bash
* $ NODE_PATH=./path/to/stdlib/lib/node_modules node /path/to/stdlib/dist/scripts/bundle_dirs.js
* ```
*/

'use strict';

// MODULES //

var bundleDirs = require( './utils/bundle_dirs.js' );


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var dirs = bundleDirs();
	if ( dirs instanceof Error ) {
		console.error( dirs.message ); // eslint-disable-line no-console
		process.exitCode = 1;
		return;
	}
	console.log( dirs.join( '\n' ) ); // eslint-disable-line no-console
}

main();
