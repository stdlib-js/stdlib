/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/**
* Platform-specific path segment separator.
*
* @module @stdlib/constants/path/sep
* @type {string}
*
* @example
* var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
* var PATH_SEP = require( '@stdlib/constants/path/sep' );
*
* var parts;
* if ( IS_WINDOWS ) {
*     parts = 'foo\\bar\\baz'.split( PATH_SEP );
*     // returns ['foo','bar','baz']
* } else {
*     parts = 'foo/bar/baz'.split( PATH_SEP );
*     // returns ['foo','bar','baz']
* }
*/

// MODULES //

var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var PATH_SEP_WIN32 = require( '@stdlib/constants/path/sep-win32' );
var PATH_SEP_POSIX = require( '@stdlib/constants/path/sep-posix' );


// MAIN //

var PATH_SEP;
if ( IS_WINDOWS ) {
	PATH_SEP = PATH_SEP_WIN32;
} else {
	PATH_SEP = PATH_SEP_POSIX;
}


// EXPORTS //

module.exports = PATH_SEP;
