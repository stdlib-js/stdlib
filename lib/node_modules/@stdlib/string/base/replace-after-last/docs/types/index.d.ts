/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Replaces the substring after the last occurrence of a specified search string.
*
* ## Notes
*
* -   The function scans a provided string from the starting index to the beginning of the string (i.e., backward).
* -   If unable to find search string, the function returns the input string unchanged.
* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last string character, with the last string character corresponding to `fromIndex = -1`.
*
* @param str - input string
* @param search - search string
* @param replacement - replacement string
* @param fromIndex - index from which to start searching
* @returns output string
*
* @example
* var str = 'beep boop';
* var out = replaceAfterLast( str, ' ', 'foo', str.length );
* // returns 'beep foo'
*
* @example
* var str = 'beep boop';
* var out = replaceAfterLast( str, 'p', 'foo', str.length );
* // returns 'beep boopfoo'
*
* @example
* var str = 'Hello World!';
* var out = replaceAfterLast( str, '', 'foo',  str.length );
* // returns 'Hello World!'
*
* @example
* var str = 'Hello World!';
* var out = replaceAfterLast( str, 'xyz', 'foo', str.length );
* // returns 'Hello World!'
*
* @example
* var str = 'beep boop baz';
* var out = replaceAfterLast( str, 'p b', 'foo', str.length );
* // returns 'beep boop bfoo'
*
* @example
* var str = 'beep boop baz';
* var out = replaceAfterLast( str, 'p b', 'foo', 6 );
* // returns 'beep bfoo'
*/
declare function replaceAfterLast( str: string, search: string, replacement: string, fromIndex: number ): string;


// EXPORTS //

export = replaceAfterLast;
