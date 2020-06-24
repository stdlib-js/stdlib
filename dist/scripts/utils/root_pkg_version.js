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

'use strict';

// MODULES //

var resolveParentPath = require( '@stdlib/fs/resolve-parent-path' ).sync;
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var DIST_DIR = require( './dist_dir.js' );


// MAIN //

/**
* Returns the version of the root (project) `package.json`.
*
* @private
* @returns {(string|Error)} version
*/
function version() {
	var root;
	var pkg;

	// Find the root `package.json`:
	root = resolveParentPath( 'package.json', {
		'dir': DIST_DIR
	});

	// Get the root version:
	pkg = readJSON( root );
	if ( pkg instanceof Error ) {
		return pkg;
	}
	return pkg.version;
}


// EXPORTS //

module.exports = version;
