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

// TypeScript Version: 2.0

/**
* Replaces the substring before the first occurrence of a specified search string.
*
* @param str - input string
* @param search - search string
* @param replacement - replacement string
* @returns output string
*
* @example
* var out = replaceBefore( 'beep boop', ' ', 'foo' );
* // returns 'foo boop'
*
* @example
* var out = replaceBefore( 'beep boop', 'p', 'foo' );
* // returns 'foop boop'
*
* @example
* var out = replaceBefore( 'Hello World!', '', 'foo' );
* // returns 'Hello world!'
*
* @example
* var out = replaceBefore( 'Hello World!', 'xyz', 'foo' );
* // returns 'Hello World!'
*/
declare function replaceBefore( str: string,  search: string, replacement: string ): string; // tslint:disable-line:max-line-length


// EXPORTS //

export = replaceBefore;
