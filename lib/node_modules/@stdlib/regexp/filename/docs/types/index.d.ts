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
* Interface for a regular expression to split a filename.
*/
interface ReFilename {
	/**
	* Returns a regular expression to split a filename.
	*
	* @param platform - path platform (`win32` or `posix`)
	* @returns regular expression
	*
	* @example
	* // Returns a platform-dependent regular expression when no `platform` is supplied:
	* var RE = reFilename();
	* // returns <RegExp>
	*
	* var bool = ( RE === reFilename( 'win32' ) ) || ( RE === reFilename( 'posix' ) );
	* // returns true
	*/
	( platform?: PLATFORM ): RegExp;

	/**
	* Regular expression to split a filename.
	*
	* @example
	* var RE = reFilename.REGEXP;
	* // returns <RegExp>
	*/
	REGEXP: RegExp;

	/**
	* Regular expression to split a Windows filename.
	*
	* @example
	* var parts = reFilename.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
	* // returns [ 'C:\\foo\\bar\\index.js', 'C:', '\\', 'foo\\bar\\', 'index.js', '.js' ]
	*/
	REGEXP_WIN32: RegExp;

	/**
	* Regular expression to split a POSIX filename.
	*
	* @example
	* var parts = reFilename.REGEXP_POSIX.exec( 'foo/bar/index.js' )[ 1 ]
	* // returns [ '/foo/bar/index.js', '/', 'foo/bar/', 'index.js', '.js' ]
	*/
	REGEXP_POSIX: RegExp;
}

/**
* Returns a regular expression to split a filename.
*
* @param platform - path platform (`win32` or `posix`)
* @returns regular expression
*
* @example
* var RE_FILENAME = reFilename();
* // returns <RegExp>
*
* @example
* var RE_FILENAME = reFilename( 'posix' );
* var parts = RE_FILENAME.exec( '/foo/bar/index.js' )[ 1 ];
* // returns [ '/foo/bar/index.js', '/', 'foo/bar/', 'index.js', '.js' ]
*
* @example
* var RE_FILENAME = reFilename( 'win32' );
* var parts = RE_FILENAME.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
* // returns [ 'C:\\foo\\bar\\index.js', 'C:', '\\', 'foo\\bar\\', 'index.js', '.js' ]
*/
declare var reFilename: ReFilename;


// EXPORTS //

export = reFilename;
