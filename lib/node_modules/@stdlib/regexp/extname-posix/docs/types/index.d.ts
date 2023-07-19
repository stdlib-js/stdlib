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
* Interface for a regular expression to capture a POSIX filename extension.
*/
interface ReExtnamePosix {
	/**
	* Returns a regular expression to capture a POSIX filename extension.
	*
	* @returns regular expression
	*
	* @example
	* var RE_EXTNAME_POSIX = reExtnamePosix();
	* var ext = RE_EXTNAME_POSIX.exec( 'index.js' )[ 1 ];
	* // returns '.js'
	*/
	(): RegExp;

	/**
	* Regular expression to capture a POSIX filename extension.
	*
	* @example
	* var ext = reExtnamePosix.REGEXP.exec( 'index.js' )[ 1 ];
	* // returns '.js'
	*/
	REGEXP: RegExp;
}

/**
* Returns a regular expression to capture a POSIX filename extension.
*
* @returns regular expression
*
* @example
* var RE_EXTNAME_POSIX = reExtnamePosix();
* var ext = RE_EXTNAME_POSIX.exec( 'index.js' )[ 1 ];
* // returns '.js'
*
* @example
* var ext = reExtnamePosix.REGEXP.exec( 'index.js' )[ 1 ];
* // returns '.js'
*/
declare var reExtnamePosix: ReExtnamePosix;


// EXPORTS //

export = reExtnamePosix;
