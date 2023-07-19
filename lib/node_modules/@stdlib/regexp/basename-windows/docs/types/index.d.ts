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
* Interface for a regular expression to capture a Windows path basename.
*/
interface ReBasenameWindows {
	/**
	* Returns a regular expression to capture a Windows path basename.
	*
	* @returns regular expression
	*
	* @example
	* var RE_BASENAME_WINDOWS = reBasenameWindows();
	*
	* var bool = RE_BASENAME_WINDOWS.test( '\\\\?\\C:\\foo\\bar' );
	* // returns true
	*/
	(): RegExp;

	/**
	* Regular expression to capture a Windows path basename.
	*
	* @example
	* var match = reBasenameWindows.REGEXP.exec( 'foo\\file.pdf' )[ 1 ];
	* // returns 'file.pdf'
	*/
	REGEXP: RegExp;
}

/**
* Returns a regular expression to capture a Windows path basename.
*
* @returns regular expression
*
* @example
* var RE_BASENAME_WINDOWS = reBasenameWindows();
*
* var bool = RE_BASENAME_WINDOWS.test( '\\\\?\\C:\\foo\\bar' );
* // returns true
*
* @example
* var match = reBasenameWindows.REGEXP.exec( 'foo\\file.pdf' )[ 1 ];
* // returns 'file.pdf'
*/
declare var reBasenameWindows: ReBasenameWindows;


// EXPORTS //

export = reBasenameWindows;
