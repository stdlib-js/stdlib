/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var join = require( 'path' ).join;
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var unlink = require( '@stdlib/fs/unlink' ).sync;


// VARIABLES //

// Regular expression to test for a "loop" file:
var RE_LOOP_FILE = /^[a-z]_[a-z](?:_as_[a-z]_[a-z]|)\.(?:h|c)$/;


// MAIN //

/**
* Removes loop files from a directory.
*
* @private
* @param {string} dir - directory
*/
function removeLoopFiles( dir ) { // FIXME: replace with `@stdlib/fs/unlink-*` utility which removes files matching a provided regular expression
	var list;
	var i;

	list = readDir( dir );
	for ( i = 0; i < list.length; i++ ) {
		if ( RE_LOOP_FILE.test( list[ i ] ) ) {
			unlink( join( dir, list[ i ] ) );
		}
	}
}


// EXPORTS //

module.exports = removeLoopFiles;
