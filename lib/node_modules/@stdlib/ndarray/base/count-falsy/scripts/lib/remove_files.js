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

var path = require( 'path' );
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var unlink = require( '@stdlib/fs/unlink' ).sync;


// MAIN //

/**
* Removes files from a directory which match a provided regular expression.
*
* @private
* @param {string} dir - directory
* @param {RegExp} re - regular expression to test whether a file should be removed
*/
function removeFilesByRegExp( dir, re ) { // TODO: create a `@stdlib/fs/*` utility package for this
	var list;
	var i;

	list = readDir( dir );
	for ( i = 0; i < list.length; i++ ) {
		if ( re.test( list[ i ] ) ) {
			unlink( path.join( dir, list[ i ] ) );
		}
	}
}


// EXPORTS //

module.exports = removeFilesByRegExp;
