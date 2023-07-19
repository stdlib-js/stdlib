/*
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

// TypeScript Version: 2.0

/**
* Interface for a regular expression to capture a POSIX path dirname.
*/
interface ReDirnamePosix {
	/**
	* Returns a regular expression to capture a POSIX path dirname.
	*
	* @returns regular expression
	*
	* @example
	* var RE_DIRNAME_POSIX = reDirnamePosix();
	* var dir = RE_DIRNAME_POSIX.exec( 'foo/bar/index.js' )[ 1 ];
	* // returns 'foo/bar'
	*/
	(): RegExp;

	/**
	* Regular expression to capture a POSIX path dirname.
	*
	* @example
	* var ext = reExtnamePosix.REGEXP.exec( 'index.js' )[ 1 ];
	* // returns '.js'
	*/
	REGEXP: RegExp;
}

/**
* Returns a regular expression to capture a POSIX path dirname.
*
* @returns regular expression
*
* @example
* var RE_DIRNAME_POSIX = reDirnamePosix();
* var dir = RE_DIRNAME_POSIX.exec( 'foo/bar/index.js' )[ 1 ];
* // returns 'foo/bar'
*
* @example
* var dir = reDirnamePosix.REGEXP.exec( 'foo/bar/index.js' )[ 1 ];
* // returns 'foo/bar'
*/
declare var reDirnamePosix: ReDirnamePosix;


// EXPORTS //

export = reDirnamePosix;
