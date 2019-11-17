/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Interface defining `isRelativePath` with methods for testing POSIX and Windows paths, respectively.
*/
interface IsRelativePath {
	/**
	* Tests if a value is a relative path.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a relative path
	*
	* @example
	* var IS_WINDOWS = require( `@stdlib/assert/is-windows` );
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
	( value: any ): boolean;

	/**
	* Tests if a value is a POSIX relative path.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a POSIX relative path
	*
	* @example
	* var bool = isRelativePath.posix( './foo/bar/baz' );
	* // returns true
	*
	* @example
	* var bool = isRelativePath.posix( '/foo/../bar/baz' );
	* // returns false
	*/
	posix( value: any ): boolean;

	/**
	* Tests if a value is a Windows relative path.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a Windows relative path
	*
	* @example
	* var bool = isRelativePath.win32( 'foo\\bar\\baz' );
	* // returns true
	*
	* @example
	* var bool = isRelativePath.win32( 'C:\\foo\\..\\bar\\baz' );
	* // returns false
	*/
	win32( value: any ): boolean;
}

/**
* Tests if a value is a relative path.
*
* ## Notes
*
* -   Function behavior is platform-specific. On Windows platforms, the function is equal to `.win32()`. On POSIX platforms, the function is equal to `.posix()`.
*
* @param value - value to test
* @returns boolean indicating whether value is a relative path
*
* @example
* var IS_WINDOWS = require( `@stdlib/assert/is-windows` );
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
*
* @example
* var bool = isRelativePath.posix( './foo/bar/baz' );
* // returns true
*
* @example
* var bool = isRelativePath.posix( '/foo/../bar/baz' );
* // returns false
*
* @example
* var bool = isRelativePath.win32( 'foo\\bar\\baz' );
* // returns true
*
* @example
* var bool = isRelativePath.win32( 'C:\\foo\\..\\bar\\baz' );
* // returns false
*/
declare var isRelativePath: IsRelativePath;


// EXPORTS //

export = isRelativePath;
