/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Replaces the substring before the first occurrence of a specified search string.
*
* ## Notes
*
* -   If unable to find search string, the function returns the input string unchanged.
* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last string character, with the last string character corresponding to `fromIndex = -1`.
*
* @param str - input string
* @param search - search string
* @param replacement - replacement string
* @param fromIndex - index at which to start the search
* @returns output string
*
* @example
* var out = replaceBefore( 'beep boop', ' ', 'foo', 0 );
* // returns 'foo boop'
*
* @example
* var out = replaceBefore( 'beep boop', 'p', 'foo', 5 );
* // returns 'foop'
*
* @example
* var out = replaceBefore( 'Hello World!', '', 'foo', 0 );
* // returns 'Hello world!'
*
* @example
* var out = replaceBefore( 'Hello World!', 'xyz', 'foo', 0 );
* // returns 'Hello World!'
*/
declare function replaceBefore( str: string,  search: string, replacement: string, fromIndex: number ): string;


// EXPORTS //

export = replaceBefore;
