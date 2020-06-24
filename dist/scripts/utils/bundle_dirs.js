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

var path = require( 'path' );
var stat = require( 'fs' ).statSync; // eslint-disable-line no-sync
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var DIST_DIR = require( './dist_dir.js' );


// MAIN //

/**
* Returns a list of bundle package directories.
*
* @private
* @returns {(StringArray|Error)} list of bundle package directories
*/
function bundleDirs() {
	var stats;
	var tmp;
	var out;
	var f;
	var i;

	tmp = readDir( DIST_DIR );
	if ( tmp instanceof Error ) {
		return tmp;
	}
	out = [];
	for ( i = 0; i < tmp.length; i++ ) {
		f = path.join( DIST_DIR, tmp[ i ] );
		stats = stat( f );
		if ( stats.isDirectory() && tmp[ i ] !== 'scripts' ) {
			out.push( f );
		}
	}
	return out;
}


// EXPORTS //

module.exports = bundleDirs;
