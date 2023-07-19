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
* Interface for a regular expression to split a Windows filename.
*/
interface ReFilenameWindows {
	/**
	* Returns a regular expression to split a Windows filename.
	*
	* @returns regular expression
	*
	* @example
	* var RE_FILENAME_WINDOWS = reFilenameWindows();
	* var parts = RE_FILENAME_WINDOWS.exec( 'C:\\foo\\bar\\index.js' ).slice();
	* // returns [ 'C:\\foo\\bar\\index.js', 'C:', '\\', 'foo\\bar\\', 'index.js', '.js' ]
	*/
	(): RegExp;

	/**
	* Regular expression to split a Windows filename.
	*
	* @example
	* var parts = reFilenameWindows.REGEXP.exec( 'C:\\foo\\bar\\index.js' ).slice();
	* // returns [ 'C:\\foo\\bar\\index.js', 'C:', '\\', 'foo\\bar\\', 'index.js', '.js' ]
	*/
	REGEXP: RegExp;
}

/**
* Returns a regular expression to split a Windows filename.
*
* @returns regular expression
*
* @example
* var RE_FILENAME_WINDOWS = reFilenameWindows();
* var parts = RE_FILENAME_WINDOWS.exec( 'C:\\foo\\bar\\index.js' ).slice();
* // returns [ 'C:\\foo\\bar\\index.js', 'C:', '\\', 'foo\\bar\\', 'index.js', '.js' ]
*
* @example
* var parts = reFilenameWindows.REGEXP.exec( 'C:\\foo\\bar\\index.js' ).slice();
* // returns [ 'C:\\foo\\bar\\index.js', 'C:', '\\', 'foo\\bar\\', 'index.js', '.js' ]
*/
declare var reFilenameWindows: ReFilenameWindows;


// EXPORTS //

export = reFilenameWindows;
