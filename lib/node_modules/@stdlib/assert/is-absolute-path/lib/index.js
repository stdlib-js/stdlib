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
* Test if a value is an absolute path.
*
* @module @stdlib/assert/is-absolute-path
*
* @example
* var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
* var isAbsolutePath = require( '@stdlib/assert/is-absolute-path' );
*
* var bool;
* if ( IS_WINDOWS ) {
*     bool = isAbsolutePath( 'C:\\foo\\bar\\baz' );
*     // returns true
* } else {
*     bool = isAbsolutePath( '/foo/bar/baz' );
*     // returns true
* }
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var isAbsolutePathPosix = require( './posix.js' );
var isAbsolutePathWin32 = require( './win32.js' );


// MAIN //

var isAbsolutePath;
if ( IS_WINDOWS ) {
	isAbsolutePath = isAbsolutePathWin32;
} else {
	isAbsolutePath = isAbsolutePathPosix;
}
setReadOnly( isAbsolutePath, 'posix', isAbsolutePathPosix );
setReadOnly( isAbsolutePath, 'win32', isAbsolutePathWin32 );


// EXPORTS //

module.exports = isAbsolutePath;
