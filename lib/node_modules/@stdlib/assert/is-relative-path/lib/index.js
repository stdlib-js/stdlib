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
* Test if a value is a relative path.
*
* @module @stdlib/assert/is-relative-path
*
* @example
* var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
* var isRelativePath = require( '@stdlib/assert/is-relative-path' );
*
* var bool;
* if ( IS_WINDOWS ) {
*     bool = isRelativePath( 'foo\\bar\\baz' );
*     // returns true
*
*     bool = isRelativePath( 'C:\\foo\\..\\bar\\baz' );
*     // returns false
* } else {
*     bool = isRelativePath( './foo/bar/baz' );
*     // returns true
*
*     bool = isRelativePath( '/foo/../bar/baz' );
*     // returns false
* }
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var isRelativePathPosix = require( './posix.js' );
var isRelativePathWin32 = require( './win32.js' );


// MAIN //

var isRelativePath;
if ( IS_WINDOWS ) {
	isRelativePath = isRelativePathWin32;
} else {
	isRelativePath = isRelativePathPosix;
}
setReadOnly( isRelativePath, 'posix', isRelativePathPosix );
setReadOnly( isRelativePath, 'win32', isRelativePathWin32 );


// EXPORTS //

module.exports = isRelativePath;
