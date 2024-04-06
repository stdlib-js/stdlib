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
* Replaces the substring before the last occurrence of a specified search string.
*
* ## Notes
*
* -   The function scans a provided string from the starting index to the beginning of the string (i.e., backward).
* -   If unable to find search string, the function returns the input string unchanged.
* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last string chraacter, with the last string chraacter corresponding to `fromIndex = -1`.
*
* @param str - input string
* @param search - search string
* @param replacement - replacement string
* @param fromIndex - index from which to start searching
* @returns output string
*
* @example
* var str = 'beep boop';
* var out = replaceBeforeLast( str, ' ', 'foo', str.length );
* // returns 'foo boop'
*
* @example
* var str = 'beep boop';
* var out = replaceBeforeLast( str, 'p', 'foo', str.length );
* // returns 'foop'
*
* @example
* var str = 'Hello World!';
* var out = replaceBeforeLast( str, '', 'foo',  str.length );
* // returns 'Hello World!'
*
* @example
* var str = 'Hello World!';
* var out = replaceBeforeLast( str, 'xyz', 'foo', str.length );
* // returns 'Hello World!'
*
* @example
* var str = 'beep boop baz';
* var out = replaceBeforeLast( str, 'p b', 'foo', str.length );
* // returns 'foop baz'
*
* @example
* var str = 'beep boop baz';
* var out = replaceBeforeLast( str, 'p b', 'foo', 6 );
* // returns 'foop boop baz'
*/
declare function replaceBeforeLast( str: string, search: string, replacement: string, fromIndex: number ): string;


// EXPORTS //

export = replaceBeforeLast;
