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
* Interface for a regular expression to parse a UNC path.
*/
interface ReUncPath {
	/**
	* Returns a regular expression to parse a UNC path.
	*
	* @returns regular expression
	*
	* @example
	* var RE_UNC_PATH = reUncPath();
	* var bool = RE_UNC_PATH.test( '\\\\server\\share' );
	* // returns true
	*
	* bool = RE_UNC_PATH.test( 'C:\\foo\\bar\\baz' );
	* // returns false
	*/
	(): RegExp;

	/**
	* Regular expression to parse a UNC path.
	*
	* @example
	* var parts = reUncPath.REGEXP.exec( '\\\\server\\share\\foo\\bar\\baz' )[ 1 ];
	* // returns 'server'
	*/
	REGEXP: RegExp;
}

/**
* Returns a regular expression to parse a UNC path.
*
* @returns regular expression
*
* @example
* var RE_UNC_PATH = reUncPath();
* var bool = RE_UNC_PATH.test( '\\\\server\\share' );
* // returns true
*
* bool = RE_UNC_PATH.test( 'C:\\foo\\bar\\baz' );
* // returns false
*
* @example
* var parts = reUncPath.REGEXP.exec( '\\\\server\\share\\foo\\bar\\baz' )[ 1 ];
* // returns 'server'
*/
declare var reUncPath: ReUncPath;


// EXPORTS //

export = reUncPath;
