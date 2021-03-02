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
* Interface for a regular expression to capture the last part of a path.
*/
interface ReBasename {
	/**
	* Returns a regular expression to capture the last part of a path.
	*
	* @param platform - path platform (`win32` or `posix`)
	* @returns regular expression
	*
	* @example
	* // Returns a platform-dependent regular expression when no `platform` is supplied:
	* var RE = reBasename();
	* // returns <RegExp>
	*
	* var bool = ( RE === reBasename( 'win32' ) ) || ( RE === reBasename( 'posix' ) );
	* // returns true
	*/
	( platform?: PLATFORM ): RegExp;

	/**
	* Regular expression to capture the last part of a path.
	*
	* @example
	* var RE = reBasename.REGEXP;
	* // returns <RegExp>
	*/
	REGEXP: RegExp;

	/**
	* Regular expression to capture the last part of a Windows path.
	*
	* @example
	* var base = reBasename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
	* // returns 'index.js'
	*/
	REGEXP_WIN32: RegExp;

	/**
	* Regular expression to capture the last part of a POSIX path.
	*
	* @example
	* var base = reBasename.REGEXP_POSIX.exec( 'foo/bar/index.js' )[ 1 ]
	* // returns 'index.js'
	*/
	REGEXP_POSIX: RegExp;
}

/**
* Returns a regular expression to capture the last part of a path.
*
* @param platform - path platform (`win32` or `posix`)
* @returns regular expression
*
* @example
* var RE_BASENAME = reBasename();
* // returns <RegExp>
*
* @example
* var RE_BASENAME = reBasename( 'posix' );
* var base = RE_BASENAME.exec( '/foo/bar/index.js' )[ 1 ];
* // returns 'index.js'
*
* @example
* var RE_BASENAME = reBasename( 'win32' );
* var base = RE_BASENAME.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
* // returns 'index.js'
*/
declare var reBasename: ReBasename;


// EXPORTS //

export = reBasename;
