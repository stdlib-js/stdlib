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
* Interface for a regular expression to capture the last part of a POSIX path.
*/
interface ReBasenamePosix {
	/**
	* Returns a regular expression to capture the last part of a POSIX path.
	*
	* @returns regular expression
	*
	* @example
	* var RE_BASENAME_POSIX = reBasenamePosix();
	* var base = RE_BASENAME_POSIX.exec( 'foo/bar/index.js' )[ 1 ];
	* // returns 'index.js'
	*/
	(): RegExp;

	/**
	* Regular expression to capture the last part of a POSIX path.
	*
	* @example
	* var base = reBasenamePosix.REGEXP.exec( 'foo/bar/index.js' )[ 1 ]
	* // returns 'index.js'
	*/
	REGEXP: RegExp;
}

/**
* Returns a regular expression to capture the last part of a POSIX path.
*
* @returns regular expression
*
* @example
* var RE_BASENAME_POSIX = reBasenamePosix();
* var base = RE_BASENAME_POSIX.exec( 'foo/bar/index.js' )[ 1 ];
* // returns 'index.js'
*
* @example
* var base = reBasenamePosix.REGEXP.exec( 'foo/bar/index.js' )[ 1 ]
* // returns 'index.js'
*/
declare var reBasenamePosix: ReBasenamePosix;


// EXPORTS //

export = reBasenamePosix;
