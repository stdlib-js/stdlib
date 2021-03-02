/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var contains = require( '@stdlib/assert/contains' );
var posix = require( '@stdlib/regexp/filename-posix' );
var win32 = require( '@stdlib/regexp/filename-windows' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );


// VARIABLES //

var PLATFORMS = [ 'posix', 'win32' ];


// MAIN //

/**
* Returns a regular expression to split a filename.
*
* @param {string} [platform] - path platform (`win32` or `posix`)
* @throws {Error} platform must be `win32` or `posix`
* @returns {RegExp} regular expression
*
* @example
* var RE_FILENAME = reFilename( 'posix' );
* var parts = RE_FILENAME.exec( '/foo/bar/index.js' ).slice();
* // returns [ '/foo/bar/index.js', '/', 'foo/bar/', 'index.js', '.js' ]
*/
function reFilename( platform ) {
	if ( arguments.length > 0 ) {
		if ( !contains( PLATFORMS, platform ) ) {
			throw new Error( 'invalid argument. Platform must be either `posix` or `win32`. Value: `' + platform + '`.' );
		}
	}
	if ( platform === 'win32' || IS_WINDOWS ) {
		return win32();
	}
	// Case: platform === 'posix'
	return posix();
}


// EXPORTS //

module.exports = reFilename;
