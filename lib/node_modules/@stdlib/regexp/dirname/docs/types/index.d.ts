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

type PLATFORM = 'win32' | 'posix';

/**
* Interface for a regular expression to capture a path dirname.
*/
interface ReDirname {
	/**
	* Returns a regular expression to capture a path dirname.
	*
	* @param platform - path platform (`win32` or `posix`)
	* @returns regular expression
	*
	* @example
	* // Returns a platform-dependent regular expression when no `platform` is supplied:
	* var RE = reDirname();
	* // returns <RegExp>
	*
	* var bool = ( RE === reDirname( 'win32' ) ) || ( RE === reDirname( 'posix' ) );
	* // returns true
	*/
	( platform?: PLATFORM ): RegExp;

	/**
	* Regular expression to capture a path dirname.
	*
	* @example
	* var RE = reDirname.REGEXP;
	* // returns <RegExp>
	*/
	REGEXP: RegExp;

	/**
	* Regular expression to capture a Windows path dirname.
	*
	* @example
	* var dir = reDirname.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
	* // returns 'C:\\foo\\bar'
	*/
	REGEXP_WIN32: RegExp;

	/**
	* Regular expression to capture a POSIX path dirname.
	*
	* @example
	* var dir = reDirname.REGEXP_POSIX.exec( 'foo/bar/index.js' )[ 1 ]
	* // returns 'foo/bar'
	*/
	REGEXP_POSIX: RegExp;
}

/**
* Returns a regular expression to capture a path dirname.
*
* @param platform - path platform (`win32` or `posix`)
* @returns regular expression
*
* @example
* var RE_DIRNAME = reDirname();
* // returns <RegExp>
*
* @example
* var RE_DIRNAME = reDirname( 'posix' );
* var dir = RE_DIRNAME.exec( '/foo/bar/index.js' )[ 1 ];
* // returns '/foo/bar/'
*
* @example
* var RE_DIRNAME = reDirname( 'win32' );
* var dir = RE_DIRNAME.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
* // returns 'C:\\foo\\bar'
*/
declare var reDirname: ReDirname;


// EXPORTS //

export = reDirname;
