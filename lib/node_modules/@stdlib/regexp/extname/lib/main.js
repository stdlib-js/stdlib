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
var posix = require( '@stdlib/regexp/extname-posix' );
var win32 = require( '@stdlib/regexp/extname-windows' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );


// VARIABLES //

var PLATFORMS = [ 'posix', 'win32' ];


// MAIN //

/**
* Returns a regular expression to capture a filename extension.
*
* @param {string} [platform] - path platform (`win32` or `posix`)
* @throws {Error} platform must be `win32` or `posix`
* @returns {RegExp} regular expression
*
* @example
* var RE = reExtname();
* var base = RE.exec( '/foo/bar/index.js' )[ 1 ];
* // returns '.js'
*/
function reExtname( platform ) {
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

module.exports = reExtname;
