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
* Interface for a regular expression to capture a filename extension.
*/
interface ReExtname {
	/**
	* Returns a regular expression to capture a filename extension.
	*
	* @param platform - path platform (`win32` or `posix`)
	* @returns regular expression
	*
	* @example
	* // Returns a platform-dependent regular expression when no `platform` is supplied:
	* var RE = reExtname();
	* // returns <RegExp>
	*
	* var bool = ( RE === reExtname( 'win32' ) ) || ( RE === reExtname( 'posix' ) );
	* // returns true
	*/
	( platform?: PLATFORM ): RegExp;

	/**
	* Regular expression to capture a filename extension.
	*
	* @example
	* var RE = reExtname.REGEXP;
	* // returns <RegExp>
	*/
	REGEXP: RegExp;

	/**
	* Regular expression to capture a Windows filename extension.
	*
	* @example
	* var ext = reExtname.REGEXP_WIN32.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
	* // returns '.js'
	*/
	REGEXP_WIN32: RegExp;

	/**
	* Regular expression to capture a POSIX filename extension.
	*
	* @example
	* var ext = reExtname.REGEXP_POSIX.exec( 'foo/bar/index.js' )[ 1 ]
	* // returns '.js'
	*/
	REGEXP_POSIX: RegExp;
}

/**
* Returns a regular expression to capture a filename extension.
*
* @param platform - path platform (`win32` or `posix`)
* @returns regular expression
*
* @example
* var RE_EXTNAME = reExtname();
* // returns <RegExp>
*
* @example
* var RE_EXTNAME = reExtname( 'posix' );
* var dir = RE_EXTNAME.exec( '/foo/bar/index.js' )[ 1 ];
* // returns '.js'
*
* @example
* var RE_EXTNAME = reExtname( 'win32' );
* var dir = RE_EXTNAME.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
* // returns '.js'
*/
declare var reExtname: ReExtname;


// EXPORTS //

export = reExtname;
